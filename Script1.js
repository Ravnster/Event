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
var database = firebase.database();
var db = firebase.database();

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
//Klokka/Dato
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("tid").innerHTML = hr + ":" + min + ":" + sec;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curDay + ". " + curWeekDay + "." + curMonth + " " + curYear;
    document.getElementById("dato").innerHTML = date;

    var time = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var ref = database.ref('Users');
ref.on('value', gotData, errData);
function gotData(data) {
    var DbBrukerID = data.val();
    var keys = Object.keys(DbBrukerID);
    var html = '';
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var name = DbBrukerID[k].Name;
        var id = DbBrukerID[k].ID;
        html += `<li>ID:${id} Navn: ${name}</li>`;
    }
    document.getElementById('deltakere11').innerHTML = html;
}



function errData(err) {
    console.log('Error!');
    console.log(err);

}

/*ref.collection('Users').where('Deltakere', '==', 'true').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        userdata(doc);
    })
});
*/
/*async function getCrew(crew = 'true') {
    const db = firebase.firestore();
    const collection = db.collection('lan-event')
        .doc('Users')
        .collection('Users');
    return[];
}
async function runQueries() {
    const crew = await getCrew('Crew');
    const deltaker = await getCrew('Deltaker');

    console.table(crew);
    console.table(deltaker);
}
runQueries();
*/
function findDeltaker() {
    database.collection("Users").where("Deltaker", "==", "true")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error: ", error);
        });
}