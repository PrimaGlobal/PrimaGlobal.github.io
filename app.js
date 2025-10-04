// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Konfigurasi dari Firebase Project
const firebaseConfig = {
  apiKey: "AIzaSyAkp8I198vuqDcENx81rguJZyPtUtlzoG0",
  authDomain: "globalprimaniaga-login.firebaseapp.com",
  projectId: "globalprimaniaga-login",
  storageBucket: "globalprimaniaga-login.firebasestorage.app",
  messagingSenderId: "1039305855159",
  appId: "1:1039305855159:web:df717796a3d46879e0bd32",
  measurementId: "G-8TZVJ7RXBQ"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
document.getElementById("signup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => document.getElementById("status").innerText = "Signup berhasil!")
    .catch(err => document.getElementById("status").innerText = err.message);
});

// Login
document.getElementById("login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => document.getElementById("status").innerText = "Login berhasil!")
    .catch(err => document.getElementById("status").innerText = err.message);
});
