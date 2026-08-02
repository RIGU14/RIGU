import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

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
const userAvatar = document.getElementById("userAvatar");
const accountName = document.getElementById("accountName");

onAuthStateChanged(auth, (user) => {

  if (user) {

    const name = user.displayName || user.email;
    const firstLetter = name.charAt(0).toUpperCase();

    userAvatar.textContent = firstLetter;
    accountName.textContent = name;

    accountBtn.href = "account.html";

  } else {

    userAvatar.innerHTML = `<i class="fa-regular fa-user"></i>`;
    accountName.textContent = "Login";

    accountBtn.href = "login.html";

  }

});
