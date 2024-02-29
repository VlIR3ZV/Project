var body = document.body
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")
var p4 = document.getElementById("p4")
var mainp = document.getElementById("mainp")
var h1 = document.getElementsByTagName('h1')[0]

function press(event) {
    if (event.isTrusted == true) {
        event.preventDefault()
    }
    p1.innerHTML = event.key
    p2.innerHTML = event.code
    p3.innerHTML = event.keyCode
    p4.innerHTML = event.location
    h1.innerHTML = event.which
    if (event.keyCode == 32) {
        p1.innerHTML = "space"
        h1.innerHTML = "space"
    }
    for (var i = 0; i < 4; i++) {
        var p = document.getElementsByTagName('p')[i]
        var div = document.getElementsByTagName('div')[i]
        p.style.display = "flex"
        div.style.display = "flex"
    }
}