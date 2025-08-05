import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../context/API";
import { CreateStatusValidation } from "../../context/ValidationSchemas";
import Skeleton from "react-loading-skeleton";
import EditSkeleton from "../../components/Skeletons/EditSkeleton";

export default function EditStatus() {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [statusOptions, setStatusOptions] = useState([]);
  const [responseLoading, setResponseLoading] = useState(false);
  const [mainStatus, setMainStatus] = useState(null);
  const [loading, setLoading] = useState(true);
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
    if (!authUser?.permissions?.some((item) => item === "Update Status")) {
      navigator("/dashboard/access-denied");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statusRes, mainStatusRes] = await Promise.all([
          API.get("/status"),
          objectId ? API.get(`/status/${objectId}`) : Promise.resolve(null),
        ]);

        setStatusOptions(
          statusRes.data.filter(
            (item) =>
              !["Active", "Pending", "Suspended"].includes(item.parent_status)
          )
        );
        if (mainStatusRes) {
          setMainStatus(mainStatusRes.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [objectId]);

  const formik = useFormik({
    initialValues: {
      status_name: mainStatus?.name || "",
      parent_status: mainStatus?.parent_status || "",
      description: mainStatus?.description || "",
    },
    enableReinitialize: true,
    validationSchema: CreateStatusValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setResponseLoading(true);
      try {
        const response = await API.patch(`/status/${objectId}`, values);
        console.log(response);
        Swal.fire(
          "Success",
          response.data.message || `Status updated  successfully!`,
          "success"
        ).then(() => {
          navigator("/dashboard/status");
        });
      } catch (error) {
        console.error(error);
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to process request",
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Edit Status</h1>
          {!loading ? (
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
              <Breadcrumb.Item>Edit</Breadcrumb.Item>
              <Breadcrumb.Item active>{mainStatus.name}</Breadcrumb.Item>
            </Breadcrumb>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col>
          {!loading ? (
            <Card>
              <Card.Header>
                <h5 className="mb-0">{objectId ? "Edit" : "Create"} Status</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Status Name</Form.Label>
                        <Form.Select
                          id="status_name"
                          name="status_name"
                          value={formik.values.status_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.status_name}
                        >
                          <option value="">Select Status</option>
                          <option value="uncategorized">Uncategorized</option>
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
                        <Form.Label>Parent Status</Form.Label>
                        <Form.Control
                          type="text"
                          name="parent_status"
                          id="parent_status"
                          value={formik.values.parent_status}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter parent status"
                          isInvalid={!!formik.errors.parent_status}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.parent_status}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      id="description"
                      max={200}
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter description (max 200 characters)"
                      isInvalid={!!formik.errors.description}
                    />
                    <small className="text-muted float-end">
                      {formik.values.description.length}/200 characters
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
                    {responseLoading ? "Updating..." : "Update"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <EditSkeleton />
          )}
        </Col>
      </Row>
    </div>
  );
}
