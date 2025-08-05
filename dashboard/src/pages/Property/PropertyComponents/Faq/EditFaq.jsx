import React, { useEffect, useMemo, useState } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../../../context/API";
import { faqValidation } from "../../../../context/ValidationSchemas";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function EditFaq({ isUpdating, setIsUpdating, fetchData }) {
  const [faqData, setFaqData] = useState(null);
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorConfig = useMemo(() => getEditorConfig(), []);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        if (isUpdating) {
          const response = await API.get(`/faqs/${isUpdating}`);
          setFaqData(response.data);
        }
      } catch (error) {
        console.error("Error fetching FAQ", error);
      }
    };
    fetchFaq();
  }, [isUpdating]);

  const formik = useFormik({
    initialValues: {
      question: faqData?.question || "",
      answer: faqData?.answer || "",
    },
    enableReinitialize: true,
    validationSchema: faqValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setSubmitAttempt(true);
      setIsSubmitting(true);
      try {
        const response = await API.patch(`/faqs/${isUpdating}`, values);
        Swal.fire({
          title: "Success",
          text: response.data.message || "FAQ updated successfully!",
          icon: "success",
        });
        setIsUpdating(false);
        fetchData();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response.data.error || "Failed to update FAQ!",
          icon: "error",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <h5 className="m-0">Edit FAQ</h5>
            <Button
              size="sm"
              variant="danger"
              onClick={() => setIsUpdating(false)}
              disabled={isSubmitting}
            >
              <i className="fe fe-x me-1"></i>Cancel
            </Button>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="question">
                <Form.Label>Question</Form.Label>
                <Form.Control
                  type="text"
                  name="question"
                  placeholder="Enter your question"
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  isInvalid={submitAttempt && !!formik.errors.question}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.question}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="answer" className="mt-3">
                <Form.Label>Answer</Form.Label>
                <JoditEditor
                  value={formik.values.answer}
                  onBlur={(newContent) =>
                    formik.setFieldValue("answer", newContent)
                  }
                  config={editorConfig}
                />
                {submitAttempt && formik.errors.answer && (
                  <div className="text-danger mt-2">{formik.errors.answer}</div>
                )}
              </Form.Group>

              <Button
                type="submit"
                className="mt-3"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
