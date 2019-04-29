// JavaScript source code

var userref = db.collection("users");

/*userref.where('streamer', '==', true)
    .where('inside', '==', false).get().then(snap => {
        intrue = snap.size
        console.log(intrue);
    });
    */
var text = "true false true true true false";
    count = 0;

for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === 'true') {
        count++;
    }
}
console.log(count);


userref.where('streamer', '==', true).get().then(
    function(userSnapshot) {
        userSnapshot.forEach(
            function(users) {
                var boolval = users.data().inside;


                console.log(boolval)
                var dummy = 5;
                new Chart(document.getElementById("Total-chart"), {
                    type: 'doughnut',
                    data: {
                        labels: ["Ute", "Inne"],
                        datasets: [
                            {
                                backgroundColor: ["#144CCC", "#33CEFF"],
                                data: [dummy, 2]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Total',
                            fontSize: 25,
                            fontColor: '#fff'
                        }
                    }
                });
            });
    });

new Chart(document.getElementById("Deltaker-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Ute", "Inne"],
        datasets: [
            {
                backgroundColor: ["#144CCC", "#33CEFF"],
                data: [23, 152]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Deltaker',
            fontSize: 25,
            fontColor: '#fff'
        }
    }
});

new Chart(document.getElementById("Streamer-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Ute", "Inne"],
        datasets: [
            {
                backgroundColor: ["#144CCC", "#33CEFF"],
                data: [0, 9]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Streamer',
            fontSize: 25,
            fontColor: '#fff'
        }
    }
});

new Chart(document.getElementById("Utstiller-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Ute", "Inne"],
        datasets: [
            {
                backgroundColor: ["#144CCC", "#33CEFF"],
                data: [6, 14]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Utstiller',
            fontSize: 25,
            fontColor: '#fff'
        }
    }
});

new Chart(document.getElementById("Crew-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Ute", "Inne"],
        datasets: [
            {
                backgroundColor: ["#144CCC", "#33CEFF"],
                data: [29, 24]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Crew',
            fontSize: 25,
            fontColor: '#fff'
        }
    }
});


