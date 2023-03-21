// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwMNtmD9OJfkzWWw1uBbqn_QL8xo8W5gY",
  authDomain: "jobify-124b2.firebaseapp.com",
  projectId: "jobify-124b2",
  storageBucket: "jobify-124b2.appspot.com",
  messagingSenderId: "749414962834",
  appId: "1:749414962834:web:a7187344fccf58ce1f384b",
  measurementId: "G-H2WSZX20C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;