import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import ALLImages from "../../common/Imagesdata";
import { API } from "../../context/API";
import { EmailValidation } from "../../context/ValidationSchemas";

const Forgotpassword = () => {
  const navigator = useNavigate();
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: EmailValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await API.post("/forgot-password", values);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        }).then(() => {
          navigator(`/forgot-password/send/${values.email}`);
        });
        resetForm();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "Something went wrong",
        });
      }
      setSubmitting(false);
    },
  });

  return (
    <Fragment>
      <div className="col-login mx-auto mt-7">
        <div className="text-center">
          <img
            src={ALLImages("ypLogoBig")}
            className="header-brand-img w-25"
            alt="Logo"
          />
        </div>
      </div>
      <div className="container-login100">
        <Row>
          <div className="col col-login mx-auto">
            <Form className="card shadow-none" onSubmit={formik.handleSubmit}>
              <Card.Body>
                <div className="text-center">
                  <span className="login100-form-title"> Forgot Password </span>
                  <p className="text-muted">
                    Enter the email address registered on your account
                  </p>
                </div>
                <div className="pt-3" id="forgot">
                  <Form.Group className="mb-3">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    )}
                  </Form.Group>
                  <div className="submit">
                    <Button
                      type="submit"
                      className="login100-form-btn"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-dark mb-0">
                      Forgot It?
                      <Link className="text-primary ms-1" to={`/`}>
                        Send me Back
                      </Link>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <div className="card-footer border-top">
                <div className="d-flex justify-content-center my-3">
                  <Link to="#" className="social-login text-center">
                    <i className="ri-google-fill"></i>
                  </Link>
                  <Link to="#" className="social-login text-center mx-4">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                  <Link to="#" className="social-login text-center">
                    <i className="ri-twitter-x-fill"></i>
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </Row>
      </div>
    </Fragment>
  );
};

export default Forgotpassword;
