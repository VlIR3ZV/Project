document.onkeydown = keyclick;
var fisrtplayer = document.getElementById("hidep1");
var secondplayer = document.getElementById("hidep2");
var chooseplayerone = document.getElementById("chooseplayerone")
var chooseplayertwo = document.getElementById("chooseplayertwo")
var beginbutton = document.getElementById("starttocompare");
var one = document.getElementById("playeronepoint");
var two = document.getElementById("playertwopoint");
var imag1 = document.getElementsByTagName("img")[0];
var imag2 = document.getElementsByTagName("img")[1];
var imag3 = document.getElementsByTagName("img")[2];
var imag4 = document.getElementsByTagName("img")[3];
var imag5 = document.getElementsByTagName("img")[4];
var imag6 = document.getElementsByTagName("img")[5];
var skinp1 = 1;
var skinp2 = 1;
function stoneclick() {
    fisrtplayer.innerHTML = "stone";
}

function paperclick() {
    fisrtplayer.innerHTML = "paper";
}

function scissorclick() {
    fisrtplayer.innerHTML = "scissor";
}

function stoneclickopponent() {
    secondplayer.innerHTML = "stone";
}

function paparclickpponent() {
    secondplayer.innerHTML = "paper";
}

function scissorclickpponent() {
    secondplayer.innerHTML = "scissor";
}

function startcomparefunction() {
    if (fisrtplayer.innerHTML == "stone" && secondplayer.innerHTML == "paper") {
        alert("Player Two WIN");
        two.innerHTML++;
    }
    if (fisrtplayer.innerHTML == "paper" && secondplayer.innerHTML == "stone") {
        alert("Player One WIN");
        one.innerHTML++;
    }
    if (fisrtplayer.innerHTML == "scissor" && secondplayer.innerHTML == "paper") {
        alert("Player One WIN");
        one.innerHTML++;
    }
    if (fisrtplayer.innerHTML == "paper" && secondplayer.innerHTML == "scissor") {
        alert("Player Two WIN");
        two.innerHTML++;
    }
    if (fisrtplayer.innerHTML == "scissor" && secondplayer.innerHTML == "stone") {
        alert("Player Two WIN");
        two.innerHTML++;
    }
    if (fisrtplayer.innerHTML == "stone" && secondplayer.innerHTML == "scissor") {
        alert("Player One WIN");
        one.innerHTML++;
    }
    if (fisrtplayer.innerHTML == secondplayer.innerHTML) {
        alert("Draw")
    }
    chooseplayerone.innerHTML = fisrtplayer.innerHTML;
    chooseplayertwo.innerHTML = secondplayer.innerHTML;

}

function changeplayeronefunction() {
    if (skinp1 == 3) {
        skinp1 = 1;
    }else{
        skinp1++;
    }
    imag1.src = "../Picture/Stone ("+skinp1+").jpg"
    imag2.src = "../Picture/Paper ("+skinp1+").jpg"
    imag3.src = "../Picture/Scissor ("+skinp1+").jpg"
}

function changeplayertwofunction() {
    if (skinp2 == 3) {
        skinp2 = 1;
    }else{
        skinp2++;
    }
    imag4.src = "../Picture/Stone ("+skinp2+").jpg"
    imag5.src = "../Picture/Paper ("+skinp2+").jpg"
    imag6.src = "../Picture/Scissor ("+skinp2+").jpg"
}


function resetfunction() {
    one.innerHTML = "";
    two.innerHTML = "";
    chooseplayerone.innerHTML = "";
    chooseplayertwo.innerHTML = "";
}

function keyclick(event) {
    if (event.key == "Enter") {
        startcomparefunction();
    }
    if (event.key == "a") {
        stoneclick();
    }
    if (event.key == "s") {
        paperclick();
    }
    if (event.key == "d") {
        scissorclick();
    }
    if (event.key == "1") {
        stoneclickopponent();
    }
    if (event.key == "2") {
        paparclickpponent();
    }
    if (event.key == "3") {
        scissorclickpponent();
    }
    if (event.key == "r") {
        resetfunction()
    }
    if (event.key == "4") {
        changeplayeronefunction()
    }
    if (event.key == "6") {
        changeplayertwofunction()
    }
}