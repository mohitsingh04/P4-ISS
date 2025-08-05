import React, { useCallback, useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Table,
  Form,
  Badge,
} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ViewEnquirySkeleton from "../../components/Skeletons/ViewEnquirySkeleton";

export default function ViewEnquiry() {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [enquiry, setEnquiry] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedStatus, setEditedStatus] = useState("");
  const [status, setStatus] = useState([]);
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

  const getStatus = async () => {
    try {
      const response = await API.get("/status");
      setStatus(response.data.filter((item) => item.name === "Enquiry"));
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const getEnquiry = useCallback(async () => {
    try {
      const response = await API.get(`/enquiry/${objectId}`);
      setEnquiry(response.data);
      setEditedStatus(response.data.status);
      setLoading(false);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  useEffect(() => {
    getEnquiry();
  }, [getEnquiry]);

  const handleSave = async () => {
    try {
      const response = await API.patch(`/enquiry/status/${objectId}`, {
        status: editedStatus,
      });
      setEnquiry((prev) => ({ ...prev, status: editedStatus }));
      setIsEditing(false);
      Swal.fire(
        "Success",
        response.data.message || "Status updated successfully!",
        "success"
      );
    } catch (error) {
      Swal.fire("Error", "Failed to update status!", "error");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return "bg-success";
      case "Suspended":
        return "bg-danger";
      default:
        return "bg-warning";
    }
  };

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Enquiry</h1>
          {!loading ? (
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
              <Breadcrumb.Item>View</Breadcrumb.Item>
              <Breadcrumb.Item active>{enquiry.property_name}</Breadcrumb.Item>
            </Breadcrumb>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col>
          {loading ? (
            <ViewEnquirySkeleton />
          ) : (
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">View Enquiry</h5>
              </Card.Header>
              <Card.Body>
                <Table striped responsive>
                  <tbody>
                    {Object.entries(enquiry)
                      .filter(
                        ([key]) =>
                          key !== "_id" &&
                          key !== "createdAt" &&
                          key !== "updatedAt" &&
                          key !== "__v" &&
                          key !== "property_id"
                      )
                      .map(([key, value]) => (
                        <tr key={key}>
                          <td className="fw-semibold">
                            {key
                              .replace(/_/g, " ")
                              .replace(/\b\w/g, (c) => c.toUpperCase())}
                          </td>
                          <td>
                            {key === "status" ? (
                              isEditing ? (
                                <Form onSubmit={handleSave} className="d-flex">
                                  <Form.Select
                                    value={editedStatus}
                                    onChange={(e) =>
                                      setEditedStatus(e.target.value)
                                    }
                                  >
                                    <option value="">--Select Status--</option>
                                    {status.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.parent_status}
                                      >
                                        {item.parent_status}
                                      </option>
                                    ))}
                                  </Form.Select>
                                  <Button
                                    variant="success"
                                    onClick={handleSave}
                                  >
                                    <i className="fe fe-check-circle"></i>
                                  </Button>
                                </Form>
                              ) : (
                                <div className="d-flex justify-content-between">
                                  <div className="align-content-center">
                                    <Badge className={getStatusBadge(value)}>
                                      {value}
                                    </Badge>
                                  </div>
                                  <Button
                                    className="ms-2 btn-sm"
                                    onClick={() => setIsEditing(true)}
                                  >
                                    <i className="fe fe-edit"></i>
                                  </Button>
                                </div>
                              )
                            ) : /.*(date|time)/i.test(key) ? (
                              new Date(value).toLocaleString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            ) : (
                              value
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
}
