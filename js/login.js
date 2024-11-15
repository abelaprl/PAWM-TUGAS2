  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

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

  const submit = document.getElementById('submit');

  submit.addEventListener("click", function(event){
    event.preventDefault();

    //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Log In Account..");
    window.location.href = "home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })
