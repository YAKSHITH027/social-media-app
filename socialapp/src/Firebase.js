import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSH8usXOhqRCQzKdB9GumaN6J3wUYXSdo",
  authDomain: "social-media-60f38.firebaseapp.com",
  projectId: "social-media-60f38",
  storageBucket: "social-media-60f38.appspot.com",
  messagingSenderId: "733873781831",
  appId: "1:733873781831:web:609bbfd6da7ea07f330562",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
