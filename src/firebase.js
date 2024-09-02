// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8YqtfqOJYIg-7dKVewv3786wbThG8eA",
  authDomain: "personal-website-4d569.firebaseapp.com",
  projectId: "personal-website-4d569",
  storageBucket: "personal-website-4d569.appspot.com",
  messagingSenderId: "730159066870",
  appId: "1:730159066870:web:7b43d513889f88c5b7c6d7",
  measurementId: "G-V1JDZYY86T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
