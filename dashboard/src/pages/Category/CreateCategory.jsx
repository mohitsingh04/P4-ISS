import { useFormik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateCategoryValidation } from "../../context/ValidationSchemas";
import { API } from "../../context/API";
import { Breadcrumb, Button, Card, Col, Form, Row } from "react-bootstrap";
import JoditEditor from "jodit-react";
import ALLImages from "../../common/Imagesdata";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../context/getEditorConfig";

export default function CreateCategory() {
  const navigator = useNavigate();
  const [allCategories, setAllCategories] = useState([]);
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [btnResponse, setBtnResponse] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const editorConfig = useMemo(() => getEditorConfig(), []);

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
    if (!authUser?.permissions?.some((item) => item === "Create Category")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getAllCategories = async () => {
    try {
      const response = await API.get(`/category`);
      setAllCategories(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      category_name: "",
      parent_category: "",
      status: "",
      description: "",
    },
    validationSchema: CreateCategoryValidation,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("userId", authUser?.uniqueId);
      formData.append("category_name", values.category_name);
      formData.append("parent_category", values.parent_category);
      formData.append("status", values.status);
      formData.append("description", values.description);

      if (values.image1) {
        formData.append("category_icon", values.image1);
      }
      if (values.image2) {
        formData.append("featured_image", values.image2);
      }
      setBtnResponse(true);
      try {
        const response = await API.post(`/category`, formData);
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: response.data.message || "Category Updated",
          }).then(() => {
            navigator(`/dashboard/category`);
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.response.data.error || "Failed To Update",
        });
      } finally {
        setBtnResponse(false);
      }
    },
  });

  const handleImageChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue(field, file);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (field === "image1") setPreview1(e.target.result);
        if (field === "image2") setPreview2(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Create Category</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/category" }}
            >
              Category
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
              <h5 className="mb-0">Create Category</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="category_name"
                        placeholder="Enter Category Name"
                        value={formik.values.category_name}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.category_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.category_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Parent Category</Form.Label>
                      <Form.Select
                        name="parent_category"
                        value={formik.values.parent_category}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.parent_category}
                      >
                        <option value="">Select Parent Category</option>
                        {allCategories.length <= 0 && (
                          <option value="Uncategorized">Uncategorized</option>
                        )}
                        {allCategories.map((item, index) => (
                          <option key={index} value={item.category_name}>
                            {item.category_name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.parent_category}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <JoditEditor
                        value={formik.values.description}
                        onBlur={(content) =>
                          formik.setFieldValue("description", content)
                        }
                        config={editorConfig}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        style={{
                          display: formik.errors.description ? "block" : "none",
                        }}
                      >
                        {formik.errors.description}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="d-flex justify-content-between">
                      <p>
                        <strong>Category Icon</strong>
                      </p>
                      <Form.Group>
                        <Form.Label
                          htmlFor="category_icon"
                          className="btn btn-primary"
                        >
                          <i className="fe fe-upload me-1"></i>Upload Category
                          Icon
                        </Form.Label>
                        <input
                          type="file"
                          id="category_icon"
                          accept=".jpg,.png"
                          hidden
                          name="image1"
                          onChange={(event) =>
                            handleImageChange(event, "image1")
                          }
                        />
                      </Form.Group>
                    </div>
                    <img
                      src={preview1 ? preview1 : ALLImages("face8")}
                      alt="Preview 1"
                      className="img-fluid rounded-circle profile-ratio"
                      width={100}
                    />
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-between">
                      <p>
                        <strong>Featured Image</strong>
                      </p>
                      <Form.Group>
                        <Form.Label
                          className="btn btn-primary"
                          htmlFor="feature_image"
                        >
                          <i className="fe fe-upload me-1"></i>Upload Featured
                          Image
                        </Form.Label>
                        <input
                          type="file"
                          accept=".jpg,.png"
                          hidden
                          id="feature_image"
                          name="image2"
                          onChange={(event) =>
                            handleImageChange(event, "image2")
                          }
                        />
                      </Form.Group>
                    </div>
                    <img
                      src={preview2 ? preview2 : ALLImages("face8")}
                      alt="Preview 2"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-4"
                  disabled={btnResponse}
                >
                  <i className="fe fe-check-circle me-1"></i>
                  {btnResponse ? "Submiting..." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
