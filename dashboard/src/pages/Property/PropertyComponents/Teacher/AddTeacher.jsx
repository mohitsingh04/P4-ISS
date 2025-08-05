import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import ALLImages from "../../../../common/Imagesdata";
import { teacherValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";

export default function AddTeacher({ property, setIsAdding, getTeachers }) {
  const [profilePreview, setProfilePreview] = useState(null);
  const [authUser, setauthUser] = useState("");

  const getAuthUser = async () => {
    try {
      const response = await API.get(`/profile`);
      setauthUser(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  const formik = useFormik({
    initialValues: {
      userId: authUser?.uniqueId || "",
      property_id: property?.uniqueId || "",
      teacher_name: "",
      designation: "",
      experience_value: "",
      experience_type: "",
      profile: null,
    },
    enableReinitialize: true,
    validationSchema: teacherValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("property_id", values.property_id);
      formData.append("teacher_name", values.teacher_name);
      formData.append("designation", values.designation);
      formData.append(
        "experience",
        `${values.experience_value} ${values.experience_type}`
      );
      if (values.profile) {
        formData.append("profile", values.profile);
      }
      try {
        const response = await API.post(`/teacher`, formData);
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: response.data.message || "Teacher Added Successfully",
        });
        setIsAdding(false);
        getTeachers();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error || "Failed To Add Teacher",
        });
      }
    },
  });

  const handleProfileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("profile", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Add Teacher</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Teacher Name</Form.Label>
                <Form.Control
                  type="text"
                  name="teacher_name"
                  placeholder="Enter teacher name"
                  {...formik.getFieldProps("teacher_name")}
                  isInvalid={!!formik.errors.teacher_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.teacher_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  placeholder="Enter designation"
                  {...formik.getFieldProps("designation")}
                  isInvalid={!!formik.errors.designation}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.designation}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="number"
                  name="experience_value"
                  placeholder="Enter experience value"
                  {...formik.getFieldProps("experience_value")}
                  isInvalid={!!formik.errors.experience_value}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.experience_value}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Experience Type</Form.Label>
                <Form.Select
                  name="experience_type"
                  {...formik.getFieldProps("experience_type")}
                  isInvalid={!!formik.errors.experience_type}
                >
                  <option value="">--select type--</option>
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.experience_type}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Profile Picture</p>
                  <Form.Label
                    htmlFor="profile"
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fe fe-upload me-1"></i>Upload Profile
                  </Form.Label>
                </div>
                <Form.Control
                  type="file"
                  name="profile"
                  id="profile"
                  accept=".jpg,.png"
                  hidden
                  onChange={handleProfileChange}
                />
                <div>
                  <img
                    src={profilePreview || ALLImages("face8")}
                    alt="Profile Preview"
                    className="img-fluid profile-ratio w-100 rounded shadow-sm"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col className="align-content-end text-end">
              <Button type="submit" className="mt-3" variant="primary">
                <i className="fe fe-check-circle me-1"></i>Submit
              </Button>
              <Button
                className="mt-3 ms-1"
                variant="danger"
                onClick={() => setIsAdding(false)}
              >
                <i className="fe fe-x me-1"></i>Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
