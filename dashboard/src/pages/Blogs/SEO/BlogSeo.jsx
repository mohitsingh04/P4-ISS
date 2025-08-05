import React, { useCallback, useEffect, useState } from "react";
import AddBlogSeo from "./AddBlogSeo";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../../context/API";
import { Breadcrumb, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import EditBlogSeo from "./EditBlogSeo";

export default function BlogSeo() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [blog, setBlog] = useState("");
  const [blogSeo, setBlogSeo] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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

  const getBlogSeo = useCallback(async () => {
    if (blog) {
      try {
        const response = await API.get(`/blog/seo/${blog?.uniqueId}`);
        setBlogSeo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [blog]);

  useEffect(() => {
    getBlogSeo();
  }, [getBlogSeo]);

  const deleteSeo = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await API.delete(`/blog/seo/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: response.data.message || "The SEO details have been deleted.",
            icon: "success",
          });
          window.location.reload();
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: error.response.data.error || "Failed to delete SEO details.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Blogs</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/blogs" }}
            >
              Blogs
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{blog?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>
      {blogSeo ? (
        !isUpdating ? (
          <Row>
            <Col>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <h5 className="m-0">SEO Details</h5>
                  <div>
                    <Button
                      className="btn-sm"
                      onClick={() => setIsUpdating(true)}
                    >
                      <i className="fe fe-edit me-1"></i>Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="btn-sm ms-1"
                      onClick={() => deleteSeo(blogSeo?._id)}
                    >
                      <i className="fe fe-trash-2 me-1"></i>Delete
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Title:</strong> {blogSeo.title}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Slug:</strong> {blogSeo.slug}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Primary Focus Keywords:</strong>{" "}
                      {blogSeo.primary_focus_keyword
                        .map((k) => k.value)
                        .join(", ")}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>JSON Schema:</strong> {blogSeo.json_schema}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Meta Description:</strong>
                      <div className="mt-2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              showMore || blogSeo.meta_description.length <= 300
                                ? blogSeo.meta_description
                                : blogSeo.meta_description.substring(0, 300) +
                                  "...",
                          }}
                        />
                        {blogSeo.meta_description.length > 300 && (
                          <Button
                            variant="link"
                            className="p-0 ms-2"
                            onClick={() => setShowMore(!showMore)}
                          >
                            {showMore ? "Show Less" : "Show More"}
                          </Button>
                        )}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <EditBlogSeo
            seo={blogSeo}
            setIsUpdating={setIsUpdating}
            getBlogSeo={getBlogSeo}
          />
        )
      ) : (
        <AddBlogSeo blog={blog} getBlogSeo={getBlogSeo} />
      )}
    </div>
  );
}
