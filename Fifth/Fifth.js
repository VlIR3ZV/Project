var firstdiv = document.getElementById("firstdiv")
var seconddiv = document.getElementById("seconddiv")
var thirddiv = document.getElementById("thirddiv");
var loginpassword = document.getElementById("passwordlogin");
var loginemail = document.getElementById("emaillogin");
var forgotUsername = document.getElementById("forgetpassword");
var forgotemail = document.getElementById("forgetemail");
var createuser = document.getElementById("createuser");
var createemail = document.getElementById("createemail");
var createpassword = document.getElementById("createpassword");
let validWordsForGmail = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "@", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var allUsersInfo = [];
var dbVersion = 1;
var db = null;
var i = 0;
createIndexDB();

function account() {
    firstdiv.style.display = "block";
    seconddiv.style.display = "none";
    thirddiv.style.display = "none";
}

function forget() {
    firstdiv.style.display = "none";
    seconddiv.style.display = "block";
    thirddiv.style.display = "none";
}

function create() {
    firstdiv.style.display = "none";
    seconddiv.style.display = "none";
    thirddiv.style.display = "block";
}

function logintest(event) {
    event.preventDefault();
    var indexLogin = -1;
    if (allUsersInfo.find((username) => {
            indexLogin++;
            return username.email == loginemail.value && username.password == loginpassword.value;
        })) {
        {
            alert(allUsersInfo[indexLogin].username);
            loginemail.value = "";
            loginpassword.value = "";
        }
    } else {
        alert("Invali Email or UserID")
    }
}

function forgettest(event) {
    event.preventDefault();
    if (forgotemail.value.includes("@") == false) {
        alert("Enter a Valid Gmail")
    } else {
        var indexForgot = -1;
        if (allUsersInfo.find((username) => {
                indexForgot++;
                return username.email == forgotemail.value && username.username == forgotUsername.value;
            })) {
            {
                alert(allUsersInfo[indexForgot].password);
                forgotUsername.value = "";
                forgotemail.value = "";
            }
        } else {
            alert("Invali Email or UserID")
        }
    }
}

function createtest(event, equalNum) {
    event.preventDefault();
    if (allUsersInfo.find((username) => {
            return username.username == createuser.value
        })) {
        alert("Try Another Username");
        return false
    }
    if (allUsersInfo.find((username) => {
            return username.email == createemail.value
        })) {
        alert("You Have Registered");
        return false
    }
    if (equalNum !== createemail.value.length || createemail.value.length <= 20 || !createemail.value.includes("@")) {
        alert("Enter valid gmail");
        createemail.value = "";
        return false
    }
    if (createpassword.value.length <= 8) {
        alert("Your Password At Least Should Be 8 Character");
        return false
    } else {
        createIndexDB();
        alert("Your Account Created");
        addInfoToDB();
    }
}

function createIndexDB() {
    var indexDBCreate = indexedDB.open("website", dbVersion);
    indexDBCreate.addEventListener("upgradeneeded", (e) => {
        db = e.target.result
        if (!db.objectStoreNames.contains("userInfo")) {
            db.createObjectStore("userInfo", {
                keyPath: "userID"
            })
        } else {}
    })
    indexDBCreate.addEventListener("success", (e) => {
        db = e.target.result;
        getUserInfoFromDB();
    })
    dbVersion++;
}

function addInfoToDB() {
    var newUserInfo = {
        userID: i++,
        username: createuser.value,
        email: createemail.value,
        password: createpassword.value
    }
    createuser.value = "";
    createemail.value = "";
    createpassword.value = "";
    var AttributesDB = db.transaction('userInfo', 'readwrite');
    var storeDB = AttributesDB.objectStore("userInfo");
    storeDB.add(newUserInfo);
}

function getUserInfoFromDB() {
    var AttributesDBGetUser = db.transaction('userInfo', 'readwrite');
    var storeDBGetUser = AttributesDBGetUser.objectStore("userInfo");
    var request = storeDBGetUser.getAll();
    allUsersInfo = [];
    request.addEventListener("success", (e) => {
        e.target.result.forEach(element => {
            allUsersInfo.push(element);
            i++;
        });
    })
}

function deleteIndexDBStore(event) {
    var AttributesDBDeleteUser = db.transaction('userInfo', 'readwrite');
    var storeDBDeleteUser = AttributesDBDeleteUser.objectStore("userInfo");
    if (event.altKey === true) {
        storeDBDeleteUser.delete(Number(event.key));
        getUserInfoFromDB()
    }
    if (event.key === "Delete") {
        var deleteAllDB = storeDBDeleteUser.getAll();
        deleteAllDB.addEventListener("success", (allDeleteParam) => {
            allDeleteParam.target.result.filter((remove) => {
                storeDBDeleteUser.delete(Number(remove.userID))
            })
            getUserInfoFromDB();
        })
    }
}

function security(event) {
    var equalNum = 0;
    for (var c = 0; c < createemail.value.length; c++) {
        validWordsForGmail.forEach(elem => {
            if (createemail.value[c].toLowerCase() === elem) {
                equalNum++;
            }
        })
    }
    createtest(event, equalNum)
}
document.addEventListener("keyup", deleteIndexDBStore)