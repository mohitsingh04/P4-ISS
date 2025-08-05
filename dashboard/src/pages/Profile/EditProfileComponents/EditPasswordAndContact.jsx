import React, { Fragment, useState } from "react";
import { Card, Col, Form, ListGroup } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { API } from "../../../context/API";
import Swal from "sweetalert2";
import { ChangePasswordValidation } from "../../../context/ValidationSchemas";
import EditPasswordSkeleton from "../../../components/Skeletons/EditPasswordSkeleton";

export default function EditPasswordAndContact({ authUser, authLoading }) {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const formik = useFormik({
    initialValues: {
      id: objectId,
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: ChangePasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await API.post("/change-password", values);

        Swal.fire({
          title: "Password Changed Successfully!",
          text: response?.data?.message || "Your password has been updated.",
          icon: "success",
        }).then(() => {
          navigator("/dashboard/profile");
        });

        resetForm();
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.error || "Something went wrong",
          icon: "error",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Fragment>
      <Col xl={4} md={12} sm={12}>
        {!authLoading ? (
          !authUser?.isGoogleLogin && (
            <Card className="custom-card edit-password-section">
              <Card.Header>
                <div className="card-title">Edit Password</div>
              </Card.Header>
              <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                  <Form.Group className="position-relative">
                    <Form.Label htmlFor="current_password">
                      Current Password
                    </Form.Label>
                    <Form.Control
                      type={showCurrentPassword ? "text" : "password"}
                      name="current_password"
                      id="current_password"
                      value={formik.values.current_password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="******"
                      isInvalid={formik.errors.current_password}
                    />
                    <span
                      className="text-gray show-hide-change-password-1"
                      onClick={toggleCurrentPassword}
                    >
                      {showCurrentPassword ? (
                        <i className="fe fe-eye"></i>
                      ) : (
                        <i className="fe fe-eye-off"></i>
                      )}
                    </span>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.current_password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="position-relative">
                    <Form.Label htmlFor="new_password">New Password</Form.Label>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="new_password"
                      id="new_password"
                      value={formik.values.new_password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.errors.new_password}
                      placeholder="******"
                    />{" "}
                    <span
                      className="text-gray show-hide-change-password-1"
                      onClick={togglePassword}
                    >
                      {showPassword ? (
                        <i className="fe fe-eye"></i>
                      ) : (
                        <i className="fe fe-eye-off"></i>
                      )}
                    </span>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.new_password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="position-relative">
                    <Form.Label htmlFor="confirm_password">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      id="confirm_password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="******"
                      isInvalid={formik.errors.confirm_password}
                    />{" "}
                    <span
                      className="text-gray show-hide-change-password-1"
                      onClick={toggleConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <i className="fe fe-eye"></i>
                      ) : (
                        <i className="fe fe-eye-off"></i>
                      )}
                    </span>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.confirm_password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Link to={`/forgot-password/`} className="text-primary ms-1">
                    Forgot Password?
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary me-2"
                    disabled={formik.isSubmitting}
                  >
                    <i className="fe fe-lock me-1"></i>
                    {formik.isSubmitting ? "Updating..." : "Update"}
                  </button>
                </Card.Footer>
              </Form>
            </Card>
          )
        ) : (
          <EditPasswordSkeleton footer={true} />
        )}
        {!authLoading ? (
          <Card className="custom-card panel-theme">
            <Card.Header>
              <div className="float-start">
                <h3 className="card-title">Contact</h3>
              </div>
              <div className="clearfix"></div>
            </Card.Header>
            <Card.Body className="no-padding">
              <ListGroup className="no-margin">
                <ListGroup.Item>
                  <Link to="#" className="d-flex">
                    <i className="bi bi-envelope-fill list-contact-icons border text-center br-100"></i>
                    <span className="contact-icons ms-2 my-auto">
                      {authUser?.email}
                    </span>
                  </Link>
                </ListGroup.Item>
                {authUser?.address && (
                  <ListGroup.Item>
                    <Link to="#" className="d-flex">
                      <i className="fe fe-globe list-contact-icons border text-center br-100"></i>
                      <span className="contact-icons ms-2 my-auto">
                        {authUser?.address}
                      </span>
                    </Link>
                  </ListGroup.Item>
                )}
                {authUser?.mobile_no && (
                  <ListGroup.Item>
                    <Link to="#" className="d-flex">
                      <i className="fe fe-phone list-contact-icons border text-center br-100"></i>
                      <span className="contact-icons ms-2 my-auto">
                        {authUser?.mobile_no}
                      </span>
                    </Link>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        ) : (
          <EditPasswordSkeleton />
        )}
      </Col>
    </Fragment>
  );
}
