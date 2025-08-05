import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { API } from "../../context/API";

export default function VerifyEmailConfirm() {
  const navigator = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await API.get(`/verify-email/${token}`);
        if (response.data?.message) {
          setVerified(true);
          Swal.fire({
            title: "Email Verified!",
            text: response.data.message,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => navigator("/"));
        } else {
          throw new Error(response.data?.error || "Invalid token.");
        }
      } catch (error) {
        setError(error?.response?.data?.error || "Something went wrong.");
        Swal.fire({
          title: "Verification Failed!",
          text: error.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "OK",
        }).then(() => {
          setTimeout(() => {
            navigator("/");
          }, 5000);
        });
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigator]);

  return (
    <div className="login-img">
      <div className="page">
        <div className="position-absolute top-50 start-50 translate-middle text-light text-center">
          {loading ? (
            <h3>Verifying...</h3>
          ) : verified ? (
            <h1>Email Verified Successfully!</h1>
          ) : (
            <h1 className="bg-danger alert fs-1">
              {error || "Invalid or Expired Token!"}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
