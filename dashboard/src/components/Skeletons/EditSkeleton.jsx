import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function EditSkeleton() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Skeleton width={150} height={30} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Skeleton height={30} count={3} className="mb-2" />
            </Col>
            <Col md={6}>
              <Skeleton height={30} count={3} className="mb-2" />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Skeleton height={160} />
            </Col>
            <Col md={4}>
              <Skeleton height={160} />
            </Col>
          </Row>
          <Skeleton height={30} width={150} />
        </Card.Body>
      </Card>
    </div>
  );
}
