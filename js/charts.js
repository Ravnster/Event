// JavaScript source code

db.collection('users').onSnapshot(
    function (userSnapshot) {
        let inside = 0;
        let outside = 0;
        userSnapshot.forEach(
            function (users) {
                let user = users.data();
                if (user.inside) inside++;
                else outside++;
            });
        new Chart(document.getElementById("Total-chart"), {
            type: 'doughnut',
            data: {
                labels: ["Ute", "Inne"],
                datasets: [
                    {

                        backgroundColor: ["#144CCC", "#33CEFF"],
                        data: [outside, inside]
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

db.collection('users').where('deltaker', '==', true).onSnapshot(
    function (userSnapshot) {
        let inside = 0;
        let outside = 0;
        userSnapshot.forEach(
            function (users) {
                let user = users.data();
                if (user.inside) inside++;
                else outside++;
            });
        new Chart(document.getElementById("Deltaker-chart"), {
            type: 'doughnut',
            data: {
                labels: ["Ute", "Inne"],
                datasets: [
                    {
                        backgroundColor: ["#144CCC", "#33CEFF"],
                        data: [outside, inside]
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
    });
db.collection('users').where('streamer', '==', true).onSnapshot(
    function (userSnapshot) {
        let inside = 0;
        let outside = 0;
        userSnapshot.forEach(
            function (users) {
                let user = users.data();
                if (user.inside) inside++;
                else outside++;
            });
        new Chart(document.getElementById("Streamer-chart"), {
            type: 'doughnut',
            data: {
                labels: ["Ute", "Inne"],
                datasets: [
                    {
                        backgroundColor: ["#144CCC", "#33CEFF"],
                        data: [outside, inside]
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
    });


db.collection('users').where('utstiller', '==', true).onSnapshot(
    function (userSnapshot) {
        let inside = 0;
        let outside = 0;
        userSnapshot.forEach(
            function (users) {
                let user = users.data();
                if (user.inside) inside++;
                else outside++;
            });
        new Chart(document.getElementById("Utstiller-chart"), {
            type: 'doughnut',
            data: {
                labels: ["Ute", "Inne"],
                datasets: [
                    {
                        backgroundColor: ["#144CCC", "#33CEFF"],
                        data: [outside, inside]
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
    });




db.collection('users').where('crew', '==', true).onSnapshot(
    function (userSnapshot) {
        let inside = 0;
        let outside = 0;
        userSnapshot.forEach(
            function (users) {
                let user = users.data();
                if (user.inside) inside++;
                else outside++;
            });
        new Chart(document.getElementById("Crew-chart"), {
            type: 'doughnut',
            data: {
                labels: ["Ute", "Inne"],
                datasets: [
                    {
                        backgroundColor: ["#144CCC", "#33CEFF"],
                        data: [outside, inside]
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

    });
