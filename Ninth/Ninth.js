var first = 0;

for (i = 0; i < 5; i++) {
    function second() {
        var second = prompt("Write Your Number For Plus")
        third = second % 10
        forth = (second - third) / 10
        second = second / 100
        second = (Math.trunc(second)) * 100
        forth = forth * 10 - second
        forth = forth / 10
        second = second / 100
        fifth = (second * 100)
        fifth = ((Math.floor(second / 10)) * 1000) / 1000
        seventh = ((second * 100) - fifth * 1000) / 100
        eighth = (seventh * 100) + (forth * 10) + third + (fifth * 1000)
        ninth = ((Math.floor(fifth / 10)) * 1000) / 1000
        fifth = fifth % 10
        tenth = (Math.floor(second / 1000))
        ninth = (Math.abs((tenth * 10) - ninth))
        eleventh = (Math.floor(second / 10000))
        tenth = (Math.abs((eleventh * 10) - tenth))
        twelfth = (Math.floor(second / 100000))
        eleventh = (Math.abs((twelfth * 10) - eleventh))


        thirteenth = (Math.floor(second / 1000000))
        twelfth = (Math.abs((thirteenth * 10) - twelfth))

        fourteenth = (Math.floor(second / 10000000))
        thirteenth = (Math.abs((fourteenth * 10) - thirteenth))

        fifteenth = (Math.floor(second / 100000000))
        fourteenth = (Math.abs((fifteenth * 10) - fourteenth))

        sixteenth = (Math.floor(second / 1000000000))
        fifteenth = (Math.abs((sixteenth * 10) - fifteenth))

        seventeenth = (Math.floor(second / 10000000000))
        sixteenth = (Math.abs((seventeenth * 10) - sixteenth))

        eighteenth = (Math.floor(second / 100000000000))
        seventeenth = (Math.abs((eighteenth * 10) - seventeenth))

        nineteenth = (Math.floor(second / 1000000000000))
        eighteenth = (Math.abs((nineteenth * 10) - eighteenth))

        sixth = seventh + forth + third + fifth + ninth + tenth + eleventh + twelfth + thirteenth + fourteenth + fifteenth + sixteenth + seventeenth + eighteenth + nineteenth

        alert(sixth)
    }
    second();
    if(isNaN(sixteenth)){
        alert("Please Write Number");
        i=10;
    }
}