import { useMemo, useRef } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function UpdateExams({ exam, onSubmit, getExamById }) {
  const editorConfig = useMemo(() => getEditorConfig(), []);

  const initialValues = {
    property_id: exam.property_id || "",
    exam_id: exam.exam_id || "",
    exam_name: exam.exam_name || getExamById(exam.exam_id).exam_name || "",
    exam_short_name:
      exam.exam_short_name || getExamById(exam.exam_id).exam_short_name || "",
    upcoming_exam_date:
      exam.upcoming_exam_date?.slice(0, 10) ||
      getExamById(exam.exam_id).upcoming_exam_date?.slice(0, 10) ||
      "",
    result_date:
      exam.result_date?.slice(0, 10) ||
      getExamById(exam.exam_id).result_date?.slice(0, 10) ||
      "",
    application_form_date:
      exam.application_form_date?.slice(0, 10) ||
      getExamById(exam.exam_id).application_form_date?.slice(0, 10) ||
      "",
    application_form_link:
      exam.application_form_link ||
      getExamById(exam.exam_id).application_form_link ||
      "",
    exam_form_link:
      exam.exam_form_link || getExamById(exam.exam_id).exam_form_link || "",
    exam_mode: exam.exam_mode || getExamById(exam.exam_id).exam_mode || "",
    description:
      exam.description || getExamById(exam.exam_id).description || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/property-exam/${exam?._id}`, values);
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
      }
    },
  });

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Edit Exam</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Exam Name</Form.Label>
                      <Form.Control
                        name="exam_name"
                        value={formik.values.exam_name}
                        onChange={formik.handleChange}
                        disabled
                      />
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
                    value={formik.values.description}
                    onChange={(newContent) =>
                      formik.setFieldValue("description", newContent)
                    }
                    config={editorConfig}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update Exam
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
