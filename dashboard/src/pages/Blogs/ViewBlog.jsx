import React, { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Badge } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API } from "../../context/API";
import ALLImages from "../../common/Imagesdata";

export default function ViewBlog() {
  const { objectId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState("");
  const [blogCategory, setBlogCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
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
    if (!authUser?.permissions?.some((item) => item === "Read Blog")) {
      navigate("/dashboard/access-denied");
    }
  }

  const getUser = useCallback(async () => {
    try {
      const response = await API.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
    getUser();
  }, [getUser]);
  useEffect(() => {
    getTags();
  }, [getTags]);
  useEffect(() => {
    getBlogCategory();
  }, [getBlogCategory]);

  const getBlog = useCallback(async () => {
    try {
      const response = await API.get(`/blog/${objectId}`);
      setBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getBlog();
  }, [getBlog]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getCategoryToRelatedId = (id) => {
    const category = blogCategory.find((item) => item.uniqueId === Number(id));
    return category ? category?.blog_category : id;
  };

  const getUserToRelatedId = (id) => {
    const user = users.find((item) => item.uniqueId === id);
    return user ? user?.name : id;
  };
  const getTagToRelatedId = (id) => {
    const tag = tags.find((item) => item.uniqueId === Number(id));
    return tag ? tag?.blog_tag : id;
  };

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Blog Details</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>View Blog</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigate(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Header className="d-flex justify-content-between">
              <Card.Title>{blog?.title}</Card.Title>
              <div>
                {!authLoading &&
                  authUser?.permissions?.some(
                    (item) => item === "Create Blog SEO"
                  ) && (
                    <Link
                      to={`/dashboard/blogs/seo/${blog?._id}`}
                      className="btn btn-warning btn-sm"
                    >
                      Blog Seo
                    </Link>
                  )}
              </div>
            </Card.Header>
            <Card.Body>
              <img
                src={
                  blog?.featured_image?.[0]
                    ? `${import.meta.env.VITE_MEDIA_URL}/blogs/${
                        blog.featured_image[0]
                      }`
                    : ALLImages("face8")
                }
                className="w-100 mb-4 rounded"
                alt="Blog Banner"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />

              <div className="d-flex flex-wrap gap-3 justify-content-end mb-4">
                {blog?.author && (
                  <Badge bg="info" className="me-2">
                    Author: {getUserToRelatedId(blog?.author)}
                  </Badge>
                )}
                {blog?.status && (
                  <Badge
                    bg={
                      blog?.status === "Active"
                        ? "success"
                        : blog?.status === "Suspended"
                        ? "danger"
                        : "warning"
                    }
                  >
                    Status: {blog?.status}
                  </Badge>
                )}
                {blog?.createdAt && (
                  <Badge bg="dark">
                    Created: {formatDate(blog?.createdAt)}
                  </Badge>
                )}
              </div>

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog?.blog }}
              ></div>

              {blog?.tags?.length > 0 && (
                <div className="mt-4">
                  <h6>Tags:</h6>
                  {blog.tags.map((tag, idx) => (
                    <Badge
                      bg="light text-dark border"
                      key={idx}
                      className="me-2"
                    >
                      {getTagToRelatedId(tag)}
                    </Badge>
                  ))}
                </div>
              )}
              {blog?.category?.length > 0 && (
                <div className="mt-4">
                  <h6>Categories:</h6>
                  {blog.category.map((tag, idx) => (
                    <Badge
                      bg="light text-dark border"
                      key={idx}
                      className="me-2"
                    >
                      {getCategoryToRelatedId(tag)}
                    </Badge>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
