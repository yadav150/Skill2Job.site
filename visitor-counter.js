document.addEventListener("DOMContentLoaded", function() {
  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyBCdSPOM47RDoQpH2uIOlGpphS6RAiyWao",
    authDomain: "skill2jobvisitcount.firebaseapp.com",
    databaseURL: "https://skill2jobvisitcount-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "skill2jobvisitcount",
    storageBucket: "skill2jobvisitcount.firebasestorage.app",
    messagingSenderId: "765089407089",
    appId: "1:765089407089:web:a410facdd7dfb6e1fbbbd0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Reference to the counter
  const counterRef = db.ref("visitor-counter");

  // Increment counter atomically
  counterRef.transaction(current => (current || 0) + 1);

  // Update the counter on page
  counterRef.on("value", snapshot => {
    const counterElement = document.getElementById("visitor-count");
    if(counterElement) counterElement.textContent = snapshot.val();
  });
});
