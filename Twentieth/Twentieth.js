var p = document.getElementById("pForType");
var isTyping = document.getElementById("isTyping");
var input = document.getElementsByTagName("input")[0];

function clicked() {
    input.value = "";
    p.innerHTML = "";
}

function action() {
    p.innerHTML = input.value
    isTyping.style.display = "inline"
    setTimeout(() => {
        isTyping.style.display = "none"
    }, 4000)
}
input.onkeyup = action;