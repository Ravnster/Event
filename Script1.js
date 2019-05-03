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
    .onSnapshot(function (userSnapshot) {
        userSnapshot.forEach(function (doc) {
            var navn = doc.data().navn;
            var date = doc.data().time;
            let html = '';
            html += `<li>${date}:  ${navn} </li>`;
            document.getElementById('siste25Inne').innerHTML += html;


            //var id = doc.id;
            //test(id);

        });
    })

db.collection("users").where('inside', '==', false).orderBy("time").limit(25)
    .onSnapshot(function (userSnapshot) {
        userSnapshot.forEach(function (doc) {
            var navn = doc.data().navn;
            var date = doc.data().time;
            let html = '';
            html += `<li>${date}:  ${navn} </li>`;
            document.getElementById('siste25Ute').innerHTML += html;


            //Prøver å få ID til hver bruker jeg trykker på for å bruke de i bruker.html
            html.addEventListener('click', (e) =>
            {
                let id = getAttribute('data-id');
                console.log(id);
            })
            //var id = doc.id;
            //test(id);

        });
    })
