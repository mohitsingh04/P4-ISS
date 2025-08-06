import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function RemoveHostelImages({
  hostel,
  setRemoving,
  getHostelData,
}) {
  const webpImages =
    hostel?.hostel_images?.filter((img) =>
      img.toLowerCase().endsWith(".webp")
    ) || [];

  useEffect(() => {
    if (hostel?.hostel_images.length <= 0) {
      setRemoving("");
    }
  }, [hostel]);

  const handleRemoveImage = async (imgPath) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this image from the hostel gallery?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.post(
          `/hostel/images/remove/${hostel?.uniqueId}`,
          { webpPaths: [imgPath] }
        );
        setRemoving(response.data.hostel);
        getHostelData();
        Swal.fire({
          title: "Removed!",
          text: response.data.message || "The image has been removed.",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.error || "Something went wrong.",
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
            <Card.Title className="mb-0">Remove Hostel Images</Card.Title>
            <Button
              size="sm"
              variant="danger"
              onClick={() => setRemoving(false)}
            >
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
                      alt={img}
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
