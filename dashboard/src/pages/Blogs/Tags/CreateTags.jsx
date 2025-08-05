import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../context/API";

export default function CreateTags({ onAfterCreate }) {
  const formik = useFormik({
    initialValues: {
      blog_tag: "",
    },
    validationSchema: Yup.object({
      blog_tag: Yup.string()
        .trim()
        .required("Blog tag is required")
        .min(2, "Must be at least 2 characters"),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await API.post("/blog/tag", values);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data?.message || "Tag created successfully!",
        });

        resetForm();
        onAfterCreate();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            error.response?.data?.message ||
            error.message ||
            "Failed to create tag. Please try again.",
        });
      }
    },
  });

  return (
    <div>
      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Header>
              <Card.Title>Create Tag</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="blog_tag">
                  <Form.Label>Blog Tag</Form.Label>
                  <Form.Control
                    type="text"
                    name="blog_tag"
                    placeholder="Enter tag name"
                    value={formik.values.blog_tag}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.blog_tag}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.blog_tag}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
