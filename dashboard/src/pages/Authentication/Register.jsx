import React, { Fragment, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ALLImages from "../../common/Imagesdata";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { API } from "../../context/API";
import Swal from "sweetalert2";
import { RegisterValidation } from "../../context/ValidationSchemas";
import GoogleLoginButton from "./GoogleLoginButton";

const Register = () => {
  const [registering, setRegistering] = useState(false);
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmPassword] = useState(false);
  const navigator = useNavigate();

  const handleRegister = async (values) => {
    setRegistering(true);
    try {
      const response = await API.post("/register", values);
      if (response) {
        setRegistering(false);
        Swal.fire({
          title: "Registration Successful!",
          text: response?.data?.message,
          icon: "success",
          confirmButtonColor: "#5e76a6",
        }).then((result) => {
          if (result.isConfirmed) {
            navigator(`/verify-email/send/${values.email}`);
          }
        });
      }
    } catch (error) {
      setRegistering(false);
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.error ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile_no: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: RegisterValidation,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: handleRegister,
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="col-login mx-auto mt-7">
        <div className="text-center">
          <img
            src={ALLImages("ypLogoBig")}
            className="header-brand-img w-25"
            alt=""
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
              <span className="login100-form-title"> Registration </span>

              <div className="wrap-input100 validate-input">
                <Form.Control
                  type="text"
                  className="input100"
                  name="name"
                  placeholder="Full name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="ri-user-fill" aria-hidden="true"></i>
                </span>
                {formik.errors.name && (
                  <small className="text-danger">{formik.errors.name}</small>
                )}
              </div>
              <div className="wrap-input100 validate-input">
                <Form.Control
                  type="email"
                  className="input100"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="ri-mail-fill" aria-hidden="true"></i>
                </span>
                {formik.errors.email && (
                  <small className="text-danger">{formik.errors.email}</small>
                )}
              </div>
              <div className="wrap-input100 validate-input">
                <PhoneInput
                  country={"in"}
                  value={formik.values.mobile_no}
                  onChange={(mobile_no) =>
                    formik.setFieldValue("mobile_no", mobile_no)
                  }
                  inputClass="input100 w-100 border"
                  inputStyle={{ height: "45px" }}
                  buttonClass="bg-white border"
                />
                {formik.errors.mobile_no && (
                  <small className="text-danger">
                    {formik.errors.mobile_no}
                  </small>
                )}
              </div>
              <div className="wrap-input100 validate-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  className="input100"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="ri-lock-fill" aria-hidden="true"></i>
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
                  <div className="text-danger">{formik.errors.password}</div>
                )}
              </div>
              <div className="wrap-input100 validate-input">
                <Form.Control
                  type={showConfirmedPassword ? "text" : "password"}
                  className="input100"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirm_password}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="ri-lock-fill" aria-hidden="true"></i>
                </span>
                <span
                  className="text-gray show-hide-password"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmedPassword ? (
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
              <label className="custom-control custom-checkbox">
                <input
                  className="form-check-input border-dark"
                  type="checkbox"
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <span className="custom-control-label ms-1">
                  Agree to the{" "}
                  <Link to="/pages/terms/" className="text-primary">
                    terms and policy
                  </Link>
                </span>
              </label>
              <div className="container-login100-form-btn">
                <Button
                  type="submit"
                  className="login100-form-btn"
                  disabled={!terms || registering}
                >
                  Register
                </Button>
              </div>
              <div className="text-center pt-3">
                <p className="text-dark mb-0">
                  Already have an account?
                  <Link to="/" className="text-primary ms-1">
                    Sign In
                  </Link>
                </p>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center my-3">
              <GoogleLoginButton />
            </div>
          </Card.Footer>
        </Card>
      </div>
    </Fragment>
  );
};

export default Register;
