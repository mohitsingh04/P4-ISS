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

export default function Enquiry() {
  const navigator = useNavigate();
  const [enquires, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEnquires, setFilteredEnquires] = useState([]);
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
    if (!authUser?.permissions?.some((item) => item === "Read Enquiry")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getEnquires = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/enquiry");
      setEnquiries(response.data);
      setFilteredEnquires(response.data);
    } catch (error) {
      console.error("Error fetching enquires:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getEnquires();
  }, [getEnquires]);

  useEffect(() => {
    if (enquires) {
      setFilteredEnquires(
        enquires.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, enquires]);

  const deleteEnquiry = async (id) => {
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
        const response = await API.delete(`/enquiry/soft/${id}`);
        Swal.fire(
          "Deleted!",
          response?.data?.message || "enquires removed.",
          "success"
        );
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to delete!",
          "error"
        );
      } finally {
        setEnquiries((prev) => prev.filter((item) => item._id !== id));
        setFilteredEnquires((prev) => prev.filter((item) => item._id !== id));
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
    const worksheet = XLSX.utils.json_to_sheet(filteredEnquires);
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
                (item) => item === "Read Enquiry"
              ) && (
                <Link
                  to={`/dashboard/enquiry/view/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fe fe-eye"></i>
                </Link>
              )}
              {authUser?.permissions?.some(
                (item) => item === "Delete Enquiry"
              ) && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteEnquiry(row._id)}
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
            <Breadcrumb.Item active>Enquiry</Breadcrumb.Item>
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
              <h5 className="mb-0">Enquiry List</h5>
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
                        placeholder="Search enquires"
                        value={search}
                        className="ps-5 border-bottom border-0 border-primary rounded-0"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={8} className="text-end">
                    <CSVLink
                      data={filteredEnquires}
                      headers={generateCsvHeaders(filteredEnquires)}
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
                  data={loading ? Array(10).fill({}) : filteredEnquires}
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
