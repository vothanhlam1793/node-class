function add(x, y, cb){
    cb(); // function -> run
    return x + y;
}

function phepcong(){
    console.log("ADD");
}


c = add(9,8, phepcong );

console.log(c);