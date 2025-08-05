import { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import CreateTags from "./CreateTags";
import { API } from "../../../context/API";
import Swal from "sweetalert2";

export default function Tags() {
  const navigator = useNavigate();
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [search, setSearch] = useState("");
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
    if (!authUser?.permissions?.some((item) => item === "Read Blog Tags")) {
      navigator("/dashboard/access-denied");
    }
  }

  // Fetch all tags
  const fetchTags = useCallback(async () => {
    try {
      const response = await API.get("/blog/tag/all");
      setTags(response.data);
      setFilteredTags(response.data);
    } catch (error) {
      console.error("Failed to fetch tags:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  useEffect(() => {
    if (tags) {
      setFilteredTags(
        tags.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, tags]);
  const deleteCourse = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This tag will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/blog/tag/${id}`);
        fetchTags();
        Swal.fire("Deleted!", "The tag has been deleted.", "success");
      } catch (error) {
        console.error("Failed to delete tag:", error);
        Swal.fire("Error", "Failed to delete tag. Please try again.", "error");
      }
    }
  };

  const columns = [
    {
      name: "Tag",
      selector: (row) => row.blog_tag,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-1">
          {!authLoading && (
            <>
              {authUser?.permissions?.some(
                (item) => item === "Delete Blog Tags"
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
          <h1 className="page-title fw-semibold fs-20 mb-0">Blogs</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => window.history.back()}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>
      {!authLoading &&
        authUser?.permissions.some((item) => item === "Create Blog Tags") && (
          <CreateTags onAfterCreate={fetchTags} />
        )}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Tags List</Card.Title>
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
                data={filteredTags}
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
