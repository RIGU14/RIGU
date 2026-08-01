import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { auth } from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("ਕਿਰਪਾ ਕਰਕੇ Email ਅਤੇ Password ਭਰੋ.");
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful ✅");

        window.location.href = "index.html";

    } catch (error) {

        switch (error.code) {
            case "auth/invalid-email":
                alert("Email ਗਲਤ ਹੈ.");
                break;

            case "auth/invalid-credential":
                alert("Email ਜਾਂ Password ਗਲਤ ਹੈ.");
                break;

            case "auth/user-not-found":
                alert("ਇਹ Account ਮੌਜੂਦ ਨਹੀਂ.");
                break;

            case "auth/wrong-password":
                alert("Password ਗਲਤ ਹੈ.");
                break;

            default:
                alert(error.message);
        }

    }
});
