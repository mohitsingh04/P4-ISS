import React from "react";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccessDenied() {
  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Access Denied</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Access Denied</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Row className="justify-content-center">
        <Col>
          <Card className="p-5">
            <Card.Body>
              <h1 className="text-danger display-4 fw-bold">403</h1>
              <h2 className="fw-bold">Access Denied</h2>
              <p className="mb-4 fs-5 text-muted">
                You do not have permission to access this page.
              </p>
              <Button variant="primary" as={Link} to="/dashboard">
                <i className="fe fe-arrow-left me-2"></i>Go to Dashboard
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
