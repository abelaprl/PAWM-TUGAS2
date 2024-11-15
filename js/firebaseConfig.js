import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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
export const auth = getAuth(app);
export const database = getDatabase(app);
