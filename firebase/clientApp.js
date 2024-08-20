import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfA3tYkOdMMu_s9s2t5UzUBYUcuA3z8-c",
  authDomain: "project-management-2d16a.firebaseapp.com",
  projectId: "project-management-2d16a",
  storageBucket: "project-management-2d16a.appspot.com",
  messagingSenderId: "647377205638",
  appId: "1:647377205638:web:c8947a48c2122dce67d407",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
