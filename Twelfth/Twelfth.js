document.onmousemove = mouse;
document.onmouseover = mouse;

function mouse(event) {
    var ctrl = event.ctrlKey
    var alt = event.altKey
    var shift = event.shiftKey
    var color = ["red", "blue", "sky", "skyblue", "yellow", "#7b68ee", "#e85395", "orange", "#e9692c", "#86aba5", "#ff5a36"]
    var c = Math.floor(Math.random() * 10)
    var maincolor = color[c]
    var co = Math.floor(Math.random() * 10)
    var maincolorr = color[co]
    var circle = document.createElement("div")
    circle.setAttribute("class", "circle")
    circle.style.left = event.clientX + "px"
    circle.style.top = event.clientY + "px"
    circle.style.transition = " 0.4s ease"
    circle.style.borderColor = maincolor

    if (alt == true) {
        circle.style.width = "25px";
        circle.style.height = "25px";
        circle.style.position = "absolute";
        circle.style.backgroundColor = "red"
        circle.style.background = maincolor
    }
    document.body.append(circle)
    circle.style.left = circle.offsetLeft - 20 + "px"
    circle.style.top = circle.offsetTop - 0.1 + "px"
    circle.style.width = "60px"
    circle.style.height = "60px"
    circle.style.borderWidth = "10px"
    circle.style.borderRadius = "20%"
    circle.style.top = circle.offsetTop - 20 + "px"
    circle.style.borderColor = maincolor;
    circle.style.opacity = 0;
    if (ctrl == true) {
        circle.style.opacity = 50;
    }
    if (shift == true) {
        circle.style.borderRadius = "9%";
        circle.style.width = "0px";
        circle.style.height = "0px";
        circle.style.borderWidth = "100px";
        circle.style.position = "absolute";
        circle.style.background = maincolorr;
        circle.style.left = circle.offsetLeft - 80 + "px";
        circle.style.top = circle.offsetTop - 100 + "px";
    }
    if (event.metaKey == true) {
        circle.remove("circle");
        circle.removeAttribute("style");
        circle.removeAttribute("class");
    }
}