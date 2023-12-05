// APP.js
console.log("Hello World");

var count = 0;

function chuyendoiso(d){
    if(d < 10){
        return "0" + d;
    } else {
        return d;
    }
}

function dongho(){
    var dh = document.getElementById("dongho");
    setInterval(function(){
        var d = new Date();
        dh.innerHTML = chuyendoiso(d.getHours()) + ":" + chuyendoiso(d.getMinutes()) + ":" + chuyendoiso(d.getSeconds()) ;
    }, 100);
}

dongho();