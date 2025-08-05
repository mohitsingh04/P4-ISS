import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row, Badge, Button } from "react-bootstrap";
import AddHiring from "./AddHiring";
import { API } from "../../../../context/API";
import { useParams } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import EditHiring from "./EditHiring";

export default function Hiring() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [hiring, setHiring] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [isEditing, setIsEditing] = useState("");

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getHiring = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(`/hiring/${property?.uniqueId}`);
        setHiring(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [property]);

  useEffect(() => {
    getHiring();
  }, [getHiring]);

  const toggleExpand = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getPlainText = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

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
        const response = await API.delete(`/hiring/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: response?.data?.message || "Hiring deleted successfully.",
          icon: "success",
        });
        getHiring();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.error || "Failed to delete course!",
          icon: "error",
        });
      }
    }
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <Row>
            <Col className="mb-4">
              {hiring?.map((item, index) => {
                const plainText = getPlainText(item?.job_description);
                const isLong = plainText.length > 300;
                const isExpanded = expandedDescriptions[index];

                return (
                  <Card key={index}>
                    <Card.Header className="d-flex justify-content-between">
                      <Card.Title>{item?.title}</Card.Title>
                      <div>
                        <Button
                          size="sm"
                          className="me-1"
                          onClick={() => setIsEditing(item)}
                        >
                          <i className="fe fe-edit me-1"></i>Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(item?.uniqueId)}
                        >
                          <i className="fe fe-trash-2 me-1"></i>Delete
                        </Button>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <p>
                            <strong>Job Type:</strong> {item?.job_type}
                          </p>
                          <p>
                            <strong>Experience:</strong> {item?.experience}
                          </p>
                          <p>
                            <strong>Start Date:</strong>{" "}
                            {new Date(item?.start_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                          <p>
                            <strong>End Date:</strong>{" "}
                            {new Date(item?.end_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </Col>
                        <Col md={6}>
                          {item?.salary?.length > 0 && (
                            <div>
                              <p>
                                <strong>Salary (INR):</strong> ₹
                                {item.salary[0].INR || "N/A"}
                              </p>
                              <p>
                                <strong>Salary (USD):</strong> $
                                {item.salary[0].DOLLAR || "N/A"}
                              </p>
                              <p>
                                <strong>Salary (EUR):</strong> €
                                {item.salary[0].EURO || "N/A"}
                              </p>
                            </div>
                          )}

                          <p>
                            <strong>Status:</strong>
                            <Badge
                              bg={
                                item?.status === "Pending"
                                  ? "warning"
                                  : item?.status === "Active"
                                  ? "success"
                                  : item?.status === "Suspended"
                                  ? "danger"
                                  : "info"
                              }
                              className="ms-2"
                            >
                              {item?.status}
                            </Badge>
                          </p>
                          <p>
                            <strong>Expired:</strong>
                            <Badge
                              bg={item?.isExpired ? "secondary" : "success"}
                              className="ms-2"
                            >
                              {item?.isExpired ? "Yes" : "No"}
                            </Badge>
                          </p>
                        </Col>
                      </Row>

                      <Row className="mt-3">
                        <Col>
                          <strong>Skills:</strong>
                          <div className="d-flex flex-wrap gap-2 mt-1">
                            {item?.skills?.map((skill, i) => (
                              <Badge bg="primary" key={i}>
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-3">
                        <Col>
                          <strong>Qualifications:</strong>
                          <div className="d-flex flex-wrap gap-2 mt-1">
                            {item?.qualification?.map((qual, i) => (
                              <Badge bg="dark" key={i}>
                                {qual}
                              </Badge>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-3">
                        <Col>
                          <strong>Job Description:</strong>
                          <div className="mt-1">
                            {isLong ? (
                              <>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: isExpanded
                                      ? item?.job_description
                                      : getPlainText(
                                          item?.job_description
                                        ).slice(0, 300) + "...",
                                  }}
                                />
                                <Button
                                  variant="link"
                                  className="p-0 mt-2"
                                  onClick={() => toggleExpand(index)}
                                >
                                  {isExpanded ? "Show Less" : "Show More"}
                                </Button>
                              </>
                            ) : (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.job_description,
                                }}
                              />
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })}
            </Col>
          </Row>

          <AddHiring property={property} getHiring={getHiring} />
        </>
      ) : (
        <EditHiring
          hiring={isEditing}
          setIsEditing={setIsEditing}
          getHiring={getHiring}
        />
      )}
    </div>
  );
}
