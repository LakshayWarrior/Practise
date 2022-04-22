
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB9WIQAbWXn4vEs2646_3k7kIcSWuyNONQ",
    authDomain: "practise-9e4f1.firebaseapp.com",
    databaseURL: "https://practise-9e4f1-default-rtdb.firebaseio.com",
    projectId: "practise-9e4f1",
    storageBucket: "practise-9e4f1.appspot.com",
    messagingSenderId: "788536100134",
    appId: "1:788536100134:web:e2307f0497edd8f6d5ade7"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}