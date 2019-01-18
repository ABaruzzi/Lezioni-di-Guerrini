/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function calcolaPotenza(numero, esponente, div) {

    let risultato = numero;

    if ((esponente * 1) === 0) {
        risultato = 1;
    }
    for (let i = 0; i < esponente - 1; i++) {
        risultato = risultato * numero;
    }
    div.innerHTML = risultato;
}

function calcolaSomma(numero1, numero2, div) {

    let risultato = (numero1 * 1) + (numero2 * 1);
    div.innerHTML = risultato;
}


function creaListaBr(array) {

    var ris = "";
    for (let i = 0; i < array.length; i++) {
        ris += "# " + (i + 1) + ".) " + array[i] + "<br/>";
    }

    return ris;
}


function creaListaPuntata(array) {

    var ris = "";
    for (let i = 0; i < array.length; i++) {
        ris += "<li> " + ") " + array[i] + "<br/>";
    }

    ris = "<ol>" + ris + "<ol>";
    return ris;
}

