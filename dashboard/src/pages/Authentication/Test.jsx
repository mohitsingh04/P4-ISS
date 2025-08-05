import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./FirebaseAuth"; // Import from firebase.js
// import { toast } from "react-hot-toast"; // For notifications

const OTPLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Function to send OTP
  const sendOTP = async () => {
    if (!phone) return toast.error("Enter a valid phone number");

    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => sendOTP(),
        }
      );

      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP Sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    if (!otp) return toast.error("Enter the OTP");

    try {
      await confirmationResult.confirm(otp);
      toast.success("Phone verified successfully!");
      // Here, you can send user details to the backend for further processing
    } catch (error) {
      toast.error("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Enter phone (+1234567890)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2"
      />
      <button onClick={sendOTP} className="bg-blue-500 text-white p-2 rounded">
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={verifyOTP}
        className="bg-green-500 text-white p-2 rounded"
      >
        Verify OTP
      </button>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OTPLogin;
