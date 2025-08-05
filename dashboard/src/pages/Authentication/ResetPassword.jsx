import React, { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import { ResetPasswordValidation } from "../../context/ValidationSchemas";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const { token } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    const VerifyToken = async () => {
      try {
        const response = await API.get(`/reset/${token}`);
        Swal.fire({
          icon: "success",
          title: "Verified",
          text: response?.data?.message || "Something went wrong!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.error || "Something went wrong!",
        }).then(() => {
          navigator("/");
        });
      }
    };
    VerifyToken();
  }, [token, navigator]);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
      token,
    },
    validationSchema: ResetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await API.post("/reset", values);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Password reset successfully!",
        }).then(() => {
          navigator("/");
        });
      } catch (error) {
        setApiError(error.response?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <Fragment>
      <div className="col-login mx-auto text-center">
        <img
          src={ALLImages("ypLogoBig")}
          className="header-brand-img w-25"
          alt="Logo"
        />
      </div>
      <div className="container-login100">
        <Card className="wrap-login100 p-0">
          <Card.Body>
            <Form
              className="login100-form validate-form"
              onSubmit={formik.handleSubmit}
            >
              <span className="login100-form-title">Reset Password</span>
              {apiError && (
                <p className="text-danger text-center alert alert-danger fw-bold">
                  {apiError}
                </p>
              )}
              <div className="wrap-input100 validate-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  className="input100"
                  name="new_password"
                  placeholder="New Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.new_password}
                />
                <span className="symbol-input100">
                  <i className="ri-lock-fill"></i>
                </span>
                <span
                  className="text-gray show-hide-password"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <i className="fe fe-eye"></i>
                  ) : (
                    <i className="fe fe-eye-off"></i>
                  )}
                </span>
                {formik.errors.new_password && (
                  <div className="text-danger">
                    {formik.errors.new_password}
                  </div>
                )}
              </div>
              <div className="wrap-input100 validate-input">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  className="input100"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirm_password}
                />
                <span className="symbol-input100">
                  <i className="ri-lock-fill"></i>
                </span>
                <span
                  className="text-gray show-hide-password"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <i className="fe fe-eye"></i>
                  ) : (
                    <i className="fe fe-eye-off"></i>
                  )}
                </span>
                {formik.errors.confirm_password && (
                  <div className="text-danger">
                    {formik.errors.confirm_password}
                  </div>
                )}
              </div>
              <div className="container-login100-form-btn">
                <Button
                  type="submit"
                  className="login100-form-btn"
                  disabled={formik.isSubmitting}
                >
                  Reset Password
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}
