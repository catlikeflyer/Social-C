// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPCpfxBXCpjB9rPt7U2VxuqygGWl1bquQ",
  authDomain: "social-c-8710b.firebaseapp.com",
  projectId: "social-c-8710b",
  storageBucket: "social-c-8710b.appspot.com",
  messagingSenderId: "907896830180",
  appId: "1:907896830180:web:c50942cc4d39cc9da014f1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
