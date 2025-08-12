import React, { useEffect, useMemo, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function AddExams({ exams, property, setIsAdding, onSubmit }) {
  const editorConfig = useMemo(() => getEditorConfig(), []);

  const formik = useFormik({
    initialValues: {
      property_id: property?.uniqueId || "",
      exam_id: "",
      exam_mode: "",
      exam_fee: "",
      description: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const selected = exams.find(
          (exam) => exam.uniqueId === Number(values.exam_id)
        );
        const payload = {
          ...values,
          exam_name: selected?.exam_name || "",
        };

        const response = await API.post(`/property-exam`, payload);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Successfully added",
        });
      } catch (error) {
        console.error(error);
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

  // When exam_id changes, update selected exam + auto-fill related fields
  useEffect(() => {
    const foundExam = exams?.find(
      (item) => item?.uniqueId === Number(formik.values.exam_id)
    );

    if (foundExam) {
      formik.setFieldValue("exam_mode", foundExam.exam_mode || "");
      formik.setFieldValue("description", foundExam.description || "");
      // exam_fee stays as entered by user (no auto-fill)
    } else {
      formik.setFieldValue("exam_mode", "");
      formik.setFieldValue("description", "");
    }
  }, [formik.values.exam_id, exams]);

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add Exam</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Exam Name</Form.Label>
                      <Form.Select
                        name="exam_id"
                        value={formik.values.exam_id}
                        onChange={formik.handleChange}
                        required
                      >
                        <option value="">-- Select Exam --</option>
                        {exams.map((exam) => (
                          <option key={exam._id} value={exam.uniqueId}>
                            {exam.exam_name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="exam_mode">
                      <Form.Label>Exam Mode</Form.Label>
                      <Form.Select
                        name="exam_mode"
                        value={formik.values.exam_mode}
                        onChange={formik.handleChange}
                        required
                      >
                        <option value="">-- Select Mode --</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="exam_fee">
                      <Form.Label>Exam Fee (₹)</Form.Label>
                      <Form.Control
                        type="number"
                        name="exam_fee"
                        placeholder="Enter fee amount"
                        value={formik.values.exam_fee}
                        onChange={formik.handleChange}
                        min="0"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <JoditEditor
                    value={formik.values.description}
                    onChange={(newContent) =>
                      formik.setFieldValue("description", newContent)
                    }
                    config={editorConfig}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {formik.values.exam_id ? "Update Exam" : "Add Exam"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
