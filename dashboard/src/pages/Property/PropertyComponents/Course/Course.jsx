import React, { useCallback, useEffect, useState } from "react";
import AddCourse from "./AddCourse";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableSkeleton from "../../../../components/Skeletons/DataTableSkeleton";
import Swal from "sweetalert2";
import ViewCourse from "./ViewCourse";
import EditCourse from "./EditCourse";

export default function Course() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [courses, setCourses] = useState([]);
  const [propertyCourses, setPropertyCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [authUser, setAuthUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isViewing, setIsViewing] = useState("");
  const [isEditing, setIsEditing] = useState("");
  const [allCourse, setAllCourse] = useState([]);

  const fetchCourseDetail = async () => {
    try {
      const response = await API.get(`/course`);
      setAllCourse(response.data);
    } catch (error) {
      console.error("Error fetching course detail:", error);
      Swal.fire("Error", "Failed to fetch course detail.", "error");
      return null;
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);

  const getPropertyCourses = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(
          `/property/property-course/${property?.uniqueId}`
        );
        setPropertyCourses(response.data);
        setFilteredCourses(response.data);
      }
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [property]);

  useEffect(() => {
    getPropertyCourses();
  }, [getPropertyCourses]);

  const getAuthUser = async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  useEffect(() => {
    if (allCourse) {
      setCourses(allCourse.filter((item) => item.status === "Active"));
      setLoading(false);
    }
  }, [allCourse]);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  useEffect(() => {
    if (propertyCourses.length) {
      setFilteredCourses(
        propertyCourses.filter((item) =>
          Object.values(item).some((val) =>
            val?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, propertyCourses]);

  const handleDelete = async (id) => {
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
        const response = await API.delete(`/property-course/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: response?.data?.message || "Course deleted successfully.",
          icon: "success",
        });
        getPropertyCourses();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.error || "Failed to delete course!",
          icon: "error",
        });
      }
    }
  };

  const courseFinder = (row) => {
    const item = allCourse.find((item) => item.uniqueId === row.course_id);
    return item;
  };

  const columns = [
    {
      name: "Course Name",
      selector: (row) => row.course_name || courseFinder(row).course_name,
      sortable: true,
    },
    {
      name: "Certification Type",
      selector: (row) =>
        row.certification_type || courseFinder(row).certification_type,
      sortable: true,
    },
    {
      name: "Duration",
      selector: (row) => row.duration || courseFinder(row).duration,
      sortable: true,
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
          <Button size="sm" onClick={() => setIsViewing(row)}>
            <i className="fe fe-eye"></i>
          </Button>
          <Button size="sm" variant="success" onClick={() => setIsEditing(row)}>
            <i className="fe fe-edit-2"></i>
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(row._id)}
          >
            <i className="fe fe-trash-2"></i>
          </Button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div>
      {!isAdding ? (
        !isEditing ? (
          !isViewing ? (
            <Row>
              <Col>
                <Card>
                  <Card.Header className="d-flex justify-content-between">
                    <Card.Title>View Courses</Card.Title>
                    <Button size="sm" onClick={() => setIsAdding(true)}>
                      <i className="fe fe-plus me-1"></i>Add Course
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    {loading ? (
                      <DataTableSkeleton />
                    ) : (
                      <>
                        <Row className="mb-3">
                          <Col lg={4}>
                            <div className="position-relative">
                              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i className="fe fe-search text-primary"></i>
                              </span>
                              <Form.Control
                                type="text"
                                placeholder="Search Courses"
                                value={search}
                                className="ps-5 border-bottom border-0 border-primary rounded-0"
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                          </Col>
                        </Row>

                        <DataTable
                          columns={columns}
                          data={filteredCourses}
                          pagination
                          striped
                          highlightOnHover
                          responsive
                        />
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ) : (
            <ViewCourse
              course={isViewing}
              allCourse={allCourse}
              setIsViewing={setIsViewing}
              setIsEditing={setIsEditing}
              getPropertyCourses={getPropertyCourses}
            />
          )
        ) : (
          <EditCourse
            course={isEditing}
            getPropertyCourses={getPropertyCourses}
            setIsEditing={setIsEditing}
          />
        )
      ) : (
        <AddCourse
          property={property}
          setIsAdding={setIsAdding}
          courses={courses}
          authUser={authUser}
          getPropertyCourses={getPropertyCourses}
        />
      )}
    </div>
  );
}
