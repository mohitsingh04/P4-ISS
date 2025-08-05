import React, { useCallback, useState } from "react";
import { Button, Card, Col, Form, Image, Row, Spinner } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function AddAccomodationImages({
  accomodation,
  setAddingImages,
  getAccomodation,
}) {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (images?.length + acceptedFiles?.length > 8) {
        Swal.fire({
          icon: "error",
          title: "Limit Exceeded",
          text: "You can upload a maximum of 8 images.",
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (images?.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "No Images",
        text: "Please upload at least one image.",
      });
      return;
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      await API.patch(
        `/accomodation/images/${accomodation?.uniqueId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Accomodation images uploaded successfully.",
      });

      setImages([]);
      setPreviews([]);
      setAddingImages("");
      getAccomodation();
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.error ||
        error?.response?.data?.message ||
        "Failed to upload Accomodation images.";
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>Add Accomodation Images</Card.Title>
          <div>
            <Button
              onClick={() => setAddingImages("")}
              variant="danger"
              size="sm"
            >
              Cancel
            </Button>
          </div>
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
                  ? "Drop the Accomodation images here..."
                  : "Drag & drop Accomodation images here, or click to select"}
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
              variant="success"
              disabled={loading}
            >
              {loading ? (
                <Spinner size="sm" animation="border" />
              ) : (
                <p className="p-0 m-0">
                  <i className="fe fe-check-circle me-1"></i>Upload{" "}
                  {images.length} Image
                  {images.length !== 1 ? "s" : ""}
                </p>
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
