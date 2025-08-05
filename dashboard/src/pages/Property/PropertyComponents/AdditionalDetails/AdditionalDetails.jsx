import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function AdditionalDetails() {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Additional Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>Have to Decide Additional Details</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
