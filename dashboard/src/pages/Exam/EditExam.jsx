import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Form,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import { ExamValidation } from "../../context/ValidationSchemas";

const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toISOString().split("T")[0];
};

export default function UpdateExam() {
  const navigate = useNavigate();
  const { objectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState([]);
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
    if (!authUser?.permissions?.some((item) => item === "Update Exam")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getStatus = async () => {
    try {
      const response = await API.get(`/status`);
      setStatus(response.data.filter((item) => item.name === "Exam"));
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const formik = useFormik({
    initialValues: {
      exam_name: "",
      exam_short_name: "",
      upcoming_exam_date: "",
      result_date: "",
      application_form_date: "",
      application_form_link: "",
      exam_form_link: "",
      exam_mode: "",
      description: "",
      status: "Active",
    },
    validationSchema: ExamValidation,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/exam/${objectId}`, values);
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: response.data.message || "Exam updated successfully.",
        });
        navigate(`/dashboard/exam`);
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error?.response?.data?.message || "Update failed.",
        });
      }
    },
  });

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const { data } = await API.get(`/exam/${objectId}`);
        formik.setValues({
          ...data,
          upcoming_exam_date: formatDate(data.upcoming_exam_date),
          result_date: formatDate(data.result_date),
          application_form_date: formatDate(data.application_form_date),
        });
      } catch (error) {
        console.error("Error loading exam data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objectId]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Exams</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/exam" }}
            >
              Exams
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Update Exam</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigate(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h5 className="mb-0">Update Exam</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  {/* Repeat of all fields (already correct) */}
                  {/* The fix is only in the useEffect with formatted date values */}

                  <Col md={6} className="mb-3">
                    <Form.Label>Exam Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="exam_name"
                      placeholder="Enter full exam name"
                      value={formik.values.exam_name}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.exam_name && formik.errors.exam_name
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.exam_name}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Exam Short Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="exam_short_name"
                      placeholder="Enter short name"
                      value={formik.values.exam_short_name}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.exam_short_name &&
                        formik.errors.exam_short_name
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.exam_short_name}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Upcoming Exam Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="upcoming_exam_date"
                      value={formik.values.upcoming_exam_date}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.upcoming_exam_date &&
                        formik.errors.upcoming_exam_date
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.upcoming_exam_date}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Result Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="result_date"
                      value={formik.values.result_date}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.result_date && formik.errors.result_date
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.result_date}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Application Form Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="application_form_date"
                      value={formik.values.application_form_date}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.application_form_date &&
                        formik.errors.application_form_date
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.application_form_date}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Application Form Link</Form.Label>
                    <Form.Control
                      type="url"
                      name="application_form_link"
                      placeholder="https://example.com/apply"
                      value={formik.values.application_form_link}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.application_form_link &&
                        formik.errors.application_form_link
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.application_form_link}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Exam Form Link</Form.Label>
                    <Form.Control
                      type="url"
                      name="exam_form_link"
                      placeholder="https://example.com/form"
                      value={formik.values.exam_form_link}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.exam_form_link &&
                        formik.errors.exam_form_link
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.exam_form_link}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Exam Mode</Form.Label>
                    <Form.Control
                      type="text"
                      name="exam_mode"
                      placeholder="Online / Offline"
                      value={formik.values.exam_mode}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.exam_mode && formik.errors.exam_mode
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.exam_mode}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                      isInvalid={formik.touched.status && formik.errors.status}
                    >
                      <option value="">Select</option>
                      {status?.map((item, index) => (
                        <option value={item?.parent_status} key={index}>
                          {item?.parent_status}
                        </option>
                      ))}{" "}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.status}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={12} className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <JoditEditor
                      value={formik.values.description}
                      onBlur={() => formik.setFieldTouched("description", true)}
                      onChange={(newContent) =>
                        formik.setFieldValue("description", newContent)
                      }
                    />
                    {formik.touched.description &&
                      formik.errors.description && (
                        <div className="text-danger mt-1">
                          {formik.errors.description}
                        </div>
                      )}
                  </Col>
                </Row>

                <div className="text-end">
                  <Button type="submit" variant="primary">
                    Update
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
