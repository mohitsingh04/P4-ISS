import React, { useCallback, useEffect, useState } from "react";
import AddCoupon from "./AddCoupon";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Card, Col, Row, Badge, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import EditCoupon from "./EditCoupon";

export default function Coupon() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [isEditing, setIsEditing] = useState("");

  const getAuthUser = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

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

  const getCoupons = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(
          `/coupons/property/${property?.uniqueId}`
        );
        setCoupons(response.data);
      } catch (error) {
        console.error(
          error.response.data.error ||
            error.response.data.message ||
            error.message
        );
      }
    }
  }, [property]);

  useEffect(() => {
    getCoupons();
  }, [getCoupons]);

  const deleteCoupon = async (uniqueId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the coupon.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/coupon/${uniqueId}`);
          setCoupons((prev) =>
            prev.filter((coupon) => coupon.uniqueId !== uniqueId)
          );
          Swal.fire("Deleted!", "Coupon has been deleted.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Failed to delete coupon.", "error");
        }
      }
    });
  };
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <Row>
            {coupons?.length > 0 && (
              <Col md={12}>
                <Card className="shadow-sm border-0">
                  <Card.Header className="bg-white border-bottom">
                    <Card.Title className="fs-4 fw-bold">Coupons</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row className="g-4">
                      {coupons?.map((item, index) => (
                        <Col md={4} key={index}>
                          <Card
                            className="shadow-sm border-0 p-2"
                            style={{ minHeight: "300px" }}
                          >
                            <Card.Header className="d-flex justify-content-between">
                              <Card.Title className="fw-bold m-0">
                                {item?.coupon_code}
                              </Card.Title>
                              <Button
                                size="sm"
                                variant="outline-light"
                                onClick={() =>
                                  navigator.clipboard.writeText(
                                    item?.coupon_code
                                  )
                                }
                                title="Copy to clipboard"
                              >
                                <i className="fe fe-copy"></i>
                              </Button>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <Badge
                                  bg={item.isExpired ? "danger" : "success"}
                                >
                                  {item.isExpired ? "Expired" : "Active"}
                                </Badge>
                                <Badge bg="secondary">
                                  {item.discount}% OFF
                                </Badge>
                              </div>

                              <div className="d-flex justify-content-between">
                                <div className="text-muted small mb-2">
                                  <p className="fw-bold">
                                    Start:{formatDate(item?.start_from)}
                                  </p>
                                </div>
                                <div className="text-muted small mb-2">
                                  <p className="fw-bold">
                                    Valid Upto:{formatDate(item?.valid_upto)}
                                  </p>
                                </div>
                              </div>

                              <div className="mt-auto text-dark">
                                <strong>Description:</strong>
                                <div className="truncate-3-lines">
                                  {item.description}
                                </div>
                              </div>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                              <Button
                                size="sm"
                                onClick={() => setIsEditing(item)}
                              >
                                <i className="fe fe-edit me-1"></i>Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={() => deleteCoupon(item.uniqueId)}
                              >
                                <i className="fe fe-trash-2 me-1"></i>Delete
                              </Button>
                            </Card.Footer>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
          {coupons?.length < 3 && (
            <AddCoupon
              property={property}
              authUser={authUser}
              getCoupons={getCoupons}
            />
          )}
        </div>
      ) : (
        <EditCoupon
          property={property}
          getCoupons={getCoupons}
          coupon={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
