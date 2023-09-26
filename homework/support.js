function chialaydu(n, m) {
    var ret = 0;
    for (var j = 0; j <= n; j = j + m) {
        ret = n - j;
    }
    return ret;
}

module.exports.chialaydu = chialaydu;