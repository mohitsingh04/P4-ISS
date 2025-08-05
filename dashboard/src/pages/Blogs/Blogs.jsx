import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function Blogs() {
  const navigator = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogCategory, setBlogCategory] = useState([]);
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
      navigator("/dashboard/access-denied");
    }
  }

  const getBlogCategory = useCallback(async () => {
    try {
      const response = await API.get(`/blog/category/all`);
      setBlogCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getBlogCategory();
  }, [getBlogCategory]);

  const getBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/blog");
      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  useEffect(() => {
    if (blogs) {
      setFilteredBlogs(
        blogs.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, blogs]);

  const deleteBlog = async (id) => {
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
        const response = await API.delete(`/blog/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "blogs removed.",
          "success"
        );
        getBlogs();
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to delete!",
          "error"
        );
      }
    }
  };

  const getCategoryToRelatedId = (id) => {
    const category = blogCategory.find((item) => item.uniqueId === Number(id));
    return category ? category?.blog_category : "Unknown";
  };

  const columns = [
    {
      name: "Profile",
      selector: (row) => row.featured_image,
      cell: (row) => (
        <img
          src={
            row?.featured_image?.[0]
              ? `${import.meta.env.VITE_MEDIA_URL}/blogs/${
                  row?.featured_image?.[0]
                }`
              : ALLImages("face8")
          }
          alt={row?.featured_image?.[0] || "Course"}
          className="rounded-circle"
          width="40"
          height="40"
        />
      ),
      sortable: false,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row?.category?.[0],
      sortable: true,
      cell: (row) => getCategoryToRelatedId(row?.category?.[0]),
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span
          className={`badge ${
            row.status === "Active"
              ? "bg-success"
              : row.status === "Suspended"
              ? "bg-danger"
              : "bg-warning"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-1">
          {!authLoading && (
            <>
              {authUser?.permissions?.some((item) => item === "Read Blog") && (
                <Link
                  to={`/dashboard/blogs/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Update Blog"
              ) && (
                <Link
                  to={`/dashboard/blogs/edit/${row._id}`}
                  className="btn btn-success btn-sm"
                >
                  <i className="fe fe-edit-2"></i>
                </Link>
              )}
              {authUser?.permissions.some(
                (item) => item === "Create Blog SEO"
              ) && (
                <Link
                  to={`/dashboard/blogs/seo/${row._id}`}
                  className="btn btn-warning btn-sm"
                >
                  <i class="ri-seo-line"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Blog"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteBlog(row._id)}
                >
                  <i className="fe fe-trash-2"></i>
                </Button>
              )}
            </>
          )}
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

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
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between py-3">
              <h5 className="mb-0">Blogs List</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item.value === "Create Blogs"
                ) && (
                  <Link
                    to={`/dashboard/blogs/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-cpu me-1"></i>Create Blogs
                  </Link>
                )}
            </Card.Header>
            {!loading ? (
              <Card.Body>
                {/* Search Bar */}
                <Row className="mb-3">
                  <Col lg={4}>
                    <div className="position-relative">
                      <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                        <i className="fe fe-search text-primary"></i>
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Search Blogs"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredBlogs}
                  pagination
                  highlightOnHover
                  responsive
                  striped
                />
              </Card.Body>
            ) : (
              <DataTableSkeleton />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
