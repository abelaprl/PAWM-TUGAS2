// Import the necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

// Add event listener for the logout button
document.getElementById('logout-form').addEventListener("click", function(event) {
  event.preventDefault();

  // Sign out with Firebase Auth
  signOut(auth)
    .then(() => {
      // Logout successful
      localStorage.removeItem('isLoggedIn'); // Clear login status in localStorage

      alert("Logged out successfully!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      // Handle logout errors
      const errorMessage = error.message;
      alert("Logout failed: " + errorMessage);
    });
});
