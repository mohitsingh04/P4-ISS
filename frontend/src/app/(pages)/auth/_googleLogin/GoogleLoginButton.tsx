import React from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import API from "@/contexts/API";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

const GoogleLoginButton = () => {
  const successMessage = async (response: CredentialResponse) => {
    try {
      const res = await API.post("/profile/google/login", {
        token: response.credential,
      });

      console.log("Login successful:", res.data);
      window.location.reload();
    } catch (error) {
      console.error("Login error:", error);
      const err = error as AxiosError<{ error: string }>;
      toast.error(
        err.response?.data?.error || "Login failed. Please try again."
      );
    }
  };

  const errorMessage = () => {
    console.error("Google Login failed");
  };

  return <GoogleLogin onSuccess={successMessage} onError={errorMessage} />;
};

export default GoogleLoginButton;
