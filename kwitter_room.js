
const firebaseConfig = {
      apiKey: "AIzaSyAPraEyg7_vcsk_1l042mxWGk5rauLUZgo",
      authDomain: "kwitter-1cb58.firebaseapp.com",
      databaseURL: "https://kwitter-1cb58-default-rtdb.firebaseio.com",
      projectId: "kwitter-1cb58",
      storageBucket: "kwitter-1cb58.appspot.com",
      messagingSenderId: "1027023983156",
      appId: "1:1027023983156:web:e98f98ac6d450505bdf061"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
