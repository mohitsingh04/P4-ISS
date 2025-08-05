import React, { useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

export default function AddExams() {
  const [formData, setFormData] = useState({
    exam_name: "",
    exam_short_name: "",
    upcoming_exam_date: "",
    result_date: "",
    application_form_date: "",
    application_form_link: "",
    exam_form_link: "",
    exam_mode: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    // TODO: send to backend via API
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add New Exam</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exam_name">
                  <Form.Label>Exam Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="exam_name"
                    value={formData.exam_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exam_short_name">
                  <Form.Label>Exam Short Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="exam_short_name"
                    value={formData.exam_short_name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="upcoming_exam_date">
                  <Form.Label>Upcoming Exam Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="upcoming_exam_date"
                    value={formData.upcoming_exam_date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="result_date">
                  <Form.Label>Result Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="result_date"
                    value={formData.result_date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="application_form_date">
                  <Form.Label>Application Form Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="application_form_date"
                    value={formData.application_form_date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="application_form_link">
                  <Form.Label>Application Form Link</Form.Label>
                  <Form.Control
                    type="url"
                    name="application_form_link"
                    value={formData.application_form_link}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exam_form_link">
                  <Form.Label>Exam Form Link</Form.Label>
                  <Form.Control
                    type="url"
                    name="exam_form_link"
                    value={formData.exam_form_link}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exam_mode">
                  <Form.Label>Exam Mode</Form.Label>
                  <Form.Control
                    type="text"
                    name="exam_mode"
                    value={formData.exam_mode}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit Exam
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
