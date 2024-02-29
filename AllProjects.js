var html = document.getElementsByTagName("html")[0];
var body = document.body;
var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")
var forth = document.getElementById("forth")
var fifth = document.getElementById("fifth")
var sixth = document.getElementById("sixth")
var seventh = document.getElementById("seventh")
var eighth = document.getElementById("eighth")
var ninth = document.getElementById("ninth")
var tenth = document.getElementById("tenth")
var input = document.getElementById("range")
var inputone = document.getElementById("one");
var inputtwo = document.getElementById("two");
var inputthree = document.getElementById("three");
var inputfour = document.getElementById("four")
var inputfive = document.getElementById("five")
var icon = document.getElementsByTagName("i")[0];
var brightp = document.getElementById("brightp");
var a = document.getElementsByTagName("a");
var table = document.getElementById("table");
var mode = document.getElementById("mode");
var darkp = document.getElementById("darkp");
var lightp = document.getElementById("lightp");
var changegr = document.getElementById("changegr")
var off = document.getElementById("offp");
var on = document.getElementById("onp");
var background = document.getElementById("background");
var img = document.getElementsByTagName("img");
var infoDiv = document.getElementById("infoDiv")
var batteryInfoP = document.getElementById("batteryInfoP");
var batteryIcon = document.getElementById("batteryIcon");
var signalIcon = document.getElementById("signalIcon");
var signalP = document.getElementById("signalP")
var platformP = document.getElementById("platformP");
var languageP = document.getElementById("languageP");
var browserNavigation = document.getElementById("browserNavigation");
var brave = document.getElementById("brave");
var edge = document.getElementById("edge");
var chrome = document.getElementById("chrome");
var opera = document.getElementById("opera");
var firefox = document.getElementById("firefox");
var safari = document.getElementById("safari");
var lighturl = "picture/light.jpg";
var darkurl = "picture/dark.jpg";
var e = null;

function change() {
    if (input.value <= 100) {
        icon.classList = "fas fa-sun";
    }
    if (input.value <= 70) {
        icon.classList = "fas fa-cloud-sun"
    }
    if (input.value <= 40) {
        icon.classList = "fas fa-cloud-sun-rain";
    }
    html.style.filter = "brightness(" + Number(input.value) + "%)";
    brightp.innerHTML = Number(input.value) + "%";
}

function light() {
    background.src = lighturl;
    mode.style.filter = "invert(0)";
    table.style.filter = "invert(0)";
    infoDiv.style.filter = "invert(0)";
    browserNavigation.style.filter = "invert(0)";
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "black";
    }
    darkp.style.display = "none";
    lightp.style.display = "block";
    e = 1;
}

function dark() {
    background.src = darkurl;
    mode.style.filter = "invert(1)"
    infoDiv.style.filter = "invert(1)"
    browserNavigation.style.filter = "invert(1)"
    table.style.filter = "invert(1)"
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "black";
    }
    darkp.style.display = "block";
    lightp.style.display = "none";
    e = 0;
}


function backgroundoff() {
    mode.style.backgroundColor = "inherit";
    table.style.backgroundColor = "inherit";
    infoDiv.style.backgroundColor = "inherit";
    browserNavigation.style.backgroundColor = "inherit";
}

function backgroundon() {
    mode.style.backgroundColor = "white";
    table.style.backgroundColor = "white";
    infoDiv.style.backgroundColor = "white";
    browserNavigation.style.backgroundColor = "white";
    backgroundChangeGet();
}


function turnon() {
    for (let i = 1; i < img.length; i++) {
        if (i >= img.length - 8) {} else {
            img[i].style.display = "block"
        }
    }
    off.style.display = "none";
    on.style.display = "block";
}

function turnoff() {
    for (let i = 1; i < img.length; i++) {
        if (i >= img.length - 8) {} else {
            img[i].style.display = "none"
        }
    }
    off.style.display = "block";
    on.style.display = "none";
}


function bubbleAnimation(a, b, c, d, numOfBubble) {
    setInterval(() => {
        a = a + c;
        b = b + d;
        numOfBubble.style.marginLeft = a + "px";
        numOfBubble.style.marginTop = b + "px";
        if (a == 1423) {
            c = c - 1;
        }
        if (a == 0) {
            c = c + 1;
        }
        if (b == 641) {
            d = d - 1;
        }
        if (b == 0) {
            d = d + 1;
        }
    }, 1);
}
bubbleAnimation(0, 0, 1, 1, first);
bubbleAnimation(1400, 100, 1, 1, second);
bubbleAnimation(750, 300, 1, 1, third);
bubbleAnimation(350, 450, 1, 1, forth);
bubbleAnimation(800, 50, 1, 1, fifth);
bubbleAnimation(420, 180, 1, 1, sixth);
bubbleAnimation(1400, 350, 1, 1, seventh);
bubbleAnimation(1200, 600, 1, 1, eighth);
bubbleAnimation(0, 640, 1, 1, ninth);
bubbleAnimation(1010, 150, 1, 1, tenth);

function backgroundChangeSet() {
    localStorage.setItem("themTwo", inputtwo.value);
    localStorage.setItem("themThree", inputthree.value);
    localStorage.setItem("themFour", inputfour.value);
    localStorage.setItem("themFive", inputfive.value);
    backgroundChangeGet();
}

function backgroundChangeGet() {
    mode.style.backgroundColor = localStorage.getItem("themTwo");
    table.style.backgroundColor = localStorage.getItem("themThree");
    infoDiv.style.backgroundColor = localStorage.getItem("themFour");
    browserNavigation.style.backgroundColor = localStorage.getItem("themFive");
    if (localStorage.getItem("themTwo")) {
        inputtwo.value = localStorage.getItem("themTwo");
        inputthree.value = localStorage.getItem("themThree");
        inputfour.value = localStorage.getItem("themFour");
        inputfive.value = localStorage.getItem("themFive");
    }
}
window.addEventListener("load", () => {
    var browserType = window.navigator.userAgentData.brands[1].brand;
    window.navigator.getBattery()
        .then(info => {
            batteryInfoP.innerHTML = Math.floor(info.level * 100) + "%";
            if (info.charging) {
                chargingIconFunc();
            } else {
                batteryIconFunc();
            }
            info.addEventListener("chargingchange", change => {
                if (change.target.charging) {
                    chargingIconFunc();
                } else {
                    batteryIconFunc();
                }
            })
            info.addEventListener("levelchange", curruntLevel => {
                batteryInfoP.innerHTML = Math.floor(curruntLevel.target.level * 100) + "%";
                if (curruntLevel.target.charging) {
                    chargingIconFunc();
                } else {
                    batteryIconFunc();
                }
            })
        })
        .catch(err => {
            batteryInfoP.innerHTML = "100%";
            batteryIcon.src = "Picture/Full Charging.jpg";
        })
    window.navigator.connection.addEventListener("change", signal => {
        if (window.navigator.connection.rtt) {
            signalFunc();
        } else {
            signalIcon.src = "Picture/No Signal.jpg";
        }
        signalP.innerHTML = window.navigator.connection.downlink;
    })
    if (window.navigator.connection.rtt) {
        signalFunc();
    } else {
        signalIcon.src = "Picture/No Signal.jpg";
    }
    signalP.innerHTML = window.navigator.connection.downlink;
    platformP.innerHTML = window.navigator.userAgentData.platform;
    languageP.innerHTML = window.navigator.language;
    browserTypeFunc(browserType);
    backgroundChangeGet();
    backgroundChangeSet();
})

function batteryIconFunc() {
    if (batteryInfoP.innerHTML.split("%")[0] < 19) {
        batteryIcon.src = "Picture/Empty Battery.jpg";
    } else if (batteryInfoP.innerHTML.split("%")[0] >= 20 && batteryInfoP.innerHTML.split("%")[0] <= 49) {
        batteryIcon.src = "Picture/Less Battery.jpg";
    } else if (batteryInfoP.innerHTML.split("%")[0] >= 50 && batteryInfoP.innerHTML.split("%")[0] < 80) {
        batteryIcon.src = "Picture/More Battery.jpg";
    } else {
        batteryIcon.src = "Picture/Full Battery.jpg";
    }
}

function chargingIconFunc() {
    if (batteryInfoP.innerHTML.split("%")[0] < 29) {
        batteryIcon.src = "Picture/Empty Charging.jpg";
    } else if (batteryInfoP.innerHTML.split("%")[0] >= 30 && batteryInfoP.innerHTML.split("%")[0] <= 59) {
        batteryIcon.src = "Picture/Less Charging.jpg";
    } else if (batteryInfoP.innerHTML.split("%")[0] >= 60 && batteryInfoP.innerHTML.split("%")[0] < 90) {
        batteryIcon.src = "Picture/More Charging.jpg";
    } else {
        batteryIcon.src = "Picture/Full Charging.jpg";
    }
}

function browserTypeFunc(browserType) {
    if (browserType.includes("Microsoft Edge")) {
        edge.style.filter = "brightness(100%)";
    } else if (browserType.includes("Mozilla Firefox")) {
        firefox.style.filter = "brightness(100%)";
    } else if (browserType.includes("Brave")) {
        brave.style.filter = "brightness(100%)";
    } else if (browserType.includes("Opera")) {
        opera.style.filter = "brightness(100%)";
    } else if (browserType.includes("Google Chrome")) {
        chrome.style.filter = "brightness(100%)";
    } else if (browserType.includes("Apple Safari")) {
        safari.style.filter = "brightness(100%)"
    }
}

function signalFunc() {
    if (window.navigator.connection.effectiveType === "5g") {
        signalIcon.src = "Picture/5G.jpg"
    } else if (window.navigator.connection.effectiveType === "4g") {
        signalIcon.src = "Picture/4G.jpg"
    } else if (window.navigator.connection.effectiveType === "3g") {
        signalIcon.src = "Picture/3G.jpg"
    } else if (window.navigator.connection.effectiveType === "slow-2g" || window.navigator.connection.effectiveType === "2g") {
        signalIcon.src = "Picture/2G.jpg"
    } else {
        signalIcon.src = "Picture/No Signal.jpg"
    }
}


document.addEventListener("keydown", (event) => {
    if (event.key === "l") {
        if (e === 0) {
            light();
        } else {
            dark();
        }
    }
    if (event.key === "o") {
        if (off.style.display === "none") {
            turnoff();
        } else {
            turnon();
        }
    }
    if (event.key === "b") {
        if (mode.style.backgroundColor === "inherit") {
            backgroundon()
        } else {
            backgroundoff();
        }
    }
    if (event.key === "ArrowLeft") {
        input.value = Number(input.value) - 5;
        change();
    }
    if (event.key === "ArrowRight") {
        input.value = Number(input.value) + 5;
        change();
    }
    if (event.key === "Delete") {
        let deleteLocalstorage = confirm("You Wanna Removing All Color?");
        if (deleteLocalstorage) {
            localStorage.removeItem("themTwo");
            localStorage.removeItem("themThree");
            localStorage.removeItem("themFour");
            localStorage.removeItem("themFive")
        }
    }
})
window.addEventListener("blur", () => {
    document.title = "Comeback";
})
window.addEventListener("focus", () => {
    document.title = "Practice";
})