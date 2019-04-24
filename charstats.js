// JavaScript source code
new Chart(document.getElementById("Total-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Ute", "Inne"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#144CCC", "#33CEFF"],
                data: [67, 190]
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

new Chart(document.getElementById("Deltaker-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Ute", "Inne"],
        datasets: [
            {
                label: "Population (millions)",
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
                label: "Population (millions)",
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
                label: "Population (millions)",
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
                label: "Population (millions)",
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


