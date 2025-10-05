import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Ganti dengan konfigurasi Firebase punyamu
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
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
