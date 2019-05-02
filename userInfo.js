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
const docRef = db.collection("users").doc("2EQVhH4Kt1Untvm3JcL5");

docRef.get().then(function (doc) {
    console.log(doc.data())
    navn = doc.data().navn;
}).catch(function (error) {
    console.log("Error getting document:", error);
});


docRef.onSnapshot(function (user) {
    var radinfo = user.data().rad;
    var navninfo = user.data().navn;
    var seteinfo = user.data().sete;
    var tlfinfo = user.data().tlf;
    var ftlfinfo = user.data().ftlf;
    var erDeltakerinfo = user.data().deltaker;
    var erUtstillerinfo = user.data().utstiller;
    var erStreamerinfo = user.data().streamer;
    var erCrewinfo = user.data().crew;
    var inneellerute = user.data().inside;

    navn = `<li>Navn: ${navninfo} `;
    rad = `<li>Rad: ${radinfo}`;
    sete = `<li>Sete: ${seteinfo}`;
    tlf = `<li>Tlf: ${tlfinfo}`;
    ftlf = `<li>Foresatt Tlf: ${ftlfinfo}`;
    deltaker = `<li>Er Deltaker: ${erDeltakerinfo}`;
    utstiller = `<li>Er Utstiller: ${erUtstillerinfo}`;
    streamer = `<li>Er Streamer: ${erStreamerinfo}`;
    crew = `<li>Er Crew: ${erCrewinfo}`;
    navn2 = "Bruker info for: " + navninfo;

    document.getElementById('brukerNavn').innerHTML = navn2;
    document.getElementById('navn').innerHTML = navn;
    document.getElementById('rad').innerHTML = rad;
    document.getElementById('sete').innerHTML = sete;
    document.getElementById('tlf').innerHTML = tlf;
    document.getElementById('ftlf').innerHTML = ftlf;

    document.getElementById('erDeltaker').innerHTML = deltaker;
    document.getElementById('erUtstiller').innerHTML = utstiller;
    document.getElementById('erStreamer').innerHTML = streamer;
    document.getElementById('erCrew').innerHTML = crew;

    if (inneellerute == true) {
        document.getElementById('userStatus').innerHTML = '<li>Er inne i hallen</li>';
        document.getElementById('userStatus').style.color = "green";
    } else {
        document.getElementById('userStatus').innerHTML = '<li>Er ikke i hallen</li>';
        document.getElementById('userStatus').style.color = "red";

    }
})


function toggleUser() {
    docRef.get().then(function (user) {
        var inside = user.data().inside

        if (inside == true) {
            docRef.update({
                inside: false

            })
            document.getElementById('loggInniHall').innerHTML = 'Logg inn';
            document.getElementById('loggInniHall').style.backgroundColor =
            "green";

        }
        if (inside == false) {
            docRef.update({
                inside: true

            })
            document.getElementById('loggInniHall').innerHTML = 'Logg ut';
            document.getElementById('loggInniHall').style.backgroundColor =
            "red";

        }
        console.log(inside);
    })
}