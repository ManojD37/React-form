// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJj1hQDhxGGn0fvZWFY55LhIlH4iWFzok",
  authDomain: "react2-e5237.firebaseapp.com",
  projectId: "react2-e5237",
  storageBucket: "react2-e5237.appspot.com",
  messagingSenderId: "97615811906",
  appId: "1:97615811906:web:cbfd7a6970268bced4a4db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export {app,db,auth,signInWithEmailAndPassword,createUserWithEmailAndPassword};