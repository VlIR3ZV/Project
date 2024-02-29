var div = document.getElementsByTagName("div")[0];
window.onscroll = changes;
function changes() {
    var moveheight = window.scrollY; //move
    var clinetheight = document.body.clientHeight //all height
    var innerheight = window.innerHeight //heightnow
    var finalWidth = (moveheight / (clinetheight - innerheight)) * 100
    div.style.width = finalWidth + "%";
    div.style.height = 5 + "px";
    div.style.marginTop = -16 + "px";
    div.style.marginLeft = -6 + "px";
    div.style.borderRadius = 10 + "px";
    div.style.backgroundColor = "#11aded";
    div.style.position = "fixed";
}
function actionScroll(){
    window.scrollBy(0,1)
}
// document.addEventListener("scroll",actionScroll)
document.addEventListener("keypress",actionScroll)