// Import the necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUxs8ii-4J5Dt-V98vFFiLMgsfKxNmcnc",
  authDomain: "login-8e066.firebaseapp.com",
  projectId: "login-8e066",
  storageBucket: "login-8e066.firebasestorage.app",
  messagingSenderId: "415692638126",
  appId: "1:415692638126:web:e4ccd1342e23c839a76a3f",
  databaseURL: "https://virtual-lab-limit-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('submit').addEventListener("click", function(event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign in with Firebase Auth
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;

      // Set login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');

      alert("Logged in successfully!");
      window.location.href = "home.html";
    })
    .catch((error) => {
      // Handle login errors
      const errorMessage = error.message;
      alert("Login failed: " + errorMessage);
    });
});
