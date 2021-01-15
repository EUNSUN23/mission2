import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAsK7GUA9nWSoGbqgRDJegJeosrHp4yiII",
  authDomain: "react-mission-caab8.firebaseapp.com",
  databaseURL: "https://react-mission-caab8-default-rtdb.firebaseio.com",
  projectId: "react-mission-caab8",
  storageBucket: "react-mission-caab8.appspot.com",
  messagingSenderId: "748037763397",
  appId: "1:748037763397:web:b92688b103c56816014e2c",
  measurementId: "G-CNTCDZ0XTT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
