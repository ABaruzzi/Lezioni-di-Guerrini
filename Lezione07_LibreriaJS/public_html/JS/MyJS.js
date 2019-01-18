/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function faiCubo() {

    let numero3 = document.getElementById("valore").value;
    let elevatura = document.getElementById("elevato").value;
    let ris = 0;
    ris = calcolaCubo(numero3, elevatura);
    document.getElementById("risCubo").innerHTML = ris;
}

var ar_nomi = [];
var ar_nomiLibreria = [];
var ar_nomiLista = [];

function aggiungiNome() {
    let nome = document.getElementById("in_nome").value;
    ar_nomi.push(nome);
    let textListaNomi = "";
    for (let i = 0; i < ar_nomi.length; i++) {
        textListaNomi += "--" + (i + 1) + ".) " + ar_nomi[i] + "<br/>";
    }

    document.getElementById("listaNomi").innerHTML = textListaNomi;
}


function aggiungiNomeLibreria() {

    let nome = document.getElementById("in_nome").value;
    ar_nomiLibreria.push(nome);
    let textListaNomiLibreria = creaListaBr(ar_nomiLibreria);
    document.getElementById("listanomi2").innerHTML = textListaNomiLibreria;
}

function aggiungiNomeLista() {

    let nome = document.getElementById("in_nome").value;
    ar_nomiLista.push(nome);
    let textListaNomiLista = creaListaPuntata(ar_nomiLista);
    document.getElementById("listanomi3").innerHTML = textListaNomiLista;
}
