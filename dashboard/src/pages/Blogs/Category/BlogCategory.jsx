import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../../common/Imagesdata";
import DataTableSkeleton from "../../../components/Skeletons/DataTableSkeleton";

export default function BlogsCategory() {
  const navigator = useNavigate();
  const [blogCategory, setBlogsCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBlogsCategory, setFilteredBlogsCategory] = useState([]);
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
    if (
      !authUser?.permissions?.some(
        (item) => item === "Read Blog Category"
      )
    ) {
      navigator("/dashboard/access-denied");
    }
  }

  const getBlogCategory = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/blog/category/all");
      setBlogsCategory(response.data);
      setFilteredBlogsCategory(response.data);
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getBlogCategory();
  }, [getBlogCategory]);

  useEffect(() => {
    if (blogCategory) {
      setFilteredBlogsCategory(
        blogCategory.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, blogCategory]);

  const deleteBlogCategory = async (id) => {
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
        const response = await API.delete(`/blog/category/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "blogs removed.",
          "success"
        );
        getBlogCategory();
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to delete!",
          "error"
        );
      }
    }
  };

  const columns = [
    {
      name: "Blog Category",
      selector: (row) => row.blog_category,
      sortable: true,
      cell: (row) => row.blog_category,
    },
    {
      name: "Category",
      selector: (row) => row.parent_category,
      sortable: true,
      cell: (row) => row.parent_category,
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
              {authUser?.permissions?.some(
                (item) => item === "Update Blog Category"
              ) && (
                <Link
                  to={`/dashboard/blogs/category/edit/${row._id}`}
                  className="btn btn-success btn-sm"
                >
                  <i className="fe fe-edit-2"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Blog Category"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteBlogCategory(row._id)}
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Blog Category</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Blog Category</Breadcrumb.Item>
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
              <h5 className="mb-0">Blog Category List</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item === "Create Blog Category"
                ) && (
                  <Link
                    to={`/dashboard/blogs/category/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-cpu me-1"></i>Create Blog Category
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
                  data={loading ? Array(10).fill({}) : filteredBlogsCategory}
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
