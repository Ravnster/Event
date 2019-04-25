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