document.onscroll = onscrollfunc;
var door1 = document.getElementById("door1");
var door2 = document.getElementById("door2");
var door3 = document.getElementById("door3");
var door4 = document.getElementById("door4");
var door5 = document.getElementById("door5");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");
var circle5 = document.getElementById("circle5");
var btncircle1 = document.getElementById("btncircle1");
var btncircle2 = document.getElementById("btncircle2");
var btncircle3 = document.getElementById("btncircle3");
var btncircle4 = document.getElementById("btncircle4");
var btncircle5 = document.getElementById("btncircle5");
var anumoneforunderproduct = document.getElementById("anumoneforunderproduct")
var anumtwoforunderproduct = document.getElementById("anumtwoforunderproduct")
var anumthreeforunderproduct = document.getElementById("anumthreeforunderproduct")
var anumfourforunderproduct = document.getElementById("anumfourforunderproduct")
var alldoorpicforslide = [door1, door2, door3, door4, door5];
var alldoorcircleforslide = [circle1, circle2, circle3, circle4, circle5];
var numberforskippicture = 0;
var numberforcount = 0;
var i = 0;

setInterval(() => {
    if (numberforcount == 3) {
        numberforcount = 0;
        if (i == 5) {
            i = 0
        } else {
            for (let l = 0; l < alldoorpicforslide.length; l++) {
                let hiddenforpic = alldoorpicforslide[l];
                hiddenforpic.style.display = "none";
                let hiddenforcircle = alldoorcircleforslide[l];
                hiddenforcircle.style.backgroundColor = "inherit";
            }
            alldoorpicforslide[i++].style.display = "inline-block";
            alldoorcircleforslide[i - 1].style.backgroundColor = "black";
        }
    }
    numberforcount++;
}, 1200);

function nextpic() {
    if (i == 5) {
        i = 0;
    } else {
        for (let l = 0; l < alldoorpicforslide.length; l++) {
            let hiddenforpic = alldoorpicforslide[l];
            hiddenforpic.style.display = "none";
            let hiddenforcircle = alldoorcircleforslide[l];
            hiddenforcircle.style.backgroundColor = "inherit";
        }
        alldoorpicforslide[i++].style.display = "inline-block";
        alldoorcircleforslide[i - 1].style.backgroundColor = "black";
    }
}

function previouspic() {
    if (i == 0) {
        i = 5;
    } else {
        for (let l = 0; l < alldoorpicforslide.length; l++) {
            let hiddenforpic = alldoorpicforslide[l];
            hiddenforpic.style.display = "none";
            let hiddenforcircle = alldoorcircleforslide[l];
            hiddenforcircle.style.backgroundColor = "inherit";
        }
        alldoorpicforslide[i = i - 1].style.display = "inline-block";
        alldoorcircleforslide[i].style.backgroundColor = "black";
    }
}

function btncircleforactivetomoving1() {
    for (let l = 0; l < alldoorpicforslide.length; l++) {
        let hiddenforpic = alldoorpicforslide[l];
        hiddenforpic.style.display = "none";
        let hiddenforcircle = alldoorcircleforslide[l];
        hiddenforcircle.style.backgroundColor = "inherit";
        alldoorpicforslide[0].style.display = "inline-block";
        alldoorcircleforslide[0].style.backgroundColor = "black";
    }
}

function btncircleforactivetomoving2() {
    for (let l = 0; l < alldoorpicforslide.length; l++) {
        let hiddenforpic = alldoorpicforslide[l];
        hiddenforpic.style.display = "none";
        let hiddenforcircle = alldoorcircleforslide[l];
        hiddenforcircle.style.backgroundColor = "inherit";
        alldoorpicforslide[1].style.display = "inline-block";
        alldoorcircleforslide[1].style.backgroundColor = "black";
    }
}

function btncircleforactivetomoving3() {
    for (let l = 0; l < alldoorpicforslide.length; l++) {
        let hiddenforpic = alldoorpicforslide[l];
        hiddenforpic.style.display = "none";
        let hiddenforcircle = alldoorcircleforslide[l];
        hiddenforcircle.style.backgroundColor = "inherit";
        alldoorpicforslide[2].style.display = "inline-block";
        alldoorcircleforslide[2].style.backgroundColor = "black";
    }
}

function btncircleforactivetomoving4() {
    for (let l = 0; l < alldoorpicforslide.length; l++) {
        let hiddenforpic = alldoorpicforslide[l];
        hiddenforpic.style.display = "none";
        let hiddenforcircle = alldoorcircleforslide[l];
        hiddenforcircle.style.backgroundColor = "inherit";
        alldoorpicforslide[3].style.display = "inline-block";
        alldoorcircleforslide[3].style.backgroundColor = "black";
    }
}

function btncircleforactivetomoving5() {
    for (let l = 0; l < alldoorpicforslide.length; l++) {
        let hiddenforpic = alldoorpicforslide[l];
        hiddenforpic.style.display = "none";
        let hiddenforcircle = alldoorcircleforslide[l];
        hiddenforcircle.style.backgroundColor = "inherit";
        alldoorpicforslide[4].style.display = "inline-block";
        alldoorcircleforslide[4].style.backgroundColor = "black";
    }
}

function clicktoopenproductsmenu() {
    if (anumoneforunderproduct.style.display == "inline-block") {
        anumoneforunderproduct.style.display = "none";
        anumtwoforunderproduct.style.display = "none";
        anumthreeforunderproduct.style.display = "none";
        anumfourforunderproduct.style.display = "none";
    } else {
        anumoneforunderproduct.style.display = "inline-block";
        anumtwoforunderproduct.style.display = "inline-block";
        anumthreeforunderproduct.style.display = "inline-block";
        anumfourforunderproduct.style.display = "inline-block";
    }
}

function onscrollfunc(e) {
    if (e.isTrusted == true) {
        anumoneforunderproduct.style.display = "none";
        anumtwoforunderproduct.style.display = "none";
        anumthreeforunderproduct.style.display = "none";
        anumfourforunderproduct.style.display = "none";
    }
}