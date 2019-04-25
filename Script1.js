// Initialize Firebase
var config = {
    apiKey: "AIzaSyBTVzW4gM0ScJuLwZTtNHlyW1TKRAJGMq0",
    authDomain: "lan-event.firebaseapp.com",
    databaseURL: "https://lan-event.firebaseio.com",
    projectId: "lan-event",
    storageBucket: "lan-event.appspot.com",
    messagingSenderId: "678873268993"
};
firebase.initializeApp(config);
const db = firebase.firestore();


var li;
var ol = document.getElementById('deltakere11');
//Login
function login() {
    var password = prompt("Please enter the password");
    var password1 = "123"
    if (password == password1 || password == "") {
        console.log("Riktig");
        window.location = "C:\\Users\\Ravnster\\source\\repos\\Web\\Home.html";
    } else {
        prompt("Feil Passowrd");
    }
}
//Nav Script
function openNav() {
    document.getElementById("mySidenav").style.width = "10vw";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


db.collection('users').where('crew', '==', true).get().then(
    function(userSnapshot) {
        userSnapshot.forEach(
            function (users) {
                var id = users.data().id;
                var navn = users.data().navn;
                var html = '';
                html += `<li>ID:${id} Navn: ${navn}</li>`;
                document.getElementById('deltakere11').innerHTML = html;

            });
    });

db.collection('users').where('utstiller', '==', true).get().then(
    function (userSnapshot) {
        userSnapshot.forEach(
            function (users) {
                var id = users.data().id;
                var navn = users.data().navn;
                var html = '';
                html += `<li>ID:${id} Navn: ${navn}</li>`;
                document.getElementById('utstiller').innerHTML = html;

            });
    });

