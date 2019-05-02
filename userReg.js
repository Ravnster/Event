
function submit() {
    var id = document.getElementById("id").value;
    var navn = document.getElementById("navn").value;
    var tlf = document.getElementById("tlf").value;
    var rad = document.getElementById("rad").value;
    var sete = document.getElementById("sete").value;
    var deltaker = document.getElementById("deltaker").checked;
    var streamer = document.getElementById("streamer").checked;
    var utstiller = document.getElementById("utstiller").checked;
    var crew = document.getElementById("crew").checked;

    db.collection('users').add({
        id: id,
        navn: navn,
        tlf: tlf,
        rad: rad,
        sete: sete,
        deltaker: deltaker,
        streamer: streamer,
        utstiller: utstiller,
        inside: false,
        crew: crew,
        time: firebase.firestore.Timestamp.fromDate(new Date())

    })
        .then(function () {
            console.log("Skrevet");
        })
        .catch(function () {
            console.errer("Error", error);
        });
    resetForm();
}
function resetForm() {
    document.getElementById("userReg").reset();
}

