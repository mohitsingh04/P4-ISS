import { useEffect, useMemo, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function UpdateExams({
  exam,
  getExams,
  getExamById,
  setIsEditing,
}) {
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [status, setStatus] = useState([]);

  const getStatus = async () => {
    try {
      const response = await API.get(`/status`);
      setStatus(response.data.filter((item) => item.name === "Exam"));
    } catch (error) {
      console.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const initialValues = {
    property_id: exam.property_id || "",
    exam_id: exam.exam_id || "",
    exam_name: exam.exam_name || getExamById(exam.exam_id)?.exam_name || "",
    exam_mode: exam.exam_mode || getExamById(exam.exam_id)?.exam_mode || "",
    exam_fee: exam.exam_fee || "", // editable field
    description:
      exam.description || getExamById(exam.exam_id)?.description || "",
    status: exam.status || "",
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/property-exam/${exam?._id}`, values);
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: response.data.message || "Successfully updated",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.response?.data?.error || "Failed",
        });
      } finally {
        getExams();
        setIsEditing("");
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
                        disabled
                      />
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
                </Row>

                <Row>
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

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="status">
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        name="status"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        required
                      >
                        <option value="">Select</option>
                        {status?.map((item, index) => (
                          <option value={item?.parent_status} key={index}>
                            {item?.parent_status}
                          </option>
                        ))}
                      </Form.Select>
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
