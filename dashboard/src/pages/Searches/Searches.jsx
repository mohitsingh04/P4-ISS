import React, { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API } from "../../context/API";

export default function Searchess() {
  const [searches, setSearchess] = useState([]);
  const [filteredSearchess, setFilteredSearchess] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();

  const fetchSearchess = useCallback(async () => {
    try {
      const response = await API.get("/search");
      setSearchess(response.data);
      setFilteredSearchess(response.data);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch Searches:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchSearchess();
  }, [fetchSearchess]);

  useEffect(() => {
    if (searches) {
      setFilteredSearchess(
        searches.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, searches]);

  const columns = [
    {
      name: "Searches",
      selector: (row) => row.search,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-1">
          <>
            <Link
              to={`/dashboard/search/${row._id}`}
              className="btn btn-sm btn-primary"
            >
              <i className="fe fe-eye"></i>
            </Link>
          </>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Searches</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Searches</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator()}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Searches List</Card.Title>
            </Card.Header>
            <Card.Body>
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
                data={filteredSearchess}
                progressPending={loading}
                pagination
                highlightOnHover
                striped
                responsive
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
