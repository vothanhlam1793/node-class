function chuyenthanh2so(x){
    // 0 1 2 3 ... 9 => 00 01 
    if(x < 10){
        return "0" + x;
    } else {
        // 
        return x;
    }
}

function run(h, m, s){
    var h1 = document.getElementById('strTime'); // => DOM 

    h1.innerHTML = chuyenthanh2so(h) + ":" + chuyenthanh2so(m) + ":" + chuyenthanh2so(s);
}
setInterval(function(){

    // Moi => Lay tu source
    var a = new Date();
    var h = a.getHours();
    var m = a.getMinutes();
    var s = a.getSeconds();

    run(h,m,s);
}, 1000);