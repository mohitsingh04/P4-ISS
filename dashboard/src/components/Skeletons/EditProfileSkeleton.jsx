import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function EditProfileSkeleton() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Skeleton width={150} height={30} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={10}>
              <Skeleton circle className="my-2 avatar" />
            </Col>
            <Col md={2} className="text-end">
              <Skeleton width={80} height={30} />
            </Col>
          </Row>
          <Skeleton count={6} height={30} className="mb-2" />
          <Row>
            <Col lg={6}>
              <Skeleton count={4} height={30} className="mb-2" />
            </Col>
            <Col lg={6}>
              <Skeleton count={4} height={30} className="mb-2" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
