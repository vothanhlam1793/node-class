function changeMoney(y) {

    var inp1 = document.getElementById('usd2vnd');
    var inp2 = document.getElementById("vnd2usd");
    var vnd = document.getElementById("vnd");
    var usd = document.getElementById("usd");

    var tigia = 24560;
    if (y == 1) {
        if (inp1.value != '') {

            a = parseInt(inp1.value) * tigia
            inp2.value = a
            vnd.innerHTML = a
            usd.innerHTML = inp1.value
        }
        else {
            inp2.value = a

            vnd.innerHTML = 0
            usd.innerHTML = inp2.value

        }


    } else {
        if (inp2.value != '') {
            b = parseInt(inp2.value) / tigia
            inp1.value = b
            vnd.innerHTML = inp2.value
            usd.innerHTML = b
        }
        else {
            inp1.value = 0

            vnd.innerHTML = 0
            usd.innerHTML = inp1.value
        }
    }
}