import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { API } from "../../context/API";

const GoogleLoginButton = () => {
  const successMessage = async (response) => {
    try {
      const res = await API.post("/google", {
        token: response.credential,
      });

      console.log("Login successful:", res.data);
      window.location.reload();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const errorMessage = (error) => {
    console.error("Google Login failed:", error);
  };

  return <GoogleLogin onSuccess={successMessage} onError={errorMessage} />;
};

export default GoogleLoginButton;
