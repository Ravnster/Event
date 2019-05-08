
let id = location.hash.split('id=')[1]
const docRef1 = db.collection("users").doc(id);

docRef1.onSnapshot(function (user) {
    var radinfo = user.data().rad;
    var navninfo = user.data().navn;
    var nickinfo = user.data().nick;
    var seteinfo = user.data().sete;
    var tlfinfo = user.data().tlf;
    var ftlfinfo = user.data().ftlf;
    var IdInfo = user.data().id;
    var erDeltakerinfo = user.data().deltaker;
    var erUtstillerinfo = user.data().utstiller;
    var erStreamerinfo = user.data().streamer;
    var erCrewinfo = user.data().crew;
    var inneellerute = user.data().inside;
    document.getElementById('mainContentUser').innerHTML =
        `
<div class="wrapper">
	<div class="box header" id="brukerNavn">Bruker info for ${navninfo}(${IdInfo})<button class="button" onclick="edit()">Edit</button></div>
	<div class="boxmenu">
		<div id="before"></div>
		<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; </span>
	</div>
	<div id="after">
		<div id="mySidenav" class="sidenav">
			<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
			<a href="Home.html">Home</a>
			<a href="deltakere.html">Deltakere</a>
			<a href="Streamere.html">Streamere</a>
			<a href="utstillere.html">Utstillere</a>
			<a href="crew.html">Crew</a>

			<br /><br /><br /><br /><br /><br />
			<a href="admin.html">Admin</a>
		</div>
	</div>

	<div class="box content">
		<div id="tid-dato">
			<div id="tid"></div>
			<div id="dato"></div>
		</div>
		<div id="userInfoWrapper">

				<div id="border">
<div class="span">Bruker info</div>
					<div id="userInfo">
						<ul id="navn">Navn:             </ul>
						<ul id="nick">Nick:             </ul>
						<ul id="rad">Rad:                </ul>
						<ul id="sete">Sete:              </ul>
						<ul id="tlf">Tlf.:        </ul>
						

					</div>
					<div id="test1337">
						<ul id="navn">${navninfo}</ul>
						<ul id="nick"> ${nickinfo}</ul>
						<ul id="rad"> ${radinfo}</ul>
						<ul id="sete">${seteinfo}</ul>
						<ul id="tlf">${tlfinfo}</ul>
						
					</div>
				</div>
				<div id="userState">
					<ul id="erDeltaker">Er Deltaker: ${erDeltakerinfo}</ul>
					<ul id="erUtstiller">Er Utstiller: ${erUtstillerinfo}</ul>
					<ul id="erStreamer">Er Streamer: ${erStreamerinfo}</ul>
					<ul id="erCrew">Er Crew: ${erCrewinfo}</ul>

				</div>


			<div id="userStatus">Er inne: ${inneellerute}</div>

			<div id="userManualReg">
				<div id="loggInniHall" onclick="toggleUser()"> Logg </div>
			</div>
		</div>
	</div>



</div>


`;
}
)
function toggleUser() {
    docRef1.get().then(function (user) {
        var inside = user.data().inside;
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();

        var days = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'];
        var curWeekDay = days[today.getDay()];
        var date = curWeekDay + " " + hr + ":" + min;

        docRef1.update({
            time: date

        })

        if (inside == true) {

            docRef1.update({
                inside: false

            })
            document.getElementById('loggInniHall').innerHTML = 'Logg inn';
            document.getElementById('userStatus').style.backgroundColor =
                "green";

        }
        if (inside == false) {
            docRef1.update({
                inside: true

            })
            document.getElementById('loggInniHall').innerHTML = 'Logg ut';
            document.getElementById('userStatus').style.backgroundColor =
                "red";

        }
    })
}

function edit() {
    var x = document.getElementById('editUser');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    docRef1.onSnapshot(function (user) {
        var radinfo = user.data().rad;
        var navninfo = user.data().navn;
        var nickinfo = user.data().nick;
        var seteinfo = user.data().sete;
        var tlfinfo = user.data().tlf;
        var ftlfinfo = user.data().ftlf;
        var IdInfo = user.data().id;
        var erDeltakerinfo = user.data().deltaker;
        var erUtstillerinfo = user.data().utstiller;
        var erStreamerinfo = user.data().streamer;
        var erCrewinfo = user.data().crew;
        document.getElementById("id1").value = IdInfo;
        document.getElementById("navn1").value = navninfo;
        document.getElementById("tlf1").value = tlfinfo;
        document.getElementById("rad1").value = radinfo;
        document.getElementById("sete1").value = seteinfo;
        document.getElementById("nick1").value = nickinfo;
        document.getElementById("deltaker1").checked = erDeltakerinfo;
        document.getElementById("streamer1").checked = erStreamerinfo;
        document.getElementById("utstiller1").checked = erUtstillerinfo;
        document.getElementById("crew1").checked = erCrewinfo;
    }
    )
}

function submit() {
    var id = document.getElementById("id1").value;
    var navn = document.getElementById("navn1").value;
    var tlf = document.getElementById("tlf1").value;
    var rad = document.getElementById("rad1").value;
    var sete = document.getElementById("sete1").value;
    var nick = document.getElementById("nick1").value;
    var deltaker = document.getElementById("deltaker1").checked;
    var streamer = document.getElementById("streamer1").checked;
    var utstiller = document.getElementById("utstiller1").checked;
    var crew = document.getElementById("crew1").checked;


    docRef1.update({
        id: id,
        navn: navn,
        nick: nick,
        tlf: tlf,
        rad: rad,
        sete: sete,
        deltaker: deltaker,
        streamer: streamer,
        utstiller: utstiller,
        crew: crew


    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        })



    var x = document.getElementById('editUser');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}