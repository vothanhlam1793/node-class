var count = 0;
function countup(){

    // Selector
    var p = document.getElementById('demo'); // => DOM 


    p.innerHTML = Date();
    console.log(count++);
}

function countup1(){

    // Selector
    var p = document.getElementById('demo');
    p.innerHTML = Date();
    console.log("COUL " + count++);
}
function hello(){
    console.log("Hello World");
}

setInterval(countup, 1000);
setInterval(countup1, 500);
console.log("Xin chao nhé!");
