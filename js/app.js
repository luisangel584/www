// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpd8cnA3TqbBBvh0BT76ZF5U1K3QNzFHY",
    authDomain: "myapp-af1b0.firebaseapp.com",
    databaseURL: "https://myapp-af1b0.firebaseio.com",
    storageBucket: "myapp-af1b0.appspot.com",
    messagingSenderId: "480318302086"
};

firebase.initializeApp(config);

var trying = document.getElementById('trying');
var dbRef = firebase.database().ref().child('text');

dbRef.on('value', snap => trying.innerText = snap.val());