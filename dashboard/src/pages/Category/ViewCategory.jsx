import React, { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import ALLImages from "../../common/Imagesdata";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import ViewCategorySkeleton from "../../components/Skeletons/ViewCategorySkeleton";

export default function ViewCategory() {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [category, setCategory] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
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
    if (!authUser?.permissions?.some((item) => item === "Read Category")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getCategory = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get(`/category/${objectId}`);
      setCategory(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  }, [objectId]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const deleteCategory = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.delete(`/category/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "Category removed.",
          "success"
        ).then(() => {
          navigator(`/dashboard/category`);
        });
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to delete!",
          "error"
        );
      }
    }
  };
  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Create Category</h1>
          {!loading ? (
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
              <Breadcrumb.Item>View</Breadcrumb.Item>
              <Breadcrumb.Item active>
                {category?.category_name}
              </Breadcrumb.Item>
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
              <Card.Header className="d-flex justify-content-between">
                <h5 className="mb-0">View Category</h5>
                {!authLoading && (
                  <div>
                    {authUser?.permissions?.some(
                      (item) => item.value === "Update Category"
                    ) && (
                      <Link
                        to={`/dashboard/category/edit/${objectId}`}
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fe fe-edit me-1"></i>Edit Category
                      </Link>
                    )}
                    {authUser?.permissions?.some(
                      (item) => item.value === "Delete Category"
                    ) && (
                      <button
                        className="btn btn-danger ms-1 btn-sm"
                        onClick={() => deleteCategory(objectId)}
                      >
                        <i className="fe fe-trash-2 me-1"></i>Delete Category
                      </button>
                    )}
                  </div>
                )}
              </Card.Header>
              <Card.Body>
                <div className="position-relative">
                  <img
                    src={
                      category?.featured_image?.[0]
                        ? `${import.meta.env.VITE_MEDIA_URL}/category/${
                            category?.featured_image?.[0]
                          }`
                        : ALLImages("logo2")
                    }
                    className="w-100 banner-ratio"
                    alt=""
                  />
                  <div className="position-absolute bottom-0 start-0 p-2">
                    <img
                      src={
                        category?.category_icon?.[0]
                          ? `${import.meta.env.VITE_MEDIA_URL}/category/${
                              category?.category_icon?.[0]
                            }`
                          : ALLImages("logo2")
                      }
                      className="profile-ratio border w-50 w-md-100"
                      alt=""
                    />
                  </div>
                </div>
                <Row className="py-3">
                  <Col md={6}>
                    <h4>
                      <strong>Category:</strong>
                      {category.category_name}
                    </h4>
                  </Col>
                  <Col md={6}>
                    <h4>
                      <strong>parent Category:</strong>
                      {category.parent_category}
                    </h4>
                  </Col>
                </Row>
              </Card.Body>
              {category.description && (
                <Card.Footer>
                  <div className="mt-4">
                    <h5>category Description</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: showFullDescription
                          ? category.description
                          : category.description
                              ?.split(" ")
                              ?.slice(0, 300)
                              .join(" ") + "...",
                      }}
                    />
                    {category.description.split(" ").length > 300 && (
                      <Button
                        className="btn btn-secondary"
                        onClick={() =>
                          setShowFullDescription(!showFullDescription)
                        }
                      >
                        {showFullDescription ? (
                          <span>
                            <i className={`fe fe-chevron-up me-1`}></i>Show Less
                          </span>
                        ) : (
                          <span>
                            <i className={`fe fe-chevron-down me-1`}></i>Show
                            More
                          </span>
                        )}
                      </Button>
                    )}
                  </div>
                </Card.Footer>
              )}
            </Card>
          ) : (
            <ViewCategorySkeleton />
          )}
        </Col>
      </Row>
    </div>
  );
}
