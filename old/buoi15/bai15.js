// OBJECT FUNCTION
var obj = {
    a: 1,
    b: 2, 
    c: 3,
    mix: function (x, y) {
        return x*y;
    }
}

function add(x, y){
    return x + y;
}
var d = obj.mix(6,7);

// CALLBACK FUNCTION
function runTime(cb){
    setTimeout(function(){
        cb("Lam", 30);
    }, 2000);
    setTimeout(function(){
        cb("Black", 35);
    }, 5000);
}

runTime(function(name, age){
    console.log("Hello: " + name + " - Age: " + age);
});

console.log("EXTERNAL");