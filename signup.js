import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword
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

document.getElementById("signupBtn").addEventListener("click", () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
.then(() => {

alert("Account Created Successfully ✅");

window.location.href = "login.html";

})
.catch((error) => {

alert(error.message);

});

});
