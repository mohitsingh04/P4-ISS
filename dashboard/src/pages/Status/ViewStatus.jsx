import React, { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Table } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";
import ViewEnquirySkeleton from "../../components/Skeletons/ViewEnquirySkeleton";

export default function ViewStatus() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});
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
    if (!authUser?.permissions?.some((item) => item === "Read Status")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status/${objectId}`);
      setStatus(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  }, [objectId]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">View Status</h1>
          {!loading ? (
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/dashboard/status" }}
              >
                Status
              </Breadcrumb.Item>
              <Breadcrumb.Item>View</Breadcrumb.Item>
              <Breadcrumb.Item active>{status.name}</Breadcrumb.Item>
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
              <Card.Header>
                <h5 className="mb-0">View Status Details</h5>
              </Card.Header>
              <Card.Body>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(status)
                      .filter(
                        ([key]) =>
                          !["_id", "__v", "createdAt", "uniqueId"].includes(key)
                      )
                      .map(([key, value]) => (
                        <tr key={key}>
                          <th>{key}</th>
                          <td>
                            {!value
                              ? "N/A"
                              : typeof value === "object"
                              ? JSON.stringify(value)
                              : value}
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
