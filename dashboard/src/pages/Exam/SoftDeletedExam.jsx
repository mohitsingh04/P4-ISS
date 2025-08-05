import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function SoftDeletedExam() {
  const navigator = useNavigate();
  const [exams, setExams] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredExams, setFilteredExams] = useState([]);
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
    if (!authUser?.permissions?.some((item) => item === "Read Exam")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getExams = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/exam");
      const data = response.data;
      const finalData = data.filter((item) => item?.isDeleted === true);
      setExams(finalData);
      setFilteredExams(finalData);
    } catch (error) {
      console.error("Error fetching Exams:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getExams();
  }, [getExams]);

  useEffect(() => {
    if (exams) {
      setFilteredExams(
        exams.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, exams]);

  const restoreExam = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to restore this exam?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, restore it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.get(`/exam/restore/${id}`);
        Swal.fire(
          "Restored!",
          response?.data?.message || "Exam has been restored.",
          "success"
        );
        getExams();
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to restore Exam!",
          "error"
        );
      }
    }
  };

  const columns = [
    {
      name: "Exam Name",
      selector: (row) => row.exam_name,
      sortable: true,
      cell: (row) => row.exam_name,
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
                (item) => item === "Read Deleted Exam"
              ) && (
                <Link
                  to={`/dashboard/exam/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Restore Deleted Exam"
              ) && (
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => restoreExam(row._id)}
                >
                  <i className="fe fe-rotate-ccw"></i>
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Exams</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Exams</Breadcrumb.Item>
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
              <h5 className="mb-0">Exam List</h5>
              {!authLoading &&
                authUser?.permissions?.some(
                  (item) => item === "Create Exam"
                ) && (
                  <Link
                    to={`/dashboard/exam/create`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-cpu me-1"></i>Create Exam
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
                        placeholder="Search exam"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredExams}
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
