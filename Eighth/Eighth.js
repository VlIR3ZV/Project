for (var i = 0; i < 5; i++) {
    var first = prompt("Write Your First Number");
    var second = prompt("Write Your Second Number");
    var total = first ** second
    if (total == 1) {
        alert("Please Write Number");
        i = 10;
    }
    if (isNaN(total)) {
        alert("Please Write Number");
        i = 10;
    }
    alert(total)
}