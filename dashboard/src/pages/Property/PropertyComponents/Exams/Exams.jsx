import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableSkeleton from "../../../../components/Skeletons/DataTableSkeleton";
import Swal from "sweetalert2";
import AddExams from "./AddExams";
import UpdateExams from "./UpdateExams";
import ViewExams from "./ViewExams";

export default function Exams() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [exams, setExams] = useState([]);
  const [propertyExams, setPropertyExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isViewing, setIsViewing] = useState("");
  const [isEditing, setIsEditing] = useState("");
  const [allExams, setAllExams] = useState([]);

  const fetchExamsDetail = async () => {
    try {
      const response = await API.get(`/exam`);
      setAllExams(response.data);
    } catch (error) {
      console.error("Error fetching exams detail:", error);
      Swal.fire("Error", "Failed to fetch exam detail.", "error");
      return null;
    }
  };

  useEffect(() => {
    fetchExamsDetail();
  }, []);

  const getPropertyExams = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(
          `/property/property-exam/${property?.uniqueId}`
        );
        setPropertyExams(response.data);
        setFilteredExams(response.data);
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
    getPropertyExams();
  }, [getPropertyExams]);

  useEffect(() => {
    if (allExams) {
      setExams(allExams.filter((item) => item.status === "Active"));
      setLoading(false);
    }
  }, [allExams]);

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
    if (propertyExams.length) {
      setFilteredExams(
        propertyExams.filter((item) =>
          Object.values(item).some((val) =>
            val?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, propertyExams]);

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
        const response = await API.delete(`/property-exam/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: response?.data?.message || "Exam deleted successfully.",
          icon: "success",
        });
        getPropertyExams();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.error || "Failed to delete Exam!",
          icon: "error",
        });
      }
    }
  };

  const examFinder = (row) => {
    const item = allExams.find((item) => item.uniqueId === row.exam_id);
    return item;
  };

  const columns = [
    {
      name: "Exam Name",
      selector: (row) => row.exam_name || examFinder(row).exam_name,
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
                    <Card.Title>View Exams</Card.Title>
                    <Button size="sm" onClick={() => setIsAdding(true)}>
                      <i className="fe fe-plus me-1"></i>Add Exams
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
                                placeholder="Search Exams"
                                value={search}
                                className="ps-5 border-bottom border-0 border-primary rounded-0"
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                          </Col>
                        </Row>

                        <DataTable
                          columns={columns}
                          data={filteredExams}
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
            <ViewExams />
          )
        ) : (
          <UpdateExams />
        )
      ) : (
        <AddExams />
      )}
    </div>
  );
}
