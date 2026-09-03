// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "APKA_API_KEY",
  authDomain: "APKA_AUTH_DOMAIN",
  projectId: "APKA_PROJECT_ID",
  storageBucket: "APKA_STORAGE_BUCKET",
  messagingSenderId: "APKA_MESSAGING_SENDER_ID",
  appId: "APKA_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);