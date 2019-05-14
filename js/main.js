function menu() {
    mainContentDiv = document.getElementById('staticContent');
    mainContentDiv.innerHTML = `
    <div class="wrapper">
        <div class="box" id="boxheader">Home</div>
        <div class="boxmenu">
            <div id="before"></div>
            <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; </span>
        </div>
        <div id="after">
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a id="myLink" title="Click to do something"
                   href="#" onclick="home()" ;return false;">Home</a>

                <a id="myLink" title="Click to do something"
                   href="#" onclick="deltaker();return false;">Deltaker</a>
                <a href="Streamere.html">Streamere</a>
                <a href="utstillere.html">Utstillere</a>
                <a href="crew.html">Crew</a>

                <br /><br /><br /><br /><br /><br />
                <a href="admin.html">Admin</a>
            </div>
        </div>

        <div id="boxcontent">

        </div>




    </div>
`


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

function openNav() {
    document.getElementById("mySidenav").style.width = "8vw";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}