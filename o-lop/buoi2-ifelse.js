/*
    INPUT   : 
    PROCESS :
    OUTPUT  :

*/


function ham(/*INPUT*/){
    // PROCESS


    return //OUTPUT;
}


function min(x, y){
    if(x < y){
        // TRUE
        return x;
    } else {
        // FALSE
        return y;
    }
}

function max3so(x, y, z){
    if(x > y){
        // TRUE
        if(x > z){
            // TRUE
            return x;
        } else {
            // FALSE
            return z;
        }
    } else {
        // FALSE
        if(y > z) {
            // TRUE
            return y;
        } else {
            // FALSE
            return z;
        }
    }
}

console.log("MIN: " + max3so(1500,1600,2000));