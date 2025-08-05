import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function ViewProfileSkeleton() {
  return (
    <div>
      <Card>
        <Card.Body className="py-4">
          <Row>
            {/* Left Side: Profile Picture and Info */}
            <Col md={1} className="me-2">
              <Skeleton width={100} height={100} circle />
            </Col>
            <Col md={2}>
              <Skeleton height={30} className="mb-1" count={2} />
              <Row>
                <Col md={6}>
                  <Skeleton height={30} />
                </Col>
                <Col md={6}>
                  <Skeleton height={30} />
                </Col>
              </Row>
            </Col>

            {/* Right Side: Buttons */}
            <Col
              md={8}
              className="text-end d-flex flex-column justify-content-between"
            >
              <div>
                <Skeleton width={100} height={30} />
              </div>
              <div className="d-flex justify-content-end gap-2 mt-auto">
                <Skeleton width={100} height={30} />
                <Skeleton width={100} height={30} />
                <Skeleton width={100} height={30} />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Second Card with 4 Rows of Skeletons in 2 Columns */}
      <Card className="mt-3">
        <Card.Body>
          {[...Array(4)].map((_, index) => (
            <Row key={index} className="mb-2">
              <Col md={6}>
                <Skeleton height={30} />
              </Col>
              <Col md={6}>
                <Skeleton height={30} />
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
