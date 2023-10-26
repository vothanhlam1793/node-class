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
    console.log(pt);
    var i1 = document.getElementById('inp1');
    var i2 = document.getElementById('inp2');

    
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
    // console.log(ret);
}


function giaiphuongtrinh(){
    // INPUT
    var iA = document.getElementById('inpA');
    var iB = document.getElementById('inpB');
    var iC = document.getElementById('inpC');
    
    // OUTPUT
    var kq = document.getElementById('kq');

    // CHUYEN CHUOI THANH SO
    var a = parseInt(iA.value);
    var b = parseInt(iB.value);
    var c = parseInt(iC.value);

    var ret = ""; // KHAI BAO BIEN LAN DAU

    if(a == 0){
        // PTB1: Bx + C = 0
        if(b == 0){
            // PTB1: C = 0
            if(c == 0){
                ret = "Phương trình vô số nghiệm";
            } else {
                ret = "Phương trình vô nghiệm"
            }
        } else {
            // PTB1: Bx + C = 0 <=> Bx = -C <=> x = -C/B
            var x = -c / b;
            ret = "Phương trình bậc 1 có nghiệm X = " + x;
        }

    } else {
        // PTB2
        var denta = b*b - 4*a*c;

        if(denta < 0){
            ret = "Phương trình vô nghiệm";
        } else {

        }

        if(denta==0){
            ret = "Phương trình có nghiệm kép: X1 = X2 = " + (-b/(2*a));
        } else {

        }

        if(denta > 0){
            var x1 = ((-b + Math.sqrt(denta))/(2*a));
            var x2 = ((-b - Math.sqrt(denta))/(2*a));
            ret = "Phương trình có 2 nghiệm: <br>X1 = " + x1 + "<br>X2 = " + x2;
        } else {

        }

    }

    kq.innerHTML = ret;
}