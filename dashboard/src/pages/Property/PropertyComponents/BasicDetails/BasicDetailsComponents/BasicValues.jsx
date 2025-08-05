import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";

export default function BasicValues({ property }) {
  return (
    <Row>
      <Col md={4}>
        <Form.Group>
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            value={property?.property_name || ""}
            disabled
            className="mb-2"
          />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            value={property?.property_email || ""}
            disabled
            className="mb-2"
          />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label className="fw-bold">Contact</Form.Label>
          <PhoneInput
            country={"in"}
            value={property?.property_mobile_no || ""}
            disabled
            inputClass="w-100 bg-light border"
            buttonClass="bg-light border"
          />
        </Form.Group>
      </Col>
    </Row>
  );
}
