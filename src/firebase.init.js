// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBXaOmwowSWD8dVSLh7oRK1ZmhL9gm9kg",
  authDomain: "tourmaja-58385.firebaseapp.com",
  projectId: "tourmaja-58385",
  storageBucket: "tourmaja-58385.appspot.com",
  messagingSenderId: "476744737917",
  appId: "1:476744737917:web:1c04e6db89ff2188887d14",
  measurementId: "G-N6Y60BB54Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;

