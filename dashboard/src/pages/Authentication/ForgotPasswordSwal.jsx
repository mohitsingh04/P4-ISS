import React, { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { API } from "../../context/API";
import ALLImages from "../../common/Imagesdata";
import Swal from "sweetalert2";

export default function ForgotpasswordSwal() {
  const { email } = useParams();
  const [isRunning, setIsRunning] = useState(true);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (!isRunning || timer <= 0) return setIsRunning(false);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleResendMail = async () => {
    try {
      const response = await API.post(`/forgot-password`, { email: email });
      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text:
          response.data?.message ||
          "A password reset link has been sent to your email.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimer(60);
      setIsRunning(true);
    } catch (error) {
      console.error("Error resending email:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text:
          error.response?.data?.error ||
          "Something went wrong! Please try again later.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="login-img">
      <div className="page">
        <Fragment>
          <div className="col-login mx-auto text-center">
            <img
              src={ALLImages("ypLogoBig")}
              className="header-brand-img w-25"
              alt="Logo"
            />
          </div>

          <div className="container-login100">
            <Card
              className="wrap-login100 p-0"
              style={{ height: "300px", width: "500px" }}
            >
              <Card.Body>
                <div className="text-center" style={{ marginTop: "50px" }}>
                  <h4>Forgot Password</h4>
                  <p className="my-4">
                    A password reset email has been sent to your registered
                    email address. Follow the instructions in the email to reset
                    your password. This link will expire in 24 hours.
                  </p>
                  {isRunning ? (
                    <p>
                      You can request a new reset link in{" "}
                      <span className="text-danger">{timer} sec</span>.
                    </p>
                  ) : (
                    <p>
                      Didn’t receive the email?{" "}
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={handleResendMail}
                      >
                        <u>Click here to resend</u>
                      </span>
                    </p>
                  )}
                  <Link className="text-primary" to="/">
                    Back to Login
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Fragment>
      </div>
    </div>
  );
}
