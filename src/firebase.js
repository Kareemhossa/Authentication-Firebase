import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyr2zDyu7U",
  authDomain: "auth-regebaseapp.com",
  projectId: "auth-reg",
  storageBucket: "auth-register-1pspot.com",
  messagingSenderId: "159212880206",
  appId: "1:15921d4ac39a9e1f",
  measurementId: "G-XQVH9QCC79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
