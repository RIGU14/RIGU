import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqw2NlWRRXftz5p9FSNh3GT7Z0tnLlKIc",
  authDomain: "rigu-shop.firebaseapp.com",
  projectId: "rigu-shop",
  storageBucket: "rigu-shop.firebasestorage.app",
  messagingSenderId: "38228750370",
  appId: "1:38228750370:web:3e45565af69af32f015a7b",
  measurementId: "G-4STGZZW7W9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const accountBtn = document.getElementById("accountBtn");
const avatar = document.getElementById("avatar");
const userName = document.getElementById("userName");

onAuthStateChanged(auth, (user) => {

  if (user) {

    const firstLetter = (user.displayName || user.email)
      .charAt(0)
      .toUpperCase();

    avatar.textContent = firstLetter;

    userName.textContent = "";

    accountBtn.onclick = () => {
      window.location.href = "account.html";
    };

  } else {

    avatar.innerHTML = `<i class="fa-regular fa-user"></i>`;

    userName.textContent = "Login";

    accountBtn.onclick = () => {
      window.location.href = "login.html";
    };

  }

});
