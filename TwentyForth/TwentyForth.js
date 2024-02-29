document.onkeydown = run;

function run() {
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet")
    css.setAttribute("href", "TwentyForth.css")
    document.head.appendChild(css);
}

var twentyone = document.getElementById("twentyone").addEventListener("transitionend", (e) => {
    var alllink = document.getElementsByTagName("link");
    for (let i = 0; i < alllink.length; i++) {
        alllink[i].remove();
    }
})