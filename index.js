import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "rigu-shop.firebaseapp.com",
  projectId: "rigu-shop",
  storageBucket: "rigu-shop.firebasestorage.app",
  messagingSenderId: "38228750370",
  appId: "1:38228750370:web:3e45565af69af32f015a7b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const accountBtn = document.getElementById("accountBtn");
const dropdown = document.getElementById("accountDropdown");
const userAvatar = document.getElementById("userAvatar");
const avatarLarge = document.getElementById("avatarLarge");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {

  if (user) {

    const firstLetter = user.email.charAt(0).toUpperCase();

    userAvatar.textContent = firstLetter;
    avatarLarge.textContent = firstLetter;

    userName.textContent = user.displayName || "RIGU User";
    userEmail.textContent = user.email;

    accountBtn.href = "#";

    accountBtn.onclick = (e) => {
      e.preventDefault();
      dropdown.classList.toggle("active");
    };

    logoutBtn.onclick = (e) => {
      e.preventDefault();

      if (confirm("Logout?")) {
        signOut(auth).then(() => {
          location.reload();
        });
      }
    };

    document.addEventListener("click", (e) => {
      if (!document.querySelector(".account-menu").contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });

  }

});
