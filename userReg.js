
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

    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();

    var days = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'];
    var curWeekDay = days[today.getDay()];
    var date = curWeekDay + " " + hr + ":" + min;
    console.log(date);


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
        time: date

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



