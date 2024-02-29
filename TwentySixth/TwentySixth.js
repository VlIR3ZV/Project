document.onkeyup = au;
var bmi = document.getElementById("bmi");
var calorie = document.getElementById("calorie");

function cal() {
    var kg = document.getElementById("kg").value;
    var cm = document.getElementById("cm").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var active = document.getElementById("active").value;
    var caloriedata = (kg * 10) + (cm * 6.25) - (age * 5) + (Number(gender))
    caloriedata = caloriedata * Number(active)
    calorie.innerHTML = "Calorie : " + caloriedata
    bmi.innerHTML = "BMI : " + (Math.round(kg / (cm * cm) * 1000000)) / 100;
    if (bmi.innerHTML == "BMI NaN") {
        alert("Fill The Blanket");
        bmi.innerHTML = "";
        calorie.innerHTML = "";
    }
}

function au(event) {
    if (event.key == "Enter") {
        cal();
    }
    if (event.key == "Home") {
        document.getElementById("kg").value = "";
        document.getElementById("cm").value = "";
        document.getElementById("age").value = "";
        bmi.innerHTML = "";
        calorie.innerHTML = "";
    }
}

var kginput = document.getElementById("kginput");
var kgp = document.getElementById("kgp");
var cminput = document.getElementById("cminput");
var cmp = document.getElementById("cmp");
var ageinput = document.getElementById("ageinput");
var agep = document.getElementById("agep");
var gendermaninput = document.getElementById("gendermaninput");
var genderwomaninput = document.getElementById("genderwomaninput");
var genderp = document.getElementById("genderp");
var activitylevel = document.getElementById("activitylevel");
var bmiresultnum = document.getElementById("bmiresultnum")
var bmiresultword = document.getElementById("bmiresultword");
var calorieresultnum = document.getElementById("calorieresultnum");
var gendervalue = 5;

function action(e) {
    var bmiresult = (Math.round((kginput.value / cminput.value / cminput.value) * 1000000)) / 100
    if (bmiresult <= 18.5) {
        bmiresultword.innerHTML = "Your Weight : Slim";
    } else if (bmiresult >= 18.5 && bmiresult <= 24.9) {
        bmiresultword.innerHTML = "Your Weight : Normal Weight";
    } else if (bmiresult >= 25 && bmiresult <= 29.9) {
        bmiresultword.innerHTML = "Your Weight : Over Weight";
    } else {
        bmiresultword.innerHTML = "Your Weight : Obese";
    }

    var ele = document.getElementsByName('gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == "woman") {
                gendervalue = -161;
                genderp.innerHTML = "Gender : Woman";
                gendermaninput.style.margin = "0px -168px 0px 153px";
                genderwomaninput.style.margin = "0px 180px 0px 126px";
            } else {
                gendervalue = 5;
                genderp.innerHTML = " Gender : Man";
                gendermaninput.style.margin = "0px -166px 0px 151px";
                genderwomaninput.style.margin = "0px 162px 0px 105px";
            }
        }
    }

    var calorieresult = (kginput.value * 10) + (cminput.value * 6.25) - (ageinput.value * 5) + (gendervalue);
    calorieresult = Math.round(calorieresult * activitylevel.value * 100) / 100;
    kgp.innerHTML = "KG : " + kginput.value;
    cmp.innerHTML = "CM : " + cminput.value;
    agep.innerHTML = "AGE : " + ageinput.value;
    bmiresultnum.innerHTML = "BMI : " + bmiresult;
    calorieresultnum.innerHTML = "Calorie : " + calorieresult;
}
action();
kginput.addEventListener("change", action);
cminput.addEventListener("change", action);
ageinput.addEventListener("change", action);
gendermaninput.addEventListener("change", action);
genderwomaninput.addEventListener("change", action);
activitylevel.addEventListener("change", action);