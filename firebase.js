// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Services
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCqw2NlWRRXftz5p9FSNh3GT7Z0tnLlKIc",
  authDomain: "rigu-shop.firebaseapp.com",
  projectId: "rigu-shop",
  storageBucket: "rigu-shop.firebasestorage.app",
  messagingSenderId: "38228750370",
  appId: "1:38228750370:web:3e45565af69af32f015a7b",
  measurementId: "G-4STGZZW7W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
