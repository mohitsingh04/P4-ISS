import React, { useEffect, useMemo, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import { ExamValidation } from "../../context/ValidationSchemas";
import { getEditorConfig } from "../../context/getEditorConfig";

export default function CreateExam() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const editorConfig = useMemo(() => getEditorConfig(), []);

  const [examLogoPreview, setExamLogoPreview] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);

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
    if (!authUser?.permissions?.some((item) => item === "Read Exam")) {
      navigator("/dashboard/access-denied");
    }
  }

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
      exam_logo: "",
      featured_image: "",
    },
    validationSchema: ExamValidation,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();

        formData.append("exam_name", values.exam_name);
        formData.append("exam_short_name", values.exam_short_name);
        formData.append("upcoming_exam_date", values.upcoming_exam_date);
        formData.append("result_date", values.result_date);
        formData.append("application_form_date", values.application_form_date);
        formData.append("application_form_link", values.application_form_link);
        formData.append("exam_form_link", values.exam_form_link);
        formData.append("exam_mode", values.exam_mode);
        formData.append("description", values.description);

        // Append image files if selected
        if (values.exam_logo) {
          formData.append("exam_logo", values.exam_logo);
        }

        if (values.featured_image) {
          formData.append("featured_image", values.featured_image);
        }
        console.log(...formData);

        const response = await API.post(`/exam`, formData);

        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: response.data.message || "Successfully",
        });
        navigate(`/dashboard/exam`);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.response?.data?.message || "Failed",
        });
      }
    },
  });

  const handleImageChange = (e, fieldName, previewSetter) => {
    const file = e.currentTarget.files[0];
    if (!file) return;

    previewSetter(URL.createObjectURL(file)); // Show preview
    formik.setFieldValue(fieldName, file); // Store File object
  };

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
              Create Exam
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create</Breadcrumb.Item>
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
              <h5 className="mb-0">Create Exam</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
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

                  {/* Exam Logo Upload */}
                  <Col md={6} className="mb-3">
                    <Form.Label>Exam Logo</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, "exam_logo", setExamLogoPreview)
                      }
                    />
                    {examLogoPreview && (
                      <div className="mt-2">
                        <img src={examLogoPreview} alt="Preview" height="80" />
                      </div>
                    )}
                  </Col>

                  {/* Featured Image Upload */}
                  <Col md={6} className="mb-3">
                    <Form.Label>Featured Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(
                          e,
                          "featured_image",
                          setFeaturedImagePreview
                        )
                      }
                    />
                    {featuredImagePreview && (
                      <div className="mt-2">
                        <img
                          src={featuredImagePreview}
                          alt="Preview"
                          height="80"
                        />
                      </div>
                    )}
                  </Col>

                  <Col md={12} className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <JoditEditor
                      value={formik.values.description}
                      onBlur={() => formik.setFieldTouched("description", true)}
                      onChange={(newContent) =>
                        formik.setFieldValue("description", newContent)
                      }
                      config={editorConfig}
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
                    Submit
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
