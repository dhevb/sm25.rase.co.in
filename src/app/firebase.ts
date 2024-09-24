// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { connectFirestoreEmulator } from "firebase/firestore";
import { connectStorageEmulator } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB6FJEBNv-4QtqQ4FR3-Jj6Y0r1sVu030",
  authDomain: "dhe-sm.firebaseapp.com",
  projectId: "dhe-sm",
  storageBucket: "dhe-sm.appspot.com",
  messagingSenderId: "59719303159",
  appId: "1:59719303159:web:b2917b02e61eb1f76c38f2",
  measurementId: "G-Q7GLHKCFZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };
