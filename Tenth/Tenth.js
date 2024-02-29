var minis = 1;
var s = 0;
var m = 0;
var h = 0;

function active(event) {
    if (event.key == " ") {
        alert("Stop");
    } else {
        setInterval(
            function time() {
                minis = minis + 1
                if (minis > 10) {
                    s++;
                    minis = 1;
                }
                if (m < 60) {
                    if (s == 60) {
                        s = (s = 0)
                        m = (m + 1)
                    }
                }
                if (h < 60) {
                    if (m == 60) {
                        m = (m = 0)
                        h = (h + 1)
                    }
                }
                var t = [h + ":" + m + "':" + s + '"' + minis]
                var time = document.getElementById("timer")
                time.innerHTML = t
            }, 100
        )
    }
}