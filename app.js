import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Ganti dengan konfigurasi Firebase punyamu
const firebaseConfig = {
  apiKey: "AIzaSyAkp8I198vuqDcENx81rguJZyPtUtlzoG0",
  authDomain: "globalprimaniaga-login.firebaseapp.com",
  projectId: "globalprimaniaga-login",
  storageBucket: "globalprimaniaga-login.firebasestorage.app",
  messagingSenderId: "1039305855159",
  appId: "1:1039305855159:web:df717796a3d46879e0bd32",
  measurementId: "G-8TZVJ7RXBQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("login").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html"; // Redirect setelah login berhasil
  } catch (err) {
    document.getElementById("status").innerText = "Login gagal: " + err.message;
  }
});
