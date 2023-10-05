var count = 0;
function countup(){
    var p = document.getElementById('demo');
    p.innerHTML = Date();
}

function hello(){
    console.log("Hello World");
}

setInterval(countup, 1000);
