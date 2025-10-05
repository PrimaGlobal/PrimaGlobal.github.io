import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

// Pastikan user sudah login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html"; // Balik ke login kalau belum auth
  } else {
    document.getElementById("simpan").addEventListener("click", async () => {
      const barang = document.getElementById("barang").value;

      try {
        await addDoc(collection(db, "barang"), {
          email: user.email,
          barang: barang,
          tanggal: serverTimestamp()
        });

        document.getElementById("status").innerText = "Barang berhasil disimpan!";
      } catch (err) {
        document.getElementById("status").innerText = err.message;
      }
    });
  }
});
