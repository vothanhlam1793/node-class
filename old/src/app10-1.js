var i = 0;
function hienthi(h, m, s){
    var h1 = document.getElementById('strTime'); // => DOM 
    h1.innerHTML = chuyenthanh2so(h) + ":" + chuyenthanh2so(m) + ":" + chuyenthanh2so(s);
}
function chuyenthanh2so(x){
    // 0 1 2 3 ... 9 => 00 01 
    if(x < 10){
        return "0" + x;
    } else {
        // 
        return x;
    }
}


/* 
    i = 0 -> vc (1s/lan) => 
    hh:mm:ss
    ss % 1
    mm % 60
    hh % 3600

    i / 3600 => hh (lay int)
    i % 3600 => mm / 60 (lay int)
    i % 3600 => mm % 60 (lay ss)

*/

function chuyengiaythanhgio(s){
    var h = Math.floor(s / 3600);
    var t1 = s - h*3600;
    var m = Math.floor( t1 / 60);
    var s = t1 - m*60;

    return {
        h: h,
        m: m,
        s: s
    }
}
var i = 0;
var state = "START";
var iX;
function btnState(){
    if(state == "START"){
        // Chuc nang START
        var b1 = document.getElementById('btnState'); // => DOM 
        b1.innerHTML="Dừng"
        b1.className="btn1"

        // run interval
        iX = setInterval(function(){
            var o = chuyengiaythanhgio(i);
            hienthi(o.h, o.m, o.s);
            i = i + 1;
        }, 100);

        state = "STOP";
    } else {
        // Chuc nang STOP
        var b1 = document.getElementById('btnState'); // => DOM 
        b1.innerHTML="Bắt đầu";
        b1.className="btn";
        
        clearInterval(iX);

        state = "START";
    }
}

function btnClear(){
    i = 0;
    var o = chuyengiaythanhgio(i);
    hienthi(o.h, o.m, o.s);
}