import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Card, Col, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import DataTableSkeleton from "../../components/Skeletons/DataTableSkeleton";

export default function ArchiveEnquiry() {
  const navigator = useNavigate();
  const [archive, setArchive] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArchives, setFilteredArchives] = useState([]);
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
    if (!authUser?.permissions?.some((item) => item === "Read Archive")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getArchives = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/enquiry/archive/all");
      setArchive(response.data);
      setFilteredArchives(response.data);
    } catch (error) {
      console.error("Error fetching archive:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getArchives();
  }, [getArchives]);

  useEffect(() => {
    if (archive) {
      setFilteredArchives(
        archive.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, archive]);

  const deleteArchive = async (id) => {
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
        const response = await API.delete(`/enquiry/archive/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "archive removed.",
          "success"
        );
        getArchives();
      } catch (error) {
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to delete!",
          "error"
        );
      }
    }
  };

  const generateCsvHeaders = (data) => {
    if (data.length === 0) return [];
    return Object.keys(data[0]).map((key) => ({
      label: key.replace(/_/g, " ").toUpperCase(),
      key: key,
    }));
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredArchives);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Enquiries.xlsx");
  };

  const columns = [
    {
      name: "Property Name",
      selector: (row) => row.property_name,
      sortable: true,
      cell: (row) => row.property_name,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => row.name,
    },
    {
      name: "No. of People",
      selector: (row) => row.people,
      sortable: true,
      cell: (row) => row.people,
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
                (item) => item === "Read Archive"
              ) && (
                <Link
                  to={`/dashboard/enquiry/archive/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Archive"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteArchive(row._id)}
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Enquiry</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/enquiry" }}
            >
              Enquiry
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Archive</Breadcrumb.Item>
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
            <Card.Header className="py-3">
              <h5 className="mb-0">Archive List</h5>
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
                        placeholder="Search archive"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={8} className="text-end">
                    <CSVLink
                      data={filteredArchives}
                      headers={generateCsvHeaders(filteredArchives)}
                      filename="Enquiries.csv"
                      className="btn btn-success me-1"
                    >
                      Download CSV
                    </CSVLink>
                    <button
                      className="btn btn-secondary me-1"
                      onClick={downloadExcel}
                    >
                      Download Excel
                    </button>
                  </Col>
                </Row>

                <DataTable
                  columns={columns}
                  data={loading ? Array(10).fill({}) : filteredArchives}
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
