// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO8afo4ptucrbkALszUX80iNEUtE-HMzk",
  authDomain: "forum-crud.firebaseapp.com",
  projectId: "forum-crud",
  storageBucket: "forum-crud.appspot.com",
  messagingSenderId: "957346661569",
  appId: "1:957346661569:web:8f3cee0055fb7ec7a80040",
  measurementId: "G-BFMZSXWY75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);