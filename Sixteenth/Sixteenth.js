var numbers = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000, 1040, 1080, 1120, 1160, 1200, 1240, 1280, 1320, 1360, 1400, 1440, 1480];
var numberss = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, ];
var audio = document.getElementsByTagName("audio")[0];
var input1 = document.getElementsByTagName("input")[0];
var input2 = document.getElementsByTagName("input")[1];
var input3 = document.getElementsByTagName("input")[2];
var button = document.getElementsByTagName("button")[0];
var timerp = document.getElementById("timerp");
var div = document.getElementById("div")
var maindiv = document.getElementById("maindiv");
var shapediv = document.getElementById("shapediv");
var pppp = document.getElementById("pppp");
var timerdiv = document.getElementById("timer");
var test = Math.floor(Math.random() * 38);
var number = numbers[test];
var testt = Math.floor(Math.random() * 18);
var numberr = numbers[testt];
var point = 0;
var minis = 1;
var s = 00;
var m = 00;
var h = 00;
var v = 40;
var i = 0;
var l = 0;
var a = 0;
var b = 0;
var c = 0;
var cols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]

function randomnuma() {
    a = Math.floor(Math.random() * 250)
}

function randomnumb() {
    b = Math.floor(Math.random() * 250)
}

function randomnumc() {
    c = Math.floor(Math.random() * 250)
}

function summon() {
    test = Math.floor(Math.random() * 38);
    number = numbers[test];
    testt = Math.floor(Math.random() * 18);
    numberr = numbers[testt];
    var rounddiv = document.getElementById("rounddiv");
    rounddiv.style.marginTop = numberr + "px";
    rounddiv.style.marginLeft = number + "px";
}

function act(event) {
    if (event.key === "ArrowUp") {
        l = l - v;
    }
    if (event.key === "ArrowDown") {
        l += v;
    }
    if (event.key === "ArrowRight") {
        i = i + v;
    }
    if (event.key === "ArrowLeft") {
        i = i - v;
    }
    if (event.code === "Numpad6") {
        i = i + v;
    }
    if (event.code === "Numpad4") {
        i = i - v;
    }
    if (event.code === "Numpad2") {
        l = l + v;
    }
    if (event.code === "Numpad8") {
        l = l - v;
    }
    if (event.code === "Numpad7") {
        l = l - v;
        i = i - v;
    }
    if (event.code === "Numpad9") {
        l = l - v;
        i = i + v;
    }
    if (event.code === "Numpad3") {
        i = i + v;
        l = l + v;
    }
    if (event.code === "Numpad1") {
        i = i - v;
        l = l + v;
    }
    if (event.code === "NumpadSubtract") {
        v = v - 20
    }
    if (event.code === "NumpadAdd") {
        v = v + 20
    }

    if (i >= 1520) {
        i = -40
    }
    if (i <= (80) * (-1)) {
        i = 1480
    }
    if (l >= 720) {
        l = -40
    }
    if (l <= (80) * (-1)) {
        l = 680
    }

    div.style.marginTop = l + "px";
    div.style.marginLeft = i + "px";
    if (i == number && l == numberr) {
        summon();
        point++;
        pppp.innerHTML = point;
    }
    if (event.key === "Enter") {
        timer();
    }
    if (event.key == "w") {
        randomnuma();
        div.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")"
    }
    if (event.key == "a") {
        randomnumb();
        div.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")"
    }
    if (event.key == "s") {
        randomnumc();
        div.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")"
    }
    if (event.key == "d") {
        randomnuma();
        randomnumb();
        randomnumc();
        div.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")"
    }
}

function timer() {
    function shaped() {
        var shape = document.createElement("div");
        shape.setAttribute("id", "rounddiv")
        shapediv.appendChild(shape)
        var rounddiv = document.getElementById("rounddiv");
        rounddiv.style.marginTop = numberr + "px";
        rounddiv.style.marginLeft = number + "px";
    }
    shaped();
    s = input3.value;
    m = input2.value;
    h = input1.value;
    input1.style.display = "none";
    input2.style.display = "none";
    input3.style.display = "none";
    button.style.display = "none";
    timerp.style.opacity = 0.2;
    timerdiv.style.marginRight = 0 + "px";
    setInterval(() => {
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
        if (minis == -1) {
            minis = 00;
            s = 00;
            m = 00;
            h = 00;
        }

        t = [h + ":" + m + "':" + s + '":' + minis]
        timerp.innerHTML = t
        if (minis == 00 && s == 00 && m == 00 && h == 00) {
            audio.play();
            div.style.marginLeft = 0;
            div.style.marginTop = 0;
            l = 0;
            i = 0;
            div.style.outlineWidth = 10 + "px";
            div.style.outlineStyle = "dashed";
            timerp.style.opacity = 10;
            timerp.style.backgroundColor = "black"
            timerp.style.color = "red"
            number = 100000;
            numberr = 100000000;
        }
    }, 100);
}