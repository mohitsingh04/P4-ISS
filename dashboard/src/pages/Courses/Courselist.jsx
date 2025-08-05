import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function CourseList() {
  const navigator = useNavigate();
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourse, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryById = (id) => {
    const numId = Number(id);

    // Check if id is a valid number
    if (!isNaN(numId)) {
      const category = categories.find(
        (item) => Number(item.uniqueId) === numId
      );
      return category.category_name || "";
    }

    return id;
  };

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
    if (!authUser?.permissions?.some((item) => item === "Read Course")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getCourse = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/course");
      const data = response.data;
      const finalData = data.filter((item) => item?.isDeleted === false);
      setCourses(finalData);
      setFilteredCourses(finalData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getCourse();
  }, [getCourse]);

  useEffect(() => {
    if (courses) {
      setFilteredCourses(
        courses.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, courses]);
  const deleteCourse = async (id) => {
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
        const response = await API.get(`/course/soft/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "Course has been soft deleted.",
          "success"
        );
        getCourse();
      } catch (error) {
        Swal.fire(
          "Error!",
          error.response?.data?.error || "Failed to delete course!",
          "error"
        );
      }
    }
  };

  const columns = [
    {
      name: "Profile",
      selector: (row) => row.image,
      cell: (row) => (
        <img
          src={
            row?.image?.[0]
              ? `${import.meta.env.VITE_MEDIA_URL}/course/${row?.image?.[0]}`
              : ALLImages("face8")
          }
          alt={row?.image?.[0] || "Course"}
          className="rounded-circle"
          width="40"
          height="40"
        />
      ),
      sortable: false,
    },
    {
      name: "Course Name",
      selector: (row) => row.course_name,
      sortable: true,
      cell: (row) => row.course_name,
    },
    {
      name: "Course Type",
      selector: (row) => row.course_type,
      sortable: true,
      cell: (row) => getCategoryById(row.course_type),
    },
    {
      name: "Course Duration",
      selector: (row) => row.duration,
      sortable: true,
      cell: (row) => row.duration,
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
              : row.status === "Suspended" || row.status === "Deleted"
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
                (item) => item === "Read Course"
              ) && (
                <Link
                  to={`/dashboard/course/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Update Course"
              ) && (
                <Link
                  to={`/dashboard/course/edit/${row._id}`}
                  className="btn btn-success btn-sm"
                >
                  <i className="fe fe-edit-2"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Course"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteCourse(row._id)}
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Courses</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Courses</Breadcrumb.Item>
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
              <h5 className="mb-0">Course List</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item === "Create Course"
                ) && (
                  <Link
                    to={`/dashboard/course/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-cpu me-1"></i>Create Course
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
                        placeholder="Search course"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredCourse}
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
