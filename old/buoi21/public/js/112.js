function giaiphuongtrinh (){
    var gta = document.getElementById('giatria');
    var gtb = document.getElementById('giatrib');
    var gtc = document.getElementById('giatric');
    var a = parseInt(gta.value);
    var b = parseInt(gtb.value);
    var c = parseInt(gtc.value);
    var ret = "";
    if(a==0){
        if(b ==0 && c ==0){
            ret = "Phương trình có vô số nghiệm";
        };
        if(b ==0 && c!=0){
            ret = "Phương trình vô nghiệm";
        };
        if(b!=0 && c !=0){
            x= -c/a;
           ret =  "Phương trình hệ bậc nhất có nghiệm là: "+ x;
        }
    } 
        if(a!=0){
                    //a khác 0, phương trình bậc 2;
        var denta = b*b -4*a*a*c;
        if(denta<0){
           ret = "Phương trình bậc 2 vô nghiệm";
        };
        if(denta == 0){
            x=-b/(2*a);
           ret = "Phương trình bậc 2 có nghiệm kép: "+ "X1 = X2 =" + x;
        };
        if (denta>0){
            x1 = (-b + Math.sqrt(denta)/(2*a));
            x2 = (-b - Math.sqrt(denta)/(2*a));
            ret = "Phương trình bậc 2 có nghiệm là:"+ "X1 = " + x1 + "X2 = " + x2;

        }
        }
    var kq = document.getElementById('kq');
    kq.innerHTML = ret;
};