import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function YourProperty() {
  const navigator = useNavigate();
  const [Property, setProperty] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProperty, setFilteredProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCategoryToRelatedId = (id) => {
    const category = categories.find((item) => item.uniqueId === Number(id));
    return category ? category?.category_name : "Unknown";
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

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
    if (!authUser?.permissions?.some((item) => item === "Read Property")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getProperty = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/property");
      const data = response.data;

      const filteredData = data.filter(
        (item) => item?.userId === authUser?.uniqueId
      );
      setProperty(filteredData);
    } catch (error) {
      console.error("Error fetching Property:", error);
    }
    setLoading(false);
  }, [authUser]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  useEffect(() => {
    if (Property) {
      setFilteredProperty(
        Property.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, Property]);

  const deleteProperty = async (id) => {
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
        const response = await API.delete(`/property/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "Property removed.",
          "success"
        );
        getProperty();
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
      name: "Logo",
      selector: (row) => row.image,
      cell: (row) => (
        <img
          src={
            row?.property_logo?.[0]
              ? `${import.meta.env.VITE_MEDIA_URL}/${row?.property_logo?.[0]}`
              : ALLImages("face8")
          }
          alt={row?.property_logo?.[0] || "Property"}
          className="rounded-circle profile-ratio"
          width="40"
          height="40"
        />
      ),
      sortable: false,
      width: "80px",
    },
    {
      name: "Property Name",
      selector: (row) => row.property_name,
      sortable: true,
      cell: (row) => row.property_name,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      cell: (row) => getCategoryToRelatedId(row.category),
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
                (item) => item === "Read Property"
              ) && (
                <Link
                  to={`/dashboard/property/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Property"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteProperty(row._id)}
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Your Property</h1>
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
            <Breadcrumb.Item active>Your</Breadcrumb.Item>
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
              <h5 className="mb-0">Your Property</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item === "Create Property"
                ) && (
                  <Link
                    to={`/dashboard/property/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-layers me-1"></i>Create Property
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
                        placeholder="Search Property"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredProperty}
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
