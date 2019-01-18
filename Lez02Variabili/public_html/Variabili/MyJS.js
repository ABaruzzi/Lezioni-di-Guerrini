/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var num1;
var num2;
var risultato;
var montepremio = 0;
var okDati;

function isVuota(testo) {
    if (testo.length > 0) {
        return false;
    } else {
        return true;
    }
}
function checkDati() {
    if (isNaN(num1) || isNaN(num2) || isVuota(num1) || isVuota(num2)) {
        return false;
    } else {
        return true;
    }
}

function faseInput() {
    num1 = document.getElementById("numone").value;
    num2 = document.getElementById("numtwo").value;
    okDati = checkDati();
    if (okDati === true) {
        num2 = parseFloat(num2);
        num1 = parseFloat(num1);
    } else {
        alert("Dati inseriti non validi");
    }
}

function faseOutput() {
    document.getElementById("total").innerHTML = risultato;
    document.getElementById("montepremi").innerHTML = montepremio;
}


function calcola(op) {
    faseInput();
    if (okDati === true) {
        if (op === "+") {
            risultato = num1 + num2;
        }
        if (op === "-") {
            risultato = num1 - num2;
        }
        if (op === "*") {
            risultato = num1 * num2;
        }
        if (op === "/") {
            risultato = num1 / num2;
        }
        if (op === "sqrt"){
            risultato = Math.sqrt(num1);
        }
        

        montepremio = montepremio + risultato;
        faseOutput();

    }
}
