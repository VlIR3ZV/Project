document.addEventListener("keyup", (e) => {
    let eventrunkey = e.key
    let idtorun = document.getElementById(eventrunkey);
    idtorun.classList.add("hit");
    idtorun.addEventListener("animationend", () => {
        console.log("object");
        idtorun.classList.remove("hit")
    })
})
var p = document.getElementsByTagName("p")[0];
var div = document.getElementById("pdiv")
var span = document.getElementsByTagName("span")[0];
var nav = document.getElementsByTagName("nav")[0];

function remain() {
    span.innerHTML = p.innerHTML.length + "/" + 500;
    if (p.innerHTML.length >= 501) {
        removeletter();
        span.innerHTML = p.innerHTML.length + "/" + 500;
        nav.innerHTML = "You Can't Use Any More Letter"
    }
}

function
one() {
    p.append("1");
    remain();
}

function two() {
    p.append("2")
    remain();
}

function three() {
    p.append("3")
    remain();
}

function four() {
    p.append("4")
    remain();
}

function five() {
    p.append("5")
    remain();
}

function six() {
    p.append("6")
    remain();
}

function seven() {
    p.append("7")
    remain();
}

function eight() {
    p.append("8")
    remain();
}

function nine() {
    p.append("9")
    remain();
}

function zero() {
    p.append("0")
    remain();
}

function qq() {
    p.append("p")
    remain();
}

function ww() {
    p.append("w")
    remain();
}

function ee() {
    p.append("e")
    remain();
}

function rr() {
    p.append("r")
    remain();
}

function tt() {
    p.append("t")
    remain();
}

function yy() {
    p.append("y")
    remain();
}

function uu() {
    p.append("u")
    remain();
}

function ii() {
    p.append("i")
    remain();
}

function oo() {
    p.append("o")
    remain();
}

function pp() {
    p.append("p")
    remain();
}

function aa() {
    p.append("a")
    remain();
}

function ss() {
    p.append("s")
    remain();
}

function dd() {
    p.append("d")
    remain();
}

function ff() {
    p.append("f")
    remain();
}

function gg() {
    p.append("g")
    remain();
}

function hh() {
    p.append("h")
    remain();
}

function jj() {
    p.append("j")
    remain();
}

function kk() {
    p.append("k")
    remain();
}

function ll() {
    p.append("l")
    remain();
}

function zz() {
    p.append("z")
    remain();
}

function xx() {
    p.append("x")
    remain();
}

function cc() {
    p.append("c")
    remain();
}

function vv() {
    p.append("v")
    remain();
}

function bb() {
    p.append("b")
    remain();
}

function nn() {
    p.append("n")
    remain();
}

function mm() {
    p.append("m")
    remain();
}

function remove() {
    p.innerHTML = "";
    remain();
}

function space() {
    p.append(" ")
    remain();
}

function enter() {
    p.innerHTML = p.innerHTML + "<br>";
    remain();
}

function removeletter() {
    p.removeChild(p.lastChild);
    remain();
}

function func(event) {
    if (event.key == "Backspace") {
        removeletter();
    }
    if (event.key == "Enter") {
        enter();
    } else {
        p.append(event.key)
    }
    if (event.key == "Delete") {
        remove();
    }
    remain();

}