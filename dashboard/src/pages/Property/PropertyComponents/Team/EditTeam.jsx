import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import ALLImages from "../../../../common/Imagesdata";
import { teamValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";

export default function EditTeam({ team, setIsEditing, getTeam }) {
  const [profilePreview, setProfilePreview] = useState(null);
  const [status, setStatus] = useState([]);

  const getStatus = async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data.filter((item) => item.name === "Team"));
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: team?.name || "",
      designation: team?.designation || "",
      experience_value: team?.experience?.split(" ")[0] || "",
      experience_type: team?.experience?.split(" ")[1] || "",
      profile: null,
      status: team?.status || "Active",
    },
    enableReinitialize: true,
    validationSchema: teamValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("property_id", values.property_id);
      formData.append("name", values.name);
      formData.append("designation", values.designation);
      formData.append(
        "experience",
        `${values.experience_value} ${values.experience_type}`
      );
      formData.append("status", values.status);
      if (values.profile) {
        formData.append("profile", values.profile);
      }

      try {
        const response = await API.patch(`/team/${team._id}`, formData);
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: response.data.message || "Team Updated Successfully",
        });
        setIsEditing(false);
        getTeam();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.error || "Failed To Update Team",
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
        <Card.Title>Edit Team</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Team Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Team name"
                  {...formik.getFieldProps("name")}
                  isInvalid={!!formik.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
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

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  {...formik.getFieldProps("status")}
                  isInvalid={!!formik.errors.status}
                >
                  <option value="" disabled selected>
                    --select status--
                  </option>
                  {status?.map((item) => (
                    <option value={item?.parent_status}>
                      {item?.parent_status}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.status}
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
                  accept=".jpg,.png"
                  id="profile"
                  hidden
                  onChange={handleProfileChange}
                />
                <div>
                  <img
                    src={
                      profilePreview
                        ? profilePreview
                        : team?.profile?.[0]
                        ? `${import.meta.env.VITE_MEDIA_URL}/${
                            team?.profile?.[0]
                          }`
                        : ALLImages("face8")
                    }
                    alt="Profile Preview"
                    className="profile-ratio w-100 rounded shadow-sm"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col className="align-content-end text-end">
              <Button type="submit" className="mt-3" variant="primary">
                <i className="fe fe-check-circle me-1"></i>Update
              </Button>
              <Button
                className="mt-3 ms-1"
                variant="danger"
                onClick={() => setIsEditing(false)}
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
