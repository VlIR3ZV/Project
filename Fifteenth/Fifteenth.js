var captcha = "qwertyuiopasdfghjlzxcvbnm1234567890!@#$%^&*"

var totalnum = "";
for (var i = 0; i < 20; i++) {
    var test = Math.floor(Math.random() * 44)
    var number = captcha.charAt(test);
    totalnum += number
}
var question = prompt(totalnum);
if (question == totalnum) {
    var div = document.getElementsByTagName("h1")[0];
    div.style.display = "block"
} else {
    var div = document.getElementsByTagName("h1")[1];
    div.style.display = "block"
}