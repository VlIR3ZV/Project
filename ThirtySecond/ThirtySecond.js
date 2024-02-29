let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let name = prompt("Enter Your Value");
let randomAlphabet = null;
let equalNum = 0;
let num = 0;
let i = 0
let randomNameInP = document.getElementById("randomNameInP");
let randomAlphabetP = document.getElementById("randomAlphabetP");
for (; i < name.length; i++) {
    alphabet.forEach(elem => {
        if (name[i].toLowerCase() === elem) {
            equalNum++;
        }
    })
}
let action = setInterval(() => {
    randomAlphabet = Number(Math.floor(Math.random() * alphabet.length))
    if (alphabet[randomAlphabet] == name[num].toLowerCase()) {
        randomNameInP.innerHTML += alphabet[randomAlphabet];
        name.length === num + 1 && clearInterval(action), randomAlphabetP.innerHTML = null;
        num++;
    } else {
        randomAlphabetP.innerHTML = alphabet[randomAlphabet];
    }
}, 70)
if (equalNum !== name.length) {
    clearInterval(action), alert("Invalid");
}