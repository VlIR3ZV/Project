var maincontainer = document.getElementById("maincontainer");
var items = document.getElementById("items");
var totalp = document.getElementById("totalp");
var purchasebtn = document.getElementById("purchasebtn").addEventListener("click", () => {
    items.innerHTML = "";
    calculatetotalprice();
})
var i = 1;
var container = [{
        id: "Door 1",
        src: "../Picture/Door (1).jpg",
        price: 9.99
    }, {
        id: "Door 2",
        src: "../Picture/Door (2).jpg",
        price: 4.99
    },
    {
        id: "Door 3",
        src: "../Picture/Door (3).jpg",
        price: 3.99
    },
    {
        id: "Door 4",
        src: "../Picture/Door (4).jpg",
        price: 19.99
    }
]
var firstLoop = document.createDocumentFragment();
for (let w = 0; w < container.length; w++) {
    var div = document.createElement("div");
    var p1 = document.createElement("p");
    var input = document.createElement("img");
    var p2 = document.createElement("p");
    var button = document.createElement("button");
    var containerbr = document.createElement("br");
    p1.innerHTML = container[w].id;
    p2.innerHTML = "$" + container[w].price;
    button.innerHTML = "Add";
    div.setAttribute("id", container[w].id);
    input.setAttribute("src", container[w].src);
    button.setAttribute("class", "btn");
    button.addEventListener("click", () => {
        addprice(container[w].src, container[w].price, container[w].id)
    });
    div.append(p1, input, p2, button);
    firstLoop.append(div);
    if (w / 2 == Math.floor(w / 2)) {
        div.style.margin = "21px 98px 0px 0px"
    } else {
        firstLoop.append(containerbr);
    }
}
maincontainer.append(firstLoop);

function addprice(picture, value, name) {
    var maindiv = document.createElement("div");

    maindiv.insertAdjacentHTML("afterbegin", '<img src="' + picture + '" class="sizeofitempicture">' + name + '')
    var createpricep = document.createElement("p");
    var createquantityinput = document.createElement("input");
    var createquantitybutton = document.createElement("button");
    var br = document.createElement("br");
    maindiv.setAttribute("id", i)
    createpricep.setAttribute("class", "item");
    createquantityinput.setAttribute("type", "number");
    createquantityinput.setAttribute("class", "input");
    createquantityinput.setAttribute("value", "1");
    createpricep.setAttribute("id", createquantityinput.value);
    createquantitybutton.setAttribute("class", "removebutton")
    createquantitybutton.setAttribute("onclick", "remove" + "(" + i + ")")
    createquantityinput.addEventListener("change", () => {
        calculatetotalprice(createquantityinput.value, createpricep)
    })
    createpricep.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $" + value;
    createquantitybutton.innerHTML = "Remove";
    items.append(maindiv)
    maindiv.append(createpricep)
    maindiv.append(createquantityinput)
    maindiv.append(createquantitybutton, br)
    i++;
    calculatetotalprice();
}

function remove(data) {
    var removebtn = document.getElementById(data);
    removebtn.innerHTML = "";
    calculatetotalprice();
}

function calculatetotalprice(valueforpid, pidtag) {
    var allpelemnt = document.getElementsByTagName("p");
    var num1 = 0;
    if (valueforpid == undefined) {} else {
        pidtag.id = valueforpid;
    }
    for (let q = 11; q < allpelemnt.length; q++) {
        var num = Number((allpelemnt[q].innerHTML.split("$")[1]));
        var time = Number((allpelemnt[q].id));
        num1 = (Math.round((((num * time)) + num1) * 100)) / 100
    }
    totalp.innerHTML = "Total : $" + num1;
}