var minis = 1;
var s = 00;
var m = 00;
var h = 00;
var timems = document.getElementsByTagName("input")[0];
var times = document.getElementsByTagName("input")[1];
var timem = document.getElementsByTagName("input")[2];
var p = document.getElementById("timer");
var audio = document.getElementsByTagName("audio")[0];

function activewithbtn(event) {
    h = timems.value;
    m = times.value;
    s = timem.value;
    setInterval(function act() {
        minis--;
        if (minis == 0) {
            minis = 10;
            s = (s - 1)
        }
        if (s == -1) {
            s = 59;
            m = (m - 1)
        }
        if (m == -1) {
            m = 59;
            h = (h - 1)
        }
        if (h == -1) {
            minis = 0;
            s = 0;
            m = 0;
            h = 0;
        }
        if (m == 0) {
            h = 00;
            m = 00;
        }
        if (h == "") {
            h = 00;
        }
        if (minis == -1) {
            minis = 00;
            s = 00;
            m = 00;
            h = 00;
        }
        if (minis == 0) {
            audio.play();
        }
        var t = [h + ":" + m + "':" + s + '":' + minis];
        p.innerHTML = t;
    }, 100)
}

function active(event) {
    if (event.code == "Enter") {
        smh();
    }
}