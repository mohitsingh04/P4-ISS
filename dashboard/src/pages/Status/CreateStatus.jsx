import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../context/API";
import { CreateStatusValidation } from "../../context/ValidationSchemas";

export default function CreateStatus() {
  const navigator = useNavigate();
  const [statusOptions, setStatusOptions] = useState([]);
  const [responseLoading, setResponseLoading] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  const getAuhtUser = async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getAuhtUser();
  }, []);

  if (!authLoading) {
    if (!authUser?.permissions?.some((item) => item === "Create Status")) {
      navigator("/dashboard/access-denied");
    }
  }

  useEffect(() => {
    const fetchStatusOptions = async () => {
      try {
        const response = await API.get("/status");
        const data = response.data;
        const filteredOptions = data.filter(
          (item) =>
            !["Active", "Pending", "Suspended"].includes(item.parent_status)
        );
        setStatusOptions(filteredOptions);
      } catch (error) {
        console.error("Error fetching status options:", error);
      }
    };
    fetchStatusOptions();
  }, []);

  const formik = useFormik({
    initialValues: {
      status_name: "",
      parent_status: "",
      description: "",
    },
    validationSchema: CreateStatusValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setResponseLoading(true);
      try {
        const response = await API.post("/status", values);
        Swal.fire(
          "Success",
          response.data.message || "Status created successfully!",
          "success"
        ).then(() => {
          navigator("/dashboard/status");
        });
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to create status",
          "error"
        );
      } finally {
        setResponseLoading(false);
      }
    },
  });

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Status</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/status" }}
            >
              Status
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Create Status</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="status_name">Status Name</Form.Label>
                      <Form.Select
                        id="status_name"
                        name="status_name"
                        value={formik.values.status_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.errors.status_name}
                      >
                        <option value="">Select Status</option>
                        <option value="Uncategorized">Uncategorized</option>
                        {statusOptions.map((item, index) => (
                          <option key={index} value={item.parent_status}>
                            {item.parent_status}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.status_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="parent_status">
                        Parent Status
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="parent_status"
                        id="parent_status"
                        value={formik.values.parent_status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter parent status"
                        isInvalid={formik.errors.parent_status}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.parent_status}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="description">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    id="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter description (max 200 characters)"
                    isInvalid={formik.errors.description}
                  />
                  <small className="text-muted float-end">
                    {formik?.values?.description?.length}/200 characters
                  </small>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={responseLoading}
                >
                  <i className="fe fe-clock me-1"></i>
                  {responseLoading ? "Submitting..." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
