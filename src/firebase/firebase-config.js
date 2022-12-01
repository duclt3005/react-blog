// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJtrgns4VkTYh6t6Hh773S1YAbGL-mko",
  authDomain: "react-blog-af8f6.firebaseapp.com",
  projectId: "react-blog-af8f6",
  storageBucket: "react-blog-af8f6.appspot.com",
  messagingSenderId: "336192501141",
  appId: "1:336192501141:web:92ccd7c5cb87112285f29c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
