import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function ViewEnquirySkeleton() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Skeleton width={150} height={30} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Skeleton height={30} count={6} className="mb-1" />
            </Col>
            <Col md={6}>
              <Skeleton height={30} count={6} className="mb-1" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
