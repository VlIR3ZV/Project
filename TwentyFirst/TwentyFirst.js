var main = document.getElementsByTagName("main")[0];
var nav = document.getElementsByTagName("nav")[0];
var footer = document.getElementsByTagName("footer")[0];
var div = document.getElementsByTagName("div")[1];
var audio = document.getElementById("audio");
var showmoment = document.getElementsByTagName("p")[0];
var totaltime = document.getElementsByTagName("p")[1];
var whichmusic = document.getElementsByTagName("p")[2];
var rate = document.getElementsByTagName("p")[3];
var p = document.getElementsByTagName("p")[4];
var playlistp = document.getElementsByTagName("p")[5];
var timeinput = document.getElementsByTagName("input")[0];
var input = document.getElementsByTagName("input")[1];
var audiolocation = document.getElementsByTagName("input")[2];
var urltoadd = document.getElementsByTagName("input")[3];
var icon = document.getElementsByTagName("i")[4];
var pause = document.getElementsByTagName("button")[0];
var play = document.getElementsByTagName("button")[1];
var nextaudiobtn = document.getElementsByTagName("button")[2];
var preaudiobtn = document.getElementsByTagName("button")[3];
var plus = document.getElementsByTagName("button")[4];
var minus = document.getElementsByTagName("button")[5];
var parenticon = document.getElementsByTagName("button")[6];
var addtoplaylistinmain = document.getElementsByTagName("button")[7];
var removebtn = document.getElementById("removebtn");
var addtoplaylist = document.getElementsByTagName("button")[9];
var playlistinnav = document.getElementById("playlistinnav");
var playlistcoll = [];
var parselocalstorage = JSON.parse(localStorage.getItem("playlist"));
if (parselocalstorage == null) {} else {

    for (let s = 0; s < parselocalstorage.length; s++) {

        playlistcoll.push(parselocalstorage[s])

    }
}
var f = 0;
parenticon.onmouseenter = mouseeve;
document.onkeyup = shortcut;
div.onmouseenter = mouseeve;
div.onmouseleave = mouselea;
playlistinnav.onmouseup = playlistsizebig;
playlistinnav.onmousedown = playlistsizesmall;

function clicktoplay() {
    audio.play();
    pause.style.display = "none";
    play.style.display = "inline";
    timeinput.value = audio.currentTime;
    totaltim();
}

function clicktopause() {
    audio.pause();
    pause.style.display = "inline";
    play.style.display = "none";
    totaltim();
}

function totaltim() {
    var mm = Math.floor(Number(audio.duration / 60))
    var ss = Math.floor(Number(audio.duration % 60))
    totaltime.innerHTML = mm + ":" + ss;
    timeinput.max = Math.floor(audio.duration);
    if (totaltime.innerHTML == "NaN:NaN") {
        totaltime.innerHTML = "0:0"
    }
}

function seek() {
    audio.currentTime = timeinput.value;
    timeinput.value = audio.currentTime;
}

function changetime() {
    var m = 0;
    var moment = audio.currentTime;
    moment = Number(Math.floor(moment));
    m = Math.floor(audio.currentTime / 60);
    moment = moment % 60;
    showmoment.innerHTML = m + ":" + moment + "   " + "/";
}

function nextaudio() {
    nextaudioo();
}

function preaudio() {
    preaudioo();
}

function nextaudioo() {
    for (f = 0; f < playlistcoll.length; f++) {
        if (audio.src == playlistcoll[f]) {
            if (f == (playlistcoll.length - 1)) {
                f = 0;
            } else {
                f = f + 1
            }
            audio.src = playlistcoll[f];
            clicktoplay();
            whichmusicp();
        }
    }
}

function preaudioo() {
    for (f = 0; f < playlistcoll.length; f++) {
        if (audio.src == playlistcoll[f]) {
            if (f == 0) {
                f = (playlistcoll.length - 1);
            } else {
                f = f - 1
            }
            audio.src = playlistcoll[f];
            clicktoplay();
            whichmusicp();
        }
    }
}

function whichmusicp() {
    var forloop = 0;
    var leftinp = 1;
    var rightinp = (playlistcoll.length);
    for (forloop = 0; forloop < playlistcoll.length; forloop++) {
        if (audio.src == playlistcoll[forloop]) {
            leftinp = (forloop + 1);
        }
    }
    whichmusic.innerHTML = leftinp + "/" + (rightinp);
}

function minused() {
    audio.playbackRate = audio.playbackRate - 0.1;
}

function plused() {
    audio.playbackRate = audio.playbackRate + 0.1;
}

function ratechanging() {
    var speed = (Math.floor(audio.playbackRate * 10)) / 10;
    rate.innerHTML = speed;
}

function changevolume() {
    var myvolume = (Number(input.value)) / 100;
    audio.volume = myvolume;
    var nu = Number(audio.volume) * 100;
    nu = Math.floor(nu);
    p.innerHTML = nu;
    if (p.innerHTML <= 70) {
        icon.classList.value = "fas fa-volume-down";
    }
    if (p.innerHTML <= 30) {
        icon.classList.value = "fas fa-volume-off";
    }
    if (p.innerHTML == 0) {
        icon.classList.value = "fas fa-volume-mute";
    }
    if (p.innerHTML > 70) {
        icon.classList.value = "fas fa-volume-up";
    }
}

function changevolumed() {
    input.value = audio.volume * 100;
    changevolume();
}

function muteunmutebtn() {
    if (audio.volume == 0) {
        input.value = 100;
        changevolume();
    } else {
        input.value = 0;
        changevolume();
    }
}

function red() {
    timeinput.value = showmoment;
    timeinput.value = audio.currentTime;
}

function mouseeve() {
    input.style.display = "inline";
    div.style.marginRight = 138 + "px";
    div.style.transitionDuration = 0.27 + "s";
    div.style.transitionTimingFunction = "ease-in";
}

function mouselea() {
    input.style.display = "none";
    div.style.marginRight = 0 + "px";
}

function showmain() {
    if (urltoadd.value == "") {
        alert("Fill It Up");
        return showmain
    }
    if (urltoadd.value.includes("https://") === false == urltoadd.value.includes("file://") === false) {
        alert("Add https:// Or file:/// At The Beginning Of The Address");
        return showmain
    } else {
        totaltim();
        show();
    }
    totaltim();
    show();
}

function show() {
    nav.style.display = "inline";
    footer.style.display = "none";
    audio.src = urltoadd.value;
    audiolocation.value = urltoadd.value;
    playlistp.innerHTML = "";
    totaltim();
}

function addpl() {
    if (audiolocation.value == "") {
        alert("Fill It Up");
        return addpl;
    }
    if (audiolocation.value.includes("https://") === false == audiolocation.value.includes("file://") === false) {
        alert("Add https:// Or file:/// At The Beginning Of The Address");
        return addpl;
    } else {
        totaltim();
        playlis();
    }
    whichmusicp();
    localStorage.setItem("playlist", JSON.stringify(playlistcoll));
    audiolocation.value = "";
}

function removebtnact() {
    playlistp.innerHTML = "";
    playlistcoll = [];
    localStorage.removeItem("playlist");
    whichmusic.innerHTML = "1/1"
}

function playlis() {
    var linktoaddone = audiolocation.value;
    playlistcoll.push(linktoaddone);
    playlistp.innerHTML = "";
    for (let l = 0; l < playlistcoll.length; l++) {
        playlistp.innerHTML = (playlistp.innerHTML + "<br>") + playlistcoll[l];
    }
}


function myplaylist() {
    if (audio.duration == audio.currentTime) {
        nextaudioo();
    }
    totaltim();
}

function playlistsizebig() {
    audiolocation.style.display = "inline";
    addtoplaylist.style.display = "inline";
    playlistp.style.display = "inline";
    removebtn.style.display = "inline";
    addtoplaylistinmain.style.display = "inline";
}

function playlistsizesmall() {
    audiolocation.style.display = "none";
    addtoplaylist.style.display = "none";
    playlistp.style.display = "none";
    removebtn.style.display = "none";
    addtoplaylistinmain.style.display = "none";
}

function rst() {
    nav.style.display = "none";
    footer.style.display = "inline";
    audio.src = "";
    urltoadd.value = "";
}

function shortcut(event) {
    if (event.key == "ArrowRight") {
        audio.currentTime = audio.currentTime + Number(5);
    }
    if (event.key == "ArrowLeft") {
        audio.currentTime = audio.currentTime - Number(5);
    }
    if (event.key == "ArrowUp") {
        audio.volume = audio.volume + Number(0.05);
    }
    if (event.key == "ArrowDown") {
        audio.volume = audio.volume - Number(0.05);
    }
    if (event.key == "m") {
        muteunmutebtn();
    }
    if (event.key == "Enter") {
        if (nav.style.display == "inline") {
            addpl();
        } else {
            showmain();
        }
    }
    if (event.key == " ") {
        if (play.style.display == "inline") {
            clicktopause();
        } else {
            clicktoplay();
        }
    }
    if (event.key == "+") {
        plused();
    }
    if (event.key == "-") {
        minused();
    }
    if (event.key == "=") {
        audio.playbackRate = 1;
    }
    if (event.key == "q" && event.ctrlKey == true) {
        return rst();
    }
    if (event.key == "n") {
        nextaudioo();
    }
    if (event.key == "p") {
        preaudioo();
    }
    if (event.key == "l") {
        if (playlistp.style.display == "inline") {
            playlistsizesmall();
        } else {
            playlistsizebig();
        }
    }
    if (event.key == "d") {
        removebtnact();
    }
}