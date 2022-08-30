import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMBeYHDU_gN3dAu5jq5kvdiNm9Be56eQ",
  authDomain: "react-journal-3deca.firebaseapp.com",
  projectId: "react-journal-3deca",
  storageBucket: "react-journal-3deca.appspot.com",
  messagingSenderId: "1085767495174",
  appId: "1:1085767495174:web:92a070efcd54c7cf891d87",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseBD = getFirestore(FirebaseApp);
