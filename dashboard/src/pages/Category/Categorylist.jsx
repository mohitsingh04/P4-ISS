import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function CategoryList() {
  const navigator = useNavigate();
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCategory, setFilteredCategory] = useState([]);
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
      const response = await API.get("/category");
      setCategory(response.data);
      setFilteredCategory(response.data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  useEffect(() => {
    if (category) {
      setFilteredCategory(
        category.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, category]);

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
        Swal.fire({
          title: "Deleted!",
          text: response?.data?.message || "Category removed.",
          icon: "success",
        });
        getCategory();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.response?.data?.error || "Failed to delete!",
          icon: "error",
        });
      }
    }
  };

  const columns = [
    {
      name: "Profile",
      selector: (row) => row.category_icon,
      cell: (row) => (
        <img
          src={
            row?.category_icon?.[0]
              ? `${import.meta.env.VITE_MEDIA_URL}/category/${
                  row?.category_icon?.[0]
                }`
              : ALLImages("face8")
          }
          alt={row?.category_icon?.[0] || "Category"}
          className="rounded-circle"
          width="40"
          height="40"
        />
      ),
      sortable: false,
      width: "80px",
    },
    {
      name: "Category Name",
      selector: (row) => row.category_name,
      sortable: true,
      cell: (row) => row.category_name,
    },
    {
      name: "Parent Category",
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
                (item) => item === "Read Category"
              ) && (
                <Link
                  to={`/dashboard/category/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Update Category"
              ) && (
                <Link
                  to={`/dashboard/category/edit/${row._id}`}
                  className="btn btn-success btn-sm"
                >
                  <i className="fe fe-edit-2"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Category"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteCategory(row._id)}
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Category</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>category</Breadcrumb.Item>
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
              <h5 className="mb-0">Category List</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item === "Create Category"
                ) && (
                  <Link
                    to={`/dashboard/category/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-database me-1"></i>Create Category
                  </Link>
                )}
            </Card.Header>
            {!loading ? (
              <Card.Body>
                <Row className="mb-3">
                  <Col lg={4}>
                    <div className="position-relative">
                      <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                        <i className="fe fe-search text-primary"></i>
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Search Category"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredCategory}
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
