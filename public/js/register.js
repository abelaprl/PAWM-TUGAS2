  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
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

  // tambahan
  const storage = getStorage(app);
  const db = getFirestore(app);

  submit.addEventListener("click", async function(event){
    event.preventDefault();

    //inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const profilePicFile = document.getElementById('profile-pic').files[0];
  
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
}

try {
  // Create user in Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const userId = user.uid;

  // Upload profile picture to Firebase Storage
  const profilePicRef = ref(storage, `profile_pictures/${userId}`);
  await uploadBytes(profilePicRef, profilePicFile);

  // Get the URL of the uploaded image
  const profilePicUrl = await getDownloadURL(profilePicRef);

  // Save user info to Firestore
  await setDoc(doc(db, "users", userId), {
      name: name,
      email: email,
      profilePicUrl: profilePicUrl
  });

  alert("Account created successfully!");
  window.location.href = "index.html";
} catch (error) {
  const errorMessage = error.message;
  alert(errorMessage);
}
});
