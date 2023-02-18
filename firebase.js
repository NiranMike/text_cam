// Import the functions you need from the SDKs you need
import {useEffect, useState} from "react";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyAcmQXHYNRL4EahSpEmLi41qH4NHLv0z98",
    authDomain: "text-cam-2.firebaseapp.com",
    projectId: "text-cam-2",
    storageBucket: "text-cam-2.appspot.com",
    messagingSenderId: "816198673874",
    appId: "1:816198673874:web:272e89b215b07de5cb140b"
};

let app = null;
let db = null;
let storage = null;

if (!getApps().length) {
    app = initializeApp(firebaseConfig, {projectId: "text-cam-2"});
    db = getFirestore(app);
    storage = getStorage(app);
}

export const useFirebase = () => {
    const [firebaseReady, setFirebaseReady] = useState(false);

    useEffect(() => {
        if (app && db && storage) {
            setFirebaseReady(true);
        }
    }, []);

    return {firebaseReady, app, db, storage};
};

