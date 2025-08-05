import React, { useRef, useState, useEffect } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";

export default function AddExams({ exams, property, setIsAdding, onSubmit }) {
  const editor = useRef(null);
  const [selectedExamId, setSelectedExamId] = useState("");
  const [initialValues, setInitialValues] = useState({
    property_id: "",
    exam_id: "",
    exam_short_name: "",
    upcoming_exam_date: "",
    result_date: "",
    application_form_date: "",
    application_form_link: "",
    exam_form_link: "",
    exam_mode: "",
    description: "",
  });

  useEffect(() => {
    if (selectedExamId) {
      const selected = exams.find((exam) => exam._id === selectedExamId);
      if (selected) {
        setInitialValues({
          property_id: property.uniqueId || "",
          exam_id: selected.uniqueId || "",
          exam_short_name: selected.exam_short_name || "",
          upcoming_exam_date: selected.upcoming_exam_date?.slice(0, 10) || "",
          result_date: selected.result_date?.slice(0, 10) || "",
          application_form_date:
            selected.application_form_date?.slice(0, 10) || "",
          application_form_link: selected.application_form_link || "",
          exam_form_link: selected.exam_form_link || "",
          exam_mode: selected.exam_mode || "",
          description: selected.description || "",
        });
      }
    } else {
      setInitialValues({
        property_id: property.uniqueId || "",
        exam_short_name: "",
        upcoming_exam_date: "",
        result_date: "",
        application_form_date: "",
        application_form_link: "",
        exam_form_link: "",
        exam_mode: "",
        description: "",
      });
    }
  }, [selectedExamId, exams]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: async (values) => {
      try {
        const selected = exams.find((exam) => exam._id === selectedExamId);
        const payload = {
          ...values,
          exam_name: selected?.exam_name || "", // Inject exam_name from selected exam
        };

        const response = await API.post(`/property-exam`, payload);
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: response.data.message || "Successfully",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.response?.data?.error || "Failed",
        });
      } finally {
        onSubmit();
        setIsAdding(false);
      }
    },
  });

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add / Edit Exam</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Exam Name</Form.Label>
                      <Form.Select
                        value={selectedExamId}
                        onChange={(e) => setSelectedExamId(e.target.value)}
                        required
                      >
                        <option value="">-- Select Exam --</option>
                        {exams.map((exam) => (
                          <option key={exam._id} value={exam._id}>
                            {exam.exam_name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="exam_short_name">
                      <Form.Label>Short Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="exam_short_name"
                        value={formik.values.exam_short_name}
                        onChange={formik.handleChange}
                        placeholder="e.g., JEE"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="upcoming_exam_date">
                      <Form.Label>Upcoming Exam Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="upcoming_exam_date"
                        value={formik.values.upcoming_exam_date}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="result_date">
                      <Form.Label>Result Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="result_date"
                        value={formik.values.result_date}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="application_form_date"
                    >
                      <Form.Label>Application Form Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="application_form_date"
                        value={formik.values.application_form_date}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="application_form_link"
                    >
                      <Form.Label>Application Form Link</Form.Label>
                      <Form.Control
                        type="url"
                        name="application_form_link"
                        value={formik.values.application_form_link}
                        onChange={formik.handleChange}
                        placeholder="e.g., https://examportal.com/apply"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="exam_form_link">
                      <Form.Label>Exam Form Link</Form.Label>
                      <Form.Control
                        type="url"
                        name="exam_form_link"
                        value={formik.values.exam_form_link}
                        onChange={formik.handleChange}
                        placeholder="e.g., https://examportal.com/form"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="exam_mode">
                      <Form.Label>Exam Mode</Form.Label>
                      <Form.Control
                        type="text"
                        name="exam_mode"
                        value={formik.values.exam_mode}
                        onChange={formik.handleChange}
                        placeholder="e.g., Online, Offline"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <JoditEditor
                    ref={editor}
                    value={formik.values.description}
                    tabIndex={1}
                    onChange={(newContent) =>
                      formik.setFieldValue("description", newContent)
                    }
                    config={{
                      placeholder: "Write full exam description here...",
                    }}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {selectedExamId ? "Update Exam" : "Add Exam"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
