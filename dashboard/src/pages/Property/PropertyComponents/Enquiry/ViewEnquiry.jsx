import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table, Form, Badge } from "react-bootstrap";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function ViewEnquiry({ enquiry, getEnquires, setIsViewing }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStatus, setEditedStatus] = useState("");
  const [status, setStatus] = useState([]);

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

  useEffect(() => {
    setEditedStatus(enquiry.status);
  }, [enquiry]);

  const handleSave = async () => {
    try {
      const response = await API.patch(`/enquiry/status/${enquiry?._id}`, {
        status: editedStatus,
      });
      getEnquires();
      setIsEditing(false);
      setIsViewing(response.data.enquiry);
      Swal.fire({
        title: "Success",
        text: response.data.message || "Status updated successfully!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response.data.error || "Failed to update status!",
        icon: "error",
      });
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
      <Row>
        <Col>
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
                                <Button variant="success" onClick={handleSave}>
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
        </Col>
      </Row>
    </div>
  );
}
