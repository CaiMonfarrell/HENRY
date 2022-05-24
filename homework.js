'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    // var numero = toString(num);
    // var decimal = 0;
    // for (var i = 0; i < numero.length; i++) {
    //     if (numero[i] === 1) {
    //         decimal = decimal + Math.pow(2, i)
    //     }
    //     return numero;
    // }
    let sumatoria = 0;
    for (let i = 0; i < num.length; i++) {
        sumatoria = sumatoria + num[i] * 2 ** (num.length - 1 - i)
    }
    return sumatoria;
}

function DecimalABinario(num) {
    // tu codigo aca
    let str = "";
    while (num > 0) {
        let resto = num % 2;
        str = resto + str;
        num = Math.floor(num / 2)
    }
    return str;
}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}