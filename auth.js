// auth.js

// Firebase Config (your project details)
const firebaseConfig = {
    apiKey: "AIzaSyDcmamLjhZh8x6wRAiDeEtuB_Mky2tCOkI",
    authDomain: "lottery-e05d5.firebaseapp.com",
    databaseURL: "https://lottery-e05d5-default-rtdb.firebaseio.com",
    projectId: "lottery-e05d5",
    storageBucket: "lottery-e05d5.firebasestorage.app",
    messagingSenderId: "357588305425",
    appId: "1:357588305425:web:d1608265a0743fdda693b0",
    measurementId: "G-GE938RN0DB"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Login function
  function login(email, password, callback) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => callback(true))
      .catch(err => {
        alert("Login failed: " + err.message);
        callback(false);
      });
  }
  
  // Logout function
  function logout() {
    auth.signOut().then(() => {
      window.location.href = "login.html";
    });
  }
  
  // Protect admin page
  function protectAdminPage() {
    auth.onAuthStateChanged(user => {
      if (!user) {
        window.location.href = "login.html";
      }
    });
  }
  
  // Redirect logged in users (for login.html)
  function redirectIfLoggedIn() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.location.href = "admin.html";
      }
    });
  }
  