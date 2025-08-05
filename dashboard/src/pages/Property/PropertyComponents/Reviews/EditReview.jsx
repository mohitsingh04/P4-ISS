import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert2";
import { reviewValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";

export default function EditReview({ review, getReview, setReviews }) {
  const formik = useFormik({
    initialValues: {
      name: review?.name || "",
      email: review?.email || "",
      phone_number: review?.phone_number || "",
      review: review?.review || "",
      rating: review?.rating || 0,
    },
    enableReinitialize: true,
    validationSchema: reviewValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/review/${review.uniqueId}`, values);
        Swal.fire({
          icon: "success",
          title: response.data.message || "Review Updated",
          text: "Your review has been updated successfully!",
        });
        setReviews("");
        getReview();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text:
            error.response.data.error ||
            "Something went wrong! Please try again later.",
        });
      }
    },
  });

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card>
            <Card.Header>
              <h5 className="m-0">Edit Review</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.errors.name && (
                        <div className="text-danger">{formik.errors.name}</div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="phone_number">
                      <Form.Label>Phone Number</Form.Label>
                      <PhoneInput
                        country={"in"}
                        value={formik.values.phone_number}
                        inputClass="w-100 border"
                        buttonClass="border bg-white"
                        onChange={(value) =>
                          formik.setFieldValue("phone_number", value)
                        }
                      />
                      {formik.errors.phone_number && (
                        <div className="text-danger">
                          {formik.errors.phone_number}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Rating</Form.Label>
                      <div>
                        <Rating
                          name="rating"
                          value={formik.values.rating}
                          onChange={(event, newValue) =>
                            formik.setFieldValue("rating", newValue)
                          }
                        />
                      </div>
                      {formik.errors.rating && (
                        <div className="text-danger">
                          {formik.errors.rating}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="review">
                      <Form.Label>Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        maxLength={1500}
                        placeholder="Write your review..."
                        {...formik.getFieldProps("review")}
                      />
                      <div className="text-muted">
                        {formik.values.review.length} / 1500
                      </div>
                      {formik.errors.review && (
                        <div className="text-danger">
                          {formik.errors.review}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit">
                  <i className="fe fe-check-circle me-1"></i>Update
                </Button>
                <Button
                  variant="danger"
                  className="ms-1"
                  onClick={() => setReviews("")}
                >
                  <i className="fe fe-x me-1"></i>cancel
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
