//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyApP1sCyEhq5FTMKTqZHhxOYgD8X2iSjeM",
    authDomain: "kwitter-fe7bc.firebaseapp.com",
    databaseURL: "https://kwitter-fe7bc-default-rtdb.firebaseio.com",
    projectId: "kwitter-fe7bc",
    storageBucket: "kwitter-fe7bc.appspot.com",
    messagingSenderId: "701515357139",
    appId: "1:701515357139:web:1b4b1c4d0c1db760db2d26"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();