document.onkeypress = keybaordfunc;
var p = document.getElementById("p");
var quizp = document.getElementById("quizp");
var input = document.getElementById("input");
var underquizp = document.getElementById("underquizp")
var exaclydiv = document.getElementById("exaclydiv");
var maindiv = document.getElementById("maindiv");
var reset = document.getElementById("reset");

function typefunc(num) {
    p.innerHTML += num;
}

function deletetype(num) {
    var exp = p.innerHTML;
    p.innerHTML = exp.substring(0, exp.length - 1);
}

function showquizgame() {
    for (let i = 0; i < p.innerHTML.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = "_";
        div.style.display = "inline"
        quizp.append(div)
    }
    exaclydiv.style.display = "none";
    maindiv.style.display = "block";
    input.style.display = "none"
    p.style.display = "none";
    quizp.style.display = "block"
    reset.style.display = "inline";
}

function resetbtn() {
    p.innerHTML = "";
    quizp.innerHTML = "";
    underquizp.innerHTML = "";
    p.style.display = "block";
    reset.style.display = "none"
    input.style.display = "inline-block";
    exaclydiv.style.display = "block";
    maindiv.style.display = "none";
}

function quizgame(num) {
    var pin = p.innerHTML;
    if (pin.includes(num)) {
        var last = pin.indexOf(num)
        var first = pin.lastIndexOf(num)
        quizp.innerHTML[last] = num;
        var choosefirstdiv = document.getElementsByTagName("div")[first];
        var chooselastdiv = document.getElementsByTagName("div")[last];
        choosefirstdiv.innerHTML = num;
        chooselastdiv.innerHTML = num;
    } else {
        underquizp.innerHTML += num;
    }
    for (let s = 0; s < p.innerHTML.length; s++) {
        var button = document.getElementsByTagName("div")[s];
    }
    if (button.innerHTML !== "_") {
        alert("You Win")
    }

    if (pin.length <= underquizp.innerHTML.length) {
        alert("You Lose");
    }
    if (pin.length + 1 <= underquizp.innerHTML.length) {
        var myex = underquizp.innerHTML;
        underquizp.innerHTML = myex.substring(0, myex.length - 1);
    }
}

function keybaordfunc(event) {
    quizgame(num = event.key);
    if (event.key == "Enter") {
        deletetype();
        deletetype();
        deletetype();
        deletetype();
        deletetype();
        showquizgame();
    }
}