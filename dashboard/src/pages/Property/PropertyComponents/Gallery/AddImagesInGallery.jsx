import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, Button, Form, Row, Col, Image, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function AddImagesInGallery({
  gallery,
  refreshGallery,
  setAddingMore,
}) {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (images.length + acceptedFiles.length > 20) {
        Swal.fire({
          icon: "error",
          title: "Limit Exceeded",
          text: "You can upload a maximum of 20 images at a time.",
        });
        return;
      }

      const newImages = [...images, ...acceptedFiles];
      const newPreviews = newImages.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setImages(newImages);
      setPreviews(newPreviews);
    },
    [images]
  );

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setImages(updatedImages);
    setPreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "No Images",
        text: "Please upload at least one image.",
      });
      return;
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("gallery", image);
    });

    try {
      setLoading(true);
      await API.post(`/gallery/add/${gallery?.uniqueId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Images added to gallery successfully.",
      });

      setImages([]);
      setPreviews([]);
      setAddingMore(false);
      refreshGallery();
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to upload gallery images.";
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: message,
      });
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: true,
  });

  return (
    <Card className="shadow-sm border-0">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title className="mb-0">
          Add Images to Gallery: {gallery?.title}
        </Card.Title>
        <Button variant="danger" size="sm" onClick={() => setAddingMore("")}>
          <i className="fe fe-x me-1"></i>Cancel
        </Button>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <div
            {...getRootProps()}
            className={`p-4 border rounded text-center ${
              isDragActive ? "border-primary bg-light" : "border-secondary"
            }`}
            style={{ cursor: "pointer" }}
          >
            <input {...getInputProps()} />
            <p className="m-0">
              {isDragActive
                ? "Drop the images here..."
                : "Drag & drop gallery images here, or click to select"}
            </p>
          </div>

          {previews.length > 0 && (
            <Row className="mt-4">
              {previews.map((file, idx) => (
                <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <div className="position-relative border rounded shadow-sm p-2 bg-white">
                    <Image
                      src={file.preview}
                      fluid
                      style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeImage(idx)}
                      className="position-absolute top-0 end-0 m-1"
                      title="Remove"
                    >
                      <i className="fe fe-x"></i>
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          )}

          <Button
            type="submit"
            className="mt-3 w-100 fw-bold"
            variant="primary"
            disabled={loading}
          >
            {loading ? (
              <Spinner size="sm" animation="border" />
            ) : (
              <p className="p-0 m-0">
                <i className="fe fe-check-circle me-1"></i>Upload
                {images.length} Image{images.length !== 1 ? "s" : ""}
              </p>
            )}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
