import React, { useEffect, useMemo, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Form,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import JoditEditor from "jodit-react";
import { API } from "../../context/API";
import { CreatePropertyValidation } from "../../context/ValidationSchemas";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../context/getEditorConfig";

export default function CreateProperty() {
  const navigator = useNavigate();
  const [categories, setCategories] = useState([]);
  const [btnResponse, setBtnResponse] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [academic, setAcdemic] = useState([]);
  const [propertyTypes, setPropertTyes] = useState([]);
  const [boardingTypes, setBoardingTypes] = useState([]);
  const [schoolType, setSchoolTypes] = useState([]);

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
    if (!authUser?.permissions?.some((item) => item === "Create Property")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getCategories = async () => {
    setCategoryLoading(true);
    try {
      const response = await API.get("/category");
      const data = response.data;
      setCategories(data.filter((item) => item.status === "Active"));
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    setAcdemic(
      categories.filter(
        (item) => item?.parent_category?.toLowerCase() === "academic type"
      )
    );
    setPropertTyes(
      categories.filter(
        (item) => item?.parent_category?.toLowerCase() === "property type"
      )
    );
    setBoardingTypes(
      categories.filter(
        (item) => item?.parent_category?.toLowerCase() === "boarding type"
      )
    );
    setSchoolTypes(
      categories.filter(
        (item) => item?.parent_category?.toLowerCase() === "school type"
      )
    );
  }, [categories]);

  useEffect(() => {
    getCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      userId: authUser?.uniqueId || "",
      property_name: "",
      property_email: "",
      property_mobile_no: "",
      category: "",
      property_type: "",
      property_description: "",
      boarding_type: "",
      school_type: "",
    },
    validationSchema: CreatePropertyValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setBtnResponse(true);
      try {
        const response = await API.post("/property", values);
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: response.data.message || "Property Added Successfully",
          });
          navigator(
            `/dashboard/property/view/${response.data.property._id}?tab=basic-details`
          );
          window.location.reload();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.error || "Failed to Add Propertu",
        });
      } finally {
        setBtnResponse(false);
      }
    },
  });

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Property</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/property" }}
            >
              Property
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
              <h5 className="mb-0">Create Property</h5>
            </Card.Header>
            <Card.Body>
              {!categoryLoading && categories.length <= 0 && (
                <Row>
                  <Col>
                    <Alert
                      variant="danger"
                      className="d-flex justify-content-between align-items-center mb-3"
                    >
                      <p className="m-0">There are no categories. Please.</p>
                      <Link
                        to="/dashboard/category/create"
                        className="btn btn-danger btn-sm"
                      >
                        Add Category
                      </Link>
                    </Alert>
                  </Col>
                </Row>
              )}
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Property Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter property name"
                        {...formik.getFieldProps("property_name")}
                        isInvalid={formik.errors.property_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.property_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...formik.getFieldProps("property_email")}
                        isInvalid={formik.errors.property_email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.property_email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact</Form.Label>
                      <PhoneInput
                        country={"in"}
                        value={formik.values.property_mobile_no}
                        onChange={(mobile_no) =>
                          formik.setFieldValue("property_mobile_no", mobile_no)
                        }
                        inputClass="input100 w-100 border"
                        inputStyle={{ height: "45px" }}
                        buttonClass="bg-white border"
                        isValid={!formik.errors.property_mobile_no}
                      />
                      {formik.errors.property_mobile_no && (
                        <p className="text-danger">
                          {formik.errors.property_mobile_no}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Academic</Form.Label>
                      <Form.Select
                        {...formik.getFieldProps("category")}
                        isInvalid={formik.errors.category}
                      >
                        <option value="">Select Academic Type</option>
                        {academic.map((item, index) => (
                          <option value={item.uniqueId} key={index}>
                            {item.category_name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.category}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Property Type</Form.Label>
                      <Form.Select
                        {...formik.getFieldProps("property_type")}
                        isInvalid={formik.errors.property_type}
                      >
                        <option value="">--Select Type--</option>
                        {propertyTypes.map((item, index) => (
                          <option value={item.uniqueId} key={index}>
                            {item.category_name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.property_type}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Boarding Type</Form.Label>
                      <Form.Select
                        {...formik.getFieldProps("boarding_type")}
                        isInvalid={formik.errors.boarding_type}
                      >
                        <option value="">--Select Type--</option>
                        {boardingTypes.map((item, index) => (
                          <option value={item.uniqueId} key={index}>
                            {item.category_name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.boarding_type}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>School Type</Form.Label>
                      <Form.Select
                        {...formik.getFieldProps("school_type")}
                        isInvalid={formik.errors.school_type}
                      >
                        <option value="">--Select Type--</option>
                        {schoolType.map((item, index) => (
                          <option value={item.uniqueId} key={index}>
                            {item.category_name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.school_type}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <JoditEditor
                    value={formik.values.property_description}
                    onChange={(content) =>
                      formik.setFieldValue("property_description", content)
                    }
                    config={editorConfig}
                  />
                </Form.Group>

                <Button type="submit" variant="primary" disabled={btnResponse}>
                  <i className="fe fe-check-circle me-1"></i>
                  {btnResponse ? "Submitting...." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
