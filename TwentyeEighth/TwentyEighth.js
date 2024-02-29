var all = [{
        id: 1,
        name: "Amir"
    },
    {
        id: 2,
        name: "Mahdi"
    },
    {
        id: 3,
        name: "Hassan"
    },
    {
        id: 4,
        name: "Mahan"
    },
    {
        id: 5,
        name: "Mohammad"
    },
    {
        id: 6,
        name: "AmirMahdi"
    },
    {
        id: 7,
        name: "Ali"
    },
    {
        id: 8,
        name: "Alireza"
    },
    {
        id: 9,
        name: "Amirhosein"
    },
    {
        id: 10,
        name: "Amirali"
    },
    {
        id: 11,
        name: "Taha"
    },
    {
        id: 12,
        name: "Reza"
    },
    {
        id: 13,
        name: "Mohammadreza"
    },
    {
        id: 14,
        name: "Amirmohammad"
    },
    {
        id: 15,
        name: "Abolfazl"
    },
    {
        id: 16,
        name: "Samyar"
    },
    {
        id: 17,
        name: "Aria"
    },
    {
        id: 18,
        name: "Kian"
    }
]
var div = document.getElementById("div")
var currentpage = 1;
var dividepage = 5;

function createelemetp() {
    div.innerHTML = "";
    var lastcurrentpage = currentpage * dividepage;
    var firstcurrentpage = lastcurrentpage - dividepage;
    var contentshow = all.slice(firstcurrentpage, lastcurrentpage);
    for (let i = 0; i < contentshow.length; i++) {
        var item = document.createElement("p");
        item.innerHTML = contentshow[i].name;
        div.appendChild(item);
    }
}

function createbtn() {
    var numberofbtncreate = Math.ceil(all.length / dividepage)
    for (var k = 0; k < numberofbtncreate; k++) {
        let btn = document.createElement("button");
        btn.setAttribute("id", k + 1)
        div.appendChild(btn);
        btn.innerHTML = k + 1;
        if (currentpage == k + 1) {
            btn.classList.add("active")
        }
        btn.addEventListener("click", () => {
            currentpage = btn.id;
            createelemetp();
            createbtn();
        })
    }
}
createelemetp();
createbtn();