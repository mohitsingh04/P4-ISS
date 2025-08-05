import { useEffect, useState, useCallback } from "react";
import { Card, Col, Row, Form, Button, Breadcrumb } from "react-bootstrap";
import { useFormik } from "formik";
import Skeleton from "react-loading-skeleton";
import { API } from "../../../context/API";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogCategoryValidation } from "../../../context/ValidationSchemas";

export default function EditBlogCategory() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [parentCategories, setParentCategories] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);
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
    if (
      !authUser?.permissions?.some((item) => item === "Update Blog Category")
    ) {
      navigator("/dashboard/access-denied");
    }
  }

  const fetchParentCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.get("/blog/category/all");
      setParentCategories(response.data);
    } catch (error) {
      console.error("Error fetching parent categories:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategoryData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.get(`/blog/category/id/${objectId}`);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setLoading(false);
    }
  }, [objectId]);

  const fetchStatusOptions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.get("/status");
      const data = response.data;
      setStatusOptions(data.filter((item) => item.name === "Blog Category"));
    } catch (error) {
      console.error("Error fetching status options:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchParentCategories();
    fetchCategoryData();
    fetchStatusOptions();
  }, [fetchParentCategories, fetchCategoryData, fetchStatusOptions]);

  const formik = useFormik({
    initialValues: {
      blog_category: categoryData?.blog_category || "",
      parent_category: categoryData?.parent_category || "",
      status: categoryData?.status || "",
    },
    enableReinitialize: true,
    validationSchema: BlogCategoryValidation,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/blog/category/${objectId}`, values);

        Swal.fire({
          icon: "success",
          title: "Success",
          text:
            response?.data?.message || "Blog category updated successfully!",
        });
        navigator(`/dashboard/blogs/category`);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.error || "Something went wrong!",
        });
      }
    },
  });

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">
            Edit Blog Category
          </h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/blogs/category" }}
            >
              Blog Categories
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Blog Category</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Edit Blog Category</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="blogCategory">
                  <Form.Label>Blog Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="blog_category"
                    placeholder="Enter blog category"
                    value={formik.values.blog_category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched.blog_category &&
                      !!formik.errors.blog_category
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.blog_category}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="parentCategory">
                  <Form.Label>Parent Category</Form.Label>
                  {loading ? (
                    <Skeleton height={38} />
                  ) : (
                    <Form.Select
                      name="parent_category"
                      value={formik.values.parent_category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.parent_category &&
                        !!formik.errors.parent_category
                      }
                    >
                      <option value="">Select Parent Category</option>
                      {parentCategories.length > 0 ? (
                        parentCategories.map((category, index) => (
                          <option key={index} value={category.blog_category}>
                            {category.blog_category}
                          </option>
                        ))
                      ) : (
                        <option value="Uncategorized">Uncategorized</option>
                      )}
                    </Form.Select>
                  )}
                  {!loading &&
                    formik.touched.parent_category &&
                    formik.errors.parent_category && (
                      <div className="invalid-feedback d-block">
                        {formik.errors.parent_category}
                      </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Status</Form.Label>
                  {loading ? (
                    <Skeleton height={38} />
                  ) : (
                    <Form.Select
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.status && !!formik.errors.status
                      }
                    >
                      <option value="">Select Status</option>
                      {statusOptions.length > 0 &&
                        statusOptions.map((status, index) => (
                          <option key={index} value={status.parent_status}>
                            {status.parent_status}
                          </option>
                        ))}
                    </Form.Select>
                  )}
                  {!loading &&
                    formik.touched.status &&
                    formik.errors.status && (
                      <div className="invalid-feedback d-block">
                        {formik.errors.status}
                      </div>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
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
