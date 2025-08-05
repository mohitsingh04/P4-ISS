import { useFormik } from "formik";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { faqValidation } from "../../../../context/ValidationSchemas";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function AddFaq({ propertyId, fetchData }) {
  const editor = useRef(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const editorConfig = useMemo(() => getEditorConfig(), []);

  const getAuthUser = useCallback(async () => {
    try {
      const userResponse = await API.get("/profile");
      setUserId(userResponse.data.uniqueId);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }, []);

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    validationSchema: faqValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      if (!userId || !propertyId) return;

      setLoading(true);

      if (!faqValidation.isValidSync(values)) {
        setLoading(false);
        return;
      }

      const faqData = {
        userId,
        property_id: propertyId,
        question: values.question,
        answer: values.answer,
      };

      try {
        const response = await API.post("/faqs", faqData);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "FAQ added successfully",
        });
        resetForm();
        fetchData();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.error || "Failed to add FAQ",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <h5 className="m-0">Add FAQ</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    type="text"
                    name="question"
                    placeholder="Enter your question"
                    value={formik.values.question}
                    onChange={formik.handleChange}
                    disabled={loading}
                  />
                  {formik.errors.question && (
                    <div className="text-danger">{formik.errors.question}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Answer</Form.Label>
                  <JoditEditor
                    ref={editor}
                    value={formik.values.answer}
                    onBlur={(newContent) =>
                      formik.setFieldValue("answer", newContent)
                    }
                    config={editorConfig}
                    disabled={loading}
                  />
                  {formik.errors.answer && (
                    <div className="text-danger">{formik.errors.answer}</div>
                  )}
                </Form.Group>

                <Button type="submit" variant="primary" disabled={loading}>
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <i className="fe fe-plus"></i>
                  )}{" "}
                  {loading ? "Adding..." : "Add FAQ"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
