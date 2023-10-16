// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6ivq_L41vGS0BFcw06djNmgq6rj0fZ8",
  authDomain: "movie-bag.firebaseapp.com",
  projectId: "movie-bag",
  storageBucket: "movie-bag.appspot.com",
  messagingSenderId: "716363599419",
  appId: "1:716363599419:web:c62641de91ca5e2fc4561e",
  measurementId: "G-JFBZCRETM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();