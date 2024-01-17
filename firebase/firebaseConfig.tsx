// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbLZFd6wIWbk4XXI79hu_jrN2mTN78uec",
  authDomain: "audio-book-42d3f.firebaseapp.com",
  databaseURL: "https://audio-book-42d3f-default-rtdb.firebaseio.com",
  projectId: "audio-book-42d3f",
  storageBucket: "audio-book-42d3f.appspot.com",
  messagingSenderId: "1006763328529",
  appId: "1:1006763328529:web:2d1f7020d2316eab749db0",
  measurementId: "G-NR0EW7M1CM",
};

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
