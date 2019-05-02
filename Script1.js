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
var userref = db.collection("users");


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


db.collection("users").where('inside', '==', true).orderBy("time").limit(25)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var navn = doc.data().navn;
            let milliseconds = doc.data().timeStamp;
            let currentDate = new Date(milliseconds);
            console.log(navn);
            let html = '';
            html += `<li onclick="()">${navn} time: ${currentDate}</li>`;
            document.getElementById('deltakere11').innerHTML += html;


            html.onclick = function () {
                console.log(id);
            };
            //var id = doc.id;
            //test(id);

        });

    })

/*function test(val) {
    var id = val;
    console.log(id);
}

*/
/*
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

*/