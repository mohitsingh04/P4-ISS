import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { useFormik } from "formik";
import ALLImages from "../../common/Imagesdata";
import { API } from "../../context/API";
import { LoginValidation } from "../../context/ValidationSchemas";
import GoogleLoginButton from "./GoogleLoginButton";

const Login = () => {
  const navigator = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await API.post("/login", values);
        if (response) {
          navigator(`/dashboard/`);
          window.location.reload();
        }
      } catch (error) {
        if (error.response?.data?.flag === "UnVerified") {
          navigator(`/verify-email/send/${values.email}`);
        }
        setErrors({
          apiError: error.response?.data?.error || "Login failed",
        });
      }
      setSubmitting(false);
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Fragment>
      <div className="col-login mx-auto">
        <div className="text-center">
          <img
            src={ALLImages("ypLogoBig")}
            className="header-brand-img w-25"
            alt="Logo"
          />
        </div>
      </div>
      <div className="container-login100">
        <Card className="wrap-login100 p-0">
          <Card.Body>
            <Form
              className="login100-form validate-form"
              onSubmit={formik.handleSubmit}
            >
              <span className="login100-form-title"> Login </span>

              {formik.errors.apiError && (
                <p className="text-danger text-center alert alert-danger fw-bold">
                  {formik.errors.apiError}
                </p>
              )}
              <div className="wrap-input100 validate-input">
                <Form.Control
                  type="text"
                  className="input100"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  {" "}
                  <i className="ri-mail-fill" aria-hidden="true"></i>{" "}
                </span>
                {formik.errors.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
              </div>

              <div className="wrap-input100 validate-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  className="input100"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  {" "}
                  <i className="ri-lock-fill" aria-hidden="true"></i>{" "}
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
                {formik.errors.password && (
                  <p className="text-danger">{formik.errors.password}</p>
                )}
              </div>

              <div className="text-end pt-1">
                <p className="mb-0">
                  <Link to={`/forgot-password/`} className="text-primary ms-1">
                    Forgot Password?
                  </Link>
                </p>
              </div>

              <div className="container-login100-form-btn">
                <Button
                  type="submit"
                  className="login100-form-btn"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </div>

              {/* Register Link */}
              <div className="text-center pt-3">
                <p className="text-dark mb-0">
                  Not a member?
                  <Link
                    to={`/register/`}
                    className="text-primary ms-1 d-inline-flex"
                  >
                    Create an Account
                  </Link>
                </p>
              </div>
            </Form>
          </Card.Body>

          {/* Social Login */}
          <div className="card-footer border-top">
            <div className="d-flex justify-content-center my-3">
              <GoogleLoginButton />
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Login;
