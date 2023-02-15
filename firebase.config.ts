// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBG8hV8RG2ee3ob0HtTljzxIQF9_tzYh9Y",
  authDomain: "text-cam-4741a.firebaseapp.com",
  projectId: "text-cam-4741a",
  storageBucket: "text-cam-4741a.appspot.com",
  messagingSenderId: "121540714903",
  appId: "1:121540714903:web:ad5f4e02048e2fb16064d2",
  measurementId: "G-DJY4DQJT0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);