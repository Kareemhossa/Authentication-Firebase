import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXgmFRK8K1I0tXnPyJAXu0Ivur2zDyu7U",
  authDomain: "auth-register-1727a.firebaseapp.com",
  projectId: "auth-register-1727a",
  storageBucket: "auth-register-1727a.appspot.com",
  messagingSenderId: "159212880206",
  appId: "1:159212880206:web:1203e52f385d4ac39a9e1f",
  measurementId: "G-XQVH9QCC79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
