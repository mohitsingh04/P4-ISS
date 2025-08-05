import React, { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";
import ALLImages from "../../common/Imagesdata";
import Swal from "sweetalert2";

export default function VerifyEmailSwal() {
  const { email } = useParams();
  const [isRunning, setIsRunning] = useState(true);
  const [timer, setTimer] = useState(60);
  const [user, setUser] = useState("");
  const navigator = useNavigate();

  const getUsers = async () => {
    try {
      const response = await API.get("/users");
      const data = response.data;
      const filterdUser = data.filter((user) => user.email === email);
      setUser(filterdUser[0]);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };
  useEffect(() => {
    if (user?.verified === true) {
      navigator("/");
    }
  }, [user, navigator]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleResendMail = async () => {
    try {
      const response = await API.post(`/verify-email/${email}`);

      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: response.data.message,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimer(60);
      setIsRunning(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.response?.data?.error || "Something went wrong!",
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
            <Card
              className="wrap-login100 p-0"
              style={{ height: "300px", width: "500px" }}
            >
              <Card.Body>
                <div className="text-center" style={{ marginTop: "50px" }}>
                  <h4>Verify your email</h4>
                  <p className="my-4">
                    A verification email has been sent to your email address.
                    The verification email will expire after 24 hours.
                  </p>
                  {isRunning ? (
                    <p>
                      You can resend Email after{" "}
                      <span className="text-danger">{timer} sec</span>
                    </p>
                  ) : (
                    <p>
                      Didn’t receive an email?{" "}
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={handleResendMail}
                      >
                        <u>Resend the verification email</u>
                      </span>
                    </p>
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
        </Fragment>
      </div>
    </div>
  );
}
