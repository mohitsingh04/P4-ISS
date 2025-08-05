import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button,
  Image,
  Breadcrumb,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import JoditEditor from "jodit-react";
import Dropdown from "react-dropdown-select";
import { API } from "../../context/API";
import ALLImages from "../../common/Imagesdata";
import { getEditorConfig } from "../../context/getEditorConfig";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const fallbackImage = ALLImages("face8");

export default function EditBlog() {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [currentBlog, setCurrentBlog] = useState("");
  const [tags, setTags] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [status, setStatus] = useState([]);

  const getTags = useCallback(async () => {
    try {
      const response = await API.get("/blog/tag/all");
      setTags(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getBlogCategory = useCallback(async () => {
    try {
      const response = await API.get(`/blog/category/all`);
      setBlogCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTags();
  }, [getTags]);
  useEffect(() => {
    getBlogCategory();
  }, [getBlogCategory]);

  const getCategoryToRelatedId = (id) => {
    const category = blogCategory.find((item) => item.uniqueId === Number(id));
    return category ? category?.blog_category : id;
  };

  const getTagToRelatedId = (id) => {
    const tag = tags.find((item) => item.uniqueId === Number(id));
    return tag ? tag?.blog_tag : id;
  };

  const getBlog = useCallback(async () => {
    try {
      const response = await API.get(`/blog/${objectId}`);
      setCurrentBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getBlog();
  }, [getBlog]);

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data.filter((item) => item.name === "Blogs"));
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getStatus();
  }, [getStatus]);

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
    if (!authUser?.permissions?.some((item) => item === "Update Blog")) {
      navigator("/dashboard/access-denied");
    }
  }

  const fetchData = async () => {
    try {
      const [categoriesRes, tagsRes] = await Promise.all([
        API.get("/blog/category/all"),
        API.get("/blog/tag/all"),
      ]);

      const categories = categoriesRes.data.map((category) => ({
        label: category.blog_category,
        value: category.uniqueId,
      }));
      const tags = tagsRes.data.map((tag) => ({
        label: tag.blog_tag,
        value: tag.uniqueId,
      }));
      setCategoryOptions(categories);
      setTagOptions(tags);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    blog: Yup.string().required("Blog content is required"),
    category: Yup.array().min(1, "At least one Category is required"),
    tags: Yup.array().min(1, "At least one tag is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: currentBlog?.title || "",
      blog: currentBlog?.blog || "",
      category:
        currentBlog?.category?.map((c) => ({
          label: getCategoryToRelatedId(c),
          value: Number(c),
        })) || [],
      tags:
        currentBlog?.tags?.map((c) => ({
          label: getTagToRelatedId(c),
          value: Number(c),
        })) || [],
      author: authUser?.uniqueId || "",
      featured_image: null,
      status: currentBlog?.status || "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("blog", values.blog);
      formData.append("featured_image", values.featured_image);
      formData.append("author", values?.author);
      formData.append("status", values?.status);
      values.tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag.value);
      });
      values.category.forEach((item, index) => {
        formData.append(`category[${index}]`, item.value);
      });

      try {
        const response = await API.patch(`/blog/${objectId}`, formData);
        Swal.fire({
          icon: "success",
          title: "Successfull",
          text: response.data.message || "Successfully Updated",
        });
        navigator(`/dashboard/blogs`);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error || "Failed To Update Blog",
        });
      }
    },
  });

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Blogs</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
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
              <Card.Title>Update Blog</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter blog title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    isInvalid={!!formik.errors.title && formik.touched.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Blog Content</Form.Label>
                  <JoditEditor
                    value={formik.values.blog}
                    onChange={(content) =>
                      formik.setFieldValue("blog", content)
                    }
                    config={editorConfig}
                  />
                  {formik.errors.blog && formik.touched.blog && (
                    <div className="text-danger">{formik.errors.blog}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Dropdown
                    options={categoryOptions.filter(
                      (option) =>
                        !formik.values.category.some(
                          (selected) => selected.value === option.value
                        )
                    )}
                    multi
                    keepSelectedInList={false}
                    placeholder="Choose Category"
                    values={formik.values.category}
                    onChange={(value) =>
                      formik.setFieldValue("category", value)
                    }
                    labelField="label"
                    valueField="value"
                    searchable={true}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.category}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tags</Form.Label>
                  <Dropdown
                    options={tagOptions.filter(
                      (option) =>
                        !formik.values.tags.some(
                          (selected) => selected.value === option.value
                        )
                    )}
                    multi
                    keepSelectedInList={false}
                    placeholder="Choose Tags"
                    values={formik.values.tags}
                    onChange={(value) => formik.setFieldValue("tags", value)}
                    labelField="label"
                    valueField="value"
                    searchable={true}
                  />
                  {formik.errors.tags && formik.touched.tags && (
                    <div className="text-danger">{formik.errors.tags}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.status}
                  >
                    <option value="">--Select Status--</option>
                    {status.map((item, index) => (
                      <option key={index} value={item.parent_status}>
                        {item.parent_status}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Featured Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="featured_image"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      formik.setFieldValue("featured_image", file);
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => setImagePreview(reader.result);
                        reader.readAsDataURL(file);
                      } else {
                        setImagePreview("");
                      }
                    }}
                    isInvalid={
                      !!formik.errors.featured_image &&
                      formik.touched.featured_image
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.featured_image}
                  </Form.Control.Feedback>
                  <div className="mt-3">
                    <Image
                      src={
                        imagePreview
                          ? imagePreview
                          : currentBlog?.featured_image?.[0]
                          ? `${import.meta.env.VITE_MEDIA_URL}/blogs/${
                              currentBlog?.featured_image?.[0]
                            }`
                          : fallbackImage
                      }
                      thumbnail
                      width={150}
                      height={150}
                    />
                  </div>
                </Form.Group>

                <Button type="submit" variant="primary">
                  Update Blog
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
