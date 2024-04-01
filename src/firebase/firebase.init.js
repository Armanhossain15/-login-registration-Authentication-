// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2VEJOSiUZE3DtLR2LzyEe0-SsA5Q4n_U",
  authDomain: "login-register-auth-2c097.firebaseapp.com",
  projectId: "login-register-auth-2c097",
  storageBucket: "login-register-auth-2c097.appspot.com",
  messagingSenderId: "1088215247294",
  appId: "1:1088215247294:web:96fe52f9aa01f40d58f1ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth