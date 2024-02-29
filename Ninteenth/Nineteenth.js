document.onmousemove = movetoaddnumber;
document.onkeydown = movetoaddnumberwithkeyboard;
var p = document.getElementsByTagName("p")[0];
var btn = document.getElementsByTagName("button")[0];
var i = 1;

function actbtn() {
    btn.style.display = "none"
    p.style.display = "block"
    i = 1;
    p.innerHTML = 0;
}

function movetoaddnumber() {
    p.innerHTML = Number(p.innerHTML) + i;
}

function stopmove() {
    i = 0;
}

function movetoaddnumberwithkeyboard(event) {
    if (event.key == "Enter") {
        actbtn();
    }
    if (event.key == "s") {
        stopmove();
    }
    if (event.key == " ") {
        stopmove();
    }
}