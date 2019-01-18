/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_nomi = [];
var ar_valori = [];

//var ar_nomi = ["verdi","giallo","rossi","verdi"];
//var ar_valori = [23,23,4,23,423,4,99,62,347,3];


function prepoutput() {
    var tot = 0;
    let textDonazioni = "";
    let totDonazioni = 0;
    for (var i = 0; i < ar_nomi.length; i++) {
        textDonazioni = textDonazioni + "<span id= don " + i + '>   # ' + (i + 1) + "   " + ar_nomi[i] + " ha donato " + ar_valori[i] + " Euro!" + "<br>";
        tot = tot + ar_valori[i] * 1;
    }
    document.getElementById("lst_donazioni").innerHTML = textDonazioni;
    document.getElementById("in_elemCanc").max = ar_nomi.length;
    document.getElementById("in_elemCanc").min = 1;
    document.getElementById("totale").innerHTML = tot;



}

function addDonazione() {
    //Carico gli array
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_valori.push(document.getElementById("in_valore").value);
    prepoutput();

}

function undo() {
//Scarico gli Array
    ar_nomi.pop();
    ar_valori.pop();
    prepoutput();
}

function cancella() {
    var elem = document.getElementById("in_elemCanc").value - 1;
    ar_nomi.splice(elem, 1);
    ar_valori.slice(elem, 1);
    prepoutput();


}
function modifica() {
    var elem = document.getElementById("in_elemCanc").value - 1;
    var nom = document.getElementById("in_nomeMod").value;
    var don = document.getElementById("in_valoreMod").value;
    ar_nomi.splice(elem, 1, nom);
    ar_valori.splice(elem, 1, don);
    prepoutput();

}

function cerca() {
    let nome_ricercato = document.getElementById("in_nome").value;
    let continua = true;
    let i = 0;
    while (continua === true) {
        if (nome_ricercato === ar_nomi[i])
        {
         document.getElementById("risultato_cerca").innerHTML=ar_valori[i];   
            continua = false;
        } else {
            i++;
        }
        if (i>=ar_nomi.length){
            document.getElementById("risultato_cerca").innerHTML= "Nessun Risultato"; 
            continua=false;
        }      
    }
}