import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, Button, Form, Row, Col, Image, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function AddCertifications({
  property,
  authUser,
  getCertifications,
}) {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (images.length + acceptedFiles.length > 8) {
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

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape({}),
    onSubmit: async () => {
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
        formData.append("certifications", image);
      });
      formData.append("user", authUser?.id || "guest");
      formData.append("property_id", property?.uniqueId);

      try {
        setLoading(true);
        await API.post("/certifications", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        Swal.fire({
          icon: "success",
          title: "Uploaded",
          text: "Images uploaded successfully.",
        });

        getCertifications();
        setImages([]);
        setPreviews([]);
      } catch (error) {
        const message =
          error.response?.data?.message || "Failed to upload images.";
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Card className="shadow-sm border-0">
      <Card.Header className="bg-white">
        <Card.Title className="mb-0">Add Certifications</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
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
                : "Drag & drop images here, or click to select"}
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
              <p className="m-0 p-0">
                <i className="fe fe-check-circle me-1"></i>Upload{" "}
                {images.length} Image{images.length !== 1 ? "s" : ""}
              </p>
            )}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
