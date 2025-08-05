import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "./FirebaseAuth";

const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: () => {
        // reCAPTCHA solved - allow send OTP
      },
    },
    auth
  );
};

export const sendOtp = async (phoneNumber) => {
  console.log(phoneNumber);
  setupRecaptcha();

  const appVerifier = window.recaptchaVerifier;

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    window.confirmationResult = confirmationResult;
    console.log("OTP Sent");
  } catch (error) {
    console.error("SMS not sent", error);
  }
};
