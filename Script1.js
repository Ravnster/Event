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

//Login#TEMP
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

//Klokka
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("tid").innerHTML = hr + ":" + min + ":" + sec;

    var months = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'];
    var days = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ". " + curDay + "." + curMonth + " " + curYear;
    document.getElementById("dato").innerHTML = date;

    var time = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}