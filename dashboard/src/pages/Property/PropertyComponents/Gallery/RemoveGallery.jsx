import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function RemoveGallery({
  galleryData,
  getGallery,
  setRemoving,
}) {
  const webpImages =
    galleryData?.gallery?.filter((img) =>
      img.toLowerCase().endsWith(".webp")
    ) || [];

  const getCurrentGallery = async () => {
    try {
      const response = await API.get(`/gallery/${galleryData?.uniqueId}`);
      setRemoving(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  const handleRemoveImage = async (img) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this gallery image?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        const data = { webpPaths: [img] };
        const response = await API.post(
          `/gallery/remove/${galleryData?.uniqueId}`,
          data
        );
        getGallery();
        getCurrentGallery();
        Swal.fire({
          title: "Removed!",
          text:
            response.data.message || "The image has been removed from gallery.",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response.data.error || "Something went wrong.",
          icon: "error",
        });
      }
    }
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <Card.Title className="mb-0">Remove Gallery Images</Card.Title>
            <Button size="sm" variant="danger" onClick={() => setRemoving("")}>
              <i className="fe fe-x me-1"></i>Cancel
            </Button>
          </Card.Header>
          <Card.Body>
            <Row className="g-3">
              {webpImages.map((img, index) => (
                <Col key={index} md={3} sm={6} xs={12}>
                  <div className="position-relative border border-danger rounded overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_MEDIA_URL}/${img}`}
                      className="img-fluid rounded w-100 h-100 profile-ratio"
                      alt={`remove-gallery-${index}`}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="position-absolute top-0 end-0 rounded-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(img);
                      }}
                    >
                      <i className="fe fe-x"></i>
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
