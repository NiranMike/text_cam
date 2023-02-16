// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyBG8hV8RG2ee3ob0HtTljzxIQF9_tzYh9Y",
  authDomain: "text-cam-4741a.firebaseapp.com",
  projectId: "text-cam-4741a",
  storageBucket: "text-cam-4741a.appspot.com",
  messagingSenderId: "121540714903",
  appId: "1:121540714903:web:ad5f4e02048e2fb16064d2",
  measurementId: "G-DJY4DQJT0J",
  emulator: {
    host: 'localhost',
    port: 3000,
  }
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export { app, db, storage}
