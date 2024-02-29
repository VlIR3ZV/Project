document.onkeydown = keyboard;
var addtaskbtn = document.getElementById("addtaskbtn");
var collectionp = document.getElementById("collectionp")
var tasktextname = document.getElementById("tasktextname");
var tasktextdescription = document.getElementById("tasktextdescription");
var numforclass = 1;
var tasksinlocalstorage = [];
var parselocalstorage = JSON.parse(localStorage.getItem("local"));
for (let i = 0; i < parselocalstorage.length; i++) {
    tasksinlocalstorage.push(parselocalstorage[i])
}
for (let i = 0; i < tasksinlocalstorage.length; i++) {
    var taskdiv = document.createElement("div");
    var completetask = document.createElement("button");
    var deletetask = document.createElement("button");
    var taskpname = document.createElement("p");
    var taskpdescription = document.createElement("p");
    taskdiv.setAttribute("id", "taskdiv")
    taskpname.setAttribute("id", "Stylepname")
    taskpdescription.setAttribute("id", "Stylepdescription")
    completetask.setAttribute("id", "Stylecomplete")
    deletetask.setAttribute("id", "Styledelete")
    taskpname.setAttribute("class", numforclass)
    taskpdescription.setAttribute("class", numforclass)
    completetask.innerHTML = "Complete";
    deletetask.innerHTML = "Delete";

    completetask.setAttribute("onclick", "clicktocomplete(" + numforclass + ")")
    deletetask.setAttribute("onclick", "clicktodelete(" + numforclass + ")")
    taskpname.innerHTML = tasksinlocalstorage[i].nametask
    taskpdescription.innerHTML = tasksinlocalstorage[i].description
    collectionp.append(taskdiv);
    taskdiv.append(taskpname);
    taskdiv.append(taskpdescription);
    taskdiv.append(completetask);
    taskdiv.append(deletetask);

    if (tasksinlocalstorage[numforclass - 1].statue == "complete") {
        completetask.style.display = "none";
        taskpname.style.color = "red";
        taskpdescription.style.color = "red";
    } else {

    }
    numforclass++;
}

function addtask() {
    var taskdiv = document.createElement("div");
    var completetask = document.createElement("button");
    var deletetask = document.createElement("button");
    var taskpname = document.createElement("p");
    var taskpdescription = document.createElement("p");

    if (tasktextdescription.value == "") {
        alert("Fill Out The Blanket")
        return false
    }
    if (tasktextname.value == "") {
        alert("Fill Out The Blanket")
        return false
    } else {}
    taskdiv.setAttribute("id", "taskdiv")
    taskpname.setAttribute("id", "Stylepname")
    taskpdescription.setAttribute("id", "Stylepdescription")
    completetask.setAttribute("id", "Stylecomplete")
    deletetask.setAttribute("id", "Styledelete")
    taskpname.setAttribute("class", numforclass)
    taskpdescription.setAttribute("class", numforclass)
    completetask.innerHTML = "Complete";
    deletetask.innerHTML = "Delete";
    completetask.setAttribute("onclick", "clicktocomplete(" + numforclass + ")")
    deletetask.setAttribute("onclick", "clicktodelete(" + numforclass + ")")

    var idtaskinlocalstorage = tasksinlocalstorage.length + 1;
    var nametaskinlocalstorage = tasktextname.value;
    var descriptiontaskinlocalstorage = tasktextdescription.value;
    var statuetaskinlocalstorage = "incomplete";
    collectionp.append(taskdiv);
    taskdiv.append(taskpname);
    taskdiv.append(taskpdescription);
    taskdiv.append(completetask);
    taskdiv.append(deletetask);
    taskpname.innerHTML = tasktextname.value;
    taskpdescription.innerHTML = tasktextdescription.value;
    tasksinlocalstorage.push({
        "id": idtaskinlocalstorage,
        "nametask": nametaskinlocalstorage,
        "description": descriptiontaskinlocalstorage,
        "statue": statuetaskinlocalstorage
    })
    localStorage.setItem("local", JSON.stringify(tasksinlocalstorage));
    tasktextname.value = "";
    tasktextdescription.value = "";
    numforclass++;
}

function clicktocomplete(numforclass) {
    let a = document.getElementsByTagName("p")[numforclass * 2];
    console.log(numforclass);
    a.style.color = "red";
    let b = document.getElementsByTagName("p")[numforclass * 2 - 1];
    b.style.color = "red";
    let c = document.getElementsByTagName("button")[numforclass * 2 - 1];
    c.style.display = "none";
    let maintaskindexcomplete = tasksinlocalstorage.findIndex((task) => {
        return task.id === numforclass
    })
    tasksinlocalstorage[maintaskindexcomplete].statue = "complete";
    localStorage.setItem("local", JSON.stringify(tasksinlocalstorage))
}

function clicktodelete(numforclass) {
    let s = document.getElementsByTagName("div")[numforclass + 1];
    s.style.display = "none";
    let maintaskindex = tasksinlocalstorage.findIndex((task) => {
        return task.id === numforclass
    })
    tasksinlocalstorage.splice(maintaskindex, 1)
    localStorage.setItem("local", JSON.stringify(tasksinlocalstorage))
}

function keyboard(event) {
    if (event.code == "Enter") {
        addtask();
    }
    if (event.code == 'Delete') {
        var deleteall = confirm("Are you sure you want to delete all tasks?")
        if (deleteall === true) {
            var deletealltaskdiv = document.getElementsByTagName("div");
            for (let i = 2; i < deletealltaskdiv.length; i++) {
                deletealltaskdiv[i].style.display = "none";
            }
            localStorage.clear();
            tasksinlocalstorage = [];
        } else {}
    }
}