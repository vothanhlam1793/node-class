function btnAlert(){
    var inpName = document.getElementById('inpName');
    var inpFirstName = document.getElementById('inpFirstName');
    alert("Hello: " + inpName.value + inpFirstName.value);
}

function changeInput(){
    var inpName = document.getElementById('inpName');
    console.log("HEER: " + inpName.value);
}

function btnPhepToan(pt){
    var i1 = document.getElementById('inp1');
    var i2 = document.getElementById('inp2');
    var kq = document.getElementById('kq');
    var x = parseInt(i1.value);
    var y = parseInt(i2.value);

    if(pt == 1){
        kq.innerHTML = x + y;
        return;
    }

    if(pt == 2){
        kq.innerHTML = x - y;
        return;
    }

    if(pt == 3){
        kq.innerHTML = x * y;
        return;
    }

    if(pt == 4){
        kq.innerHTML = x / y;
        return;
    }
}