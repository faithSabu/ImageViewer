// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhYcMpLYtG23avhTwrpP6MTQlPG39MUU",
  authDomain: "imgdisplay-b2583.firebaseapp.com",
  projectId: "imgdisplay-b2583",
  storageBucket: "imgdisplay-b2583.appspot.com",
  messagingSenderId: "759836548159",
  appId: "1:759836548159:web:db2e2a922ea5e871f7ec8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);