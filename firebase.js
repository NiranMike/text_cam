import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyAcmQXHYNRL4EahSpEmLi41qH4NHLv0z98",
    authDomain: "text-cam-2.firebaseapp.com",
    projectId: "text-cam-2",
    storageBucket: "text-cam-2.appspot.com",
    messagingSenderId: "816198673874",
    appId: "1:816198673874:web:272e89b215b07de5cb140b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export {app, db, storage}