import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import ALLImages from "../../common/Imagesdata";

const Lockscreen = () => {

  return (
    <Fragment>
      <div className="col-login mx-auto mt-7">
        <div className="text-center">
          <img src={ALLImages('logo2')} className="header-brand-img" alt="" />
        </div>
      </div>
      <div className="container-login100">
        <Card className="wrap-login100 p-0">
          <Card.Body>
            <Form className="login100-form validate-form ">
              <div className="text-center mb-4">
                <img src={ALLImages('face8')} alt="lockscreen image" className="avatar avatar-xxl rounded-circle mb-2" />
                <h5 className="fs-18">Elizabeth Dyer</h5>
              </div>
              <div className="wrap-input100 validate-input" data-bs-validate="Password is required">
                <input type="password" className="form-control input100" name="email" id="input" placeholder="Password" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="ri-lock-fill" aria-hidden="true"></i>
                </span>
              </div>
              <div className="container-login100-form-btn">
                <Link to={`${import.meta.env.BASE_URL}dashboard/`} className="login100-form-btn btn-primary">Unlock </Link>
              </div>
              <div className="text-center pt-2">
                <span className="txt1"> I Forgot </span>
                <Link className="txt2" to={`${import.meta.env.BASE_URL}authentication/forgotpassword/`}>  Give me Hint </Link>
              </div>
            </Form>
          </Card.Body>
          <div className="card-footer border-top">
            <div className="d-flex justify-content-center my-3">
              <Link to="#" className="social-login  text-center">
                <i className="ri-google-fill"></i>
              </Link>
              <Link to="#" className="social-login  text-center mx-4">
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link to="#" className="social-login  text-center">
                <i className="ri-twitter-x-fill"></i>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  )
}

export default Lockscreen