import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAVzhLG1nWveWXF1UN6VPuVwc6Nl0Tbys",
  authDomain: "react-ecommerce-940bc.firebaseapp.com",
  projectId: "react-ecommerce-940bc",
  storageBucket: "react-ecommerce-940bc.appspot.com",
  messagingSenderId: "311335514305",
  appId: "1:311335514305:web:dd90d98d9918f60234a440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);