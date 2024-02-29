var allSugg = [
    "09190808954",
    "09190804548",
    "09190549849",
    "09191651684",
    "09124703772",
    "09121581493",
    "Alireza",
    "Am I Right?",
    "Are You Right?",
    "How Old Are You",
    "How Weight Are You",
    "How Tall Are You?",
    "Is It Ok?",
    "The Fox Jump Over The XP :)",
    "There Is No Tomorrow",
    "This Is Batman",
    "What Is Your Hight?",
    "What Is Your Weight?",
    "What Is The Matter With You?",
]
var input = document.getElementsByTagName("input")[0].addEventListener("keyup", autocomplete)
var input = document.getElementsByTagName("input")[0];
var div = document.getElementById("div");

function autocomplete() {
    var i = 0;
    var b = -20.5;
    div.innerHTML = "";
    if (!input.value) {
        div.innerHTML = "";
    } else {
        allSugg.forEach((val) => {
            if (val.toLowerCase().includes(input.value.toLowerCase()) && i <= 9 && input.value !== " ") {
                i++;
                b = b + 10;
                div.insertAdjacentHTML("beforeend", '<br><button style="margin:' + b + 'px 0px 0px -215px" id="custom" onclick="clickToAdd(' + i + ')"> ' + val + ' </button><br>');
            } else {}
        })
    }
}

function clickToAdd(parametr) {
    var animationBtn = document.querySelectorAll("button")[parametr - 1];
    animationBtn.style.marginTop = (-parametr * 36 - 28.5) + "px";
    animationBtn.style.transition = "all 0.1s linear";
    animationBtn.style.backgroundColor = "inherit";
    setTimeout(() => {
        div.innerHTML = "";
        input.value = animationBtn.innerHTML;
    }, 100)
}