import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkOKVkfCoWDMJqCNC4M-om6W6Iu0ODAao",
  authDomain: "yogibaba-57220.firebaseapp.com",
  projectId: "yogibaba-57220",
  storageBucket: "yogibaba-57220.firebasestorage.app",
  messagingSenderId: "958158136254",
  appId: "1:958158136254:web:8cbbc7b4842764d3384fef",
  measurementId: "G-T93TK5Y4TM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en"; // Set language

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
