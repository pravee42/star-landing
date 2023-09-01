import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmw2u6WgoUKFkTeHaoUQqePXRbvCk_XAA",
  authDomain: "star-408ca.firebaseapp.com",
  databaseURL: "https://star-408ca-default-rtdb.firebaseio.com",
  projectId: "star-408ca",
  storageBucket: "star-408ca.appspot.com",
  messagingSenderId: "522137904714",
  appId: "1:522137904714:web:9cc00d1eaeba110681a8b3",
  measurementId: "G-7HB8Q61QDY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
