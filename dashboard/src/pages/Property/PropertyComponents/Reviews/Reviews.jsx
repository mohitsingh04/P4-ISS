import React, { useCallback, useEffect, useState } from "react";
import AddReview from "./AddReview";
import { Card, Col, Row, Button } from "react-bootstrap";
import { API } from "../../../../context/API";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import EditReview from "./EditReview";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [property, setProperty] = useState("");
  const { objectId } = useParams();
  const [isUpdating, setIsUpdating] = useState("");
  const [expandedReviews, setExpandedReviews] = useState({});

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getReview = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(`review/property/${property?.uniqueId}`);
        setReviews(response.data);
      } catch (error) {
        console.error(
          error.response.data.error ||
            error.response.data.message ||
            error.message
        );
      }
    }
  }, [property]);

  useEffect(() => {
    getReview();
  }, [getReview]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getRandomColor = () => {
    const colors = [
      "primary",
      "secondary",
      "warning",
      "danger",
      "success",
      "info",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await API.delete(`review/${id}`);
        setReviews(reviews.filter((review) => review._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "Review has been deleted.",
          icon: "success",
        });
        getReview();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.response.data.error || "Failed to delete review",
          icon: "error",
        });
      }
    }
  };

  const toggleExpanded = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {!isUpdating ? (
        <>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Header>
                  <h5 className="m-0">View Ratings</h5>
                </Card.Header>
                <Card.Body>
                  {reviews.length > 0 ? (
                    reviews.map((review) => (
                      <Card key={review._id} className="mb-3 p-3">
                        <Row className="align-items-center">
                          <Col md={1} className="text-center">
                            {(() => {
                              const randomColor = getRandomColor();
                              return (
                                <div
                                  className={`d-flex justify-content-center align-items-center rounded-circle fw-bold fs-4 text-${randomColor}-emphasis bg-${randomColor}-subtle overflow-hidden`}
                                  style={{ width: "60px", height: "60px" }}
                                >
                                  {getInitials(review.name)}
                                </div>
                              );
                            })()}
                          </Col>
                          <Col md={9}>
                            <Row>
                              <Col>
                                <strong>Name:</strong> {review.name}
                              </Col>
                              {review?.email && (
                                <Col>
                                  <strong>Email:</strong> {review.email}
                                </Col>
                              )}
                            </Row>
                            <Row>
                              {review?.phone_number && (
                                <Col>
                                  <strong>Contact:</strong>{" "}
                                  {review.phone_number}
                                </Col>
                              )}
                            </Row>
                            <p className="mt-2">
                              <strong>Rating:</strong>{" "}
                              {"⭐".repeat(review.rating)}
                            </p>
                            <div>
                              <p
                                className={`review-text ${
                                  expandedReviews[review._id]
                                    ? "expanded"
                                    : "collapsed"
                                }`}
                              >
                                {review.review}
                              </p>
                              {review.review?.split(" ").length > 80 && (
                                <Button
                                  variant="link"
                                  className="p-0"
                                  onClick={() => toggleExpanded(review._id)}
                                >
                                  {expandedReviews[review._id]
                                    ? "Read less"
                                    : "Read more"}
                                </Button>
                              )}
                            </div>
                          </Col>
                          <Col md={2} className="text-end">
                            <Button
                              variant="primary"
                              size="sm"
                              className="me-2"
                              onClick={() => setIsUpdating(review)}
                            >
                              <i className="fe fe-edit"></i>
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDelete(review.uniqueId)}
                            >
                              <i className="fe fe-trash-2"></i>
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    ))
                  ) : (
                    <p>No reviews available.</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <AddReview property={property} getReview={getReview} />
        </>
      ) : (
        <EditReview
          review={isUpdating}
          getReview={getReview}
          setReviews={setIsUpdating}
        />
      )}
    </div>
  );
}
