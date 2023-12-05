var b = 0
function chuyenSo(x) {

    if (x < 10) {
        return "0" + x
    } else {
        return x
    }
}


function clickmouse() {
    var data = new Date()
    document.getElementById('dongho').innerHTML = chuyenSo(data.getHours()) + ":" + chuyenSo(data.getMinutes()) + ":" + chuyenSo(data.getSeconds())

}

function run(x, y, z) {
    document.getElementById("bamgio").innerHTML = x + ":" + y + ":" + z
}

function chuyenTime(t) {

    var x = Math.floor(t / 3600)

    var y = Math.floor((t % 3600) / 60)
    var z = t - (x * 3600 + y * 60)

    return { h: x, m: y, s: z }
}
function runTimeclock() {

    if (b > 0) {
        var o = chuyenTime(b)
        b -= 1
        run(chuyenSo(o.h), chuyenSo(o.m), chuyenSo(o.s))
    } else {
        var o = chuyenTime(b)
        run(chuyenSo(o.h), chuyenSo(o.m), chuyenSo(o.s))
        clearInterval(timerX)
        document.getElementById('BtnStart').innerHTML = "Bắt đầu"
        document.getElementById('BtnStart').className = "btn"
        clickBtn = true
        if (clickBtnde == false) {
            document.getElementById('audioElement').play()
        } else {
            clickBtnde = false
        }
    }
}
var clickBtn = true
var timerX;
var clickBtnde = false
function startTime() {
    if (b > 0) {
        if (clickBtn) {
            timerX = setInterval(runTimeclock, 100)
            clickBtn = false
            document.getElementById('BtnStart').innerHTML = "Dừng"
            document.getElementById('BtnStart').className = "btnstop"
            document.getElementById('BtnDelete').hidden = true
        } else {
            clearInterval(timerX)
            clickBtn = true
            document.getElementById('BtnStart').innerHTML = "Tiếp tục"
            document.getElementById('BtnStart').className = "btncontinue"
            document.getElementById('BtnDelete').hidden = false
        }
    }
}
function BtnClear() {
    document.getElementById('BtnStart').innerHTML = "Bắt đầu"
    document.getElementById('BtnStart').className = "btn"
    document.getElementById('BtnDelete').hidden = true
    b = 0
    clickBtnde = true
    runTimeclock()
}
function BtnPut() {
    b = 0
    var hour = Math.floor(document.getElementById('hour').value)
    var min = Math.floor(document.getElementById('minute').value)
    var sec = Math.floor(document.getElementById('sec').value)
    b = hour * 3600 + min * 60 + sec
    var o = chuyenTime(b)
    // console.log(o)
    run(chuyenSo(o.h), chuyenSo(o.m), chuyenSo(o.s))
}
setInterval(clickmouse, 1000)