/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var arrayVoti = [];
var arrayCognomiStudenti = [];
var arrayVotiStudenti = [];




function buongiorno() {
    let nome = document.getElementById("in_nome").value;
    let cognome = document.getElementById("in_cognome").value;
    let textSaluto = "Buongiorno " + nome + " " + cognome + " " + "é una bellissima giornata oggi!";

    document.getElementById("saluto").innerHTML = textSaluto;
}

function promosso() {
    let nome = document.getElementById("in_nome").value;
    let cognome = document.getElementById("in_cognome").value;
    let voto = document.getElementById("votoStudente").value;
    let sufficienza = document.getElementById("suff").value;

    if (isNaN(voto * 1)) {
        alert("Non hai scritto un Numero. Riprova");
        document.getElementById("valutazioneFinale").value = "";
        document.getElementById("votoStudente").value = "";
    } else if (isNaN(sufficienza * 1)) {
        alert("Non hai scritto un Numero. Riprova");
        document.getElementById("valutazioneFinale").value = "";
        document.getElementById("suff").value = "";
    } else if (voto >= sufficienza) {
        document.getElementById("valutazioneFinale").innerHTML = "Il candidato " + nome + " " + cognome + " è stato promosso con una valutazione finale di " + voto;
    } else {
        document.getElementById("valutazioneFinale").innerHTML = "Il candidato " + nome + " " + cognome + " è stato miseramente bocciato!!!";
    }
}

function promossoCaps() {
    let nome = document.getElementById("in_nome").value;
    let cognome = document.getElementById("in_cognome").value;
    let voto = document.getElementById("votoStudente").value;
    let sufficienza = document.getElementById("suff").value;
    let text = "";

    if (isNaN(voto * 1)) {
        alert("Non hai scritto un Numero. Riprova");
        document.getElementById("valutazioneFinale").value = "";
        document.getElementById("votoStudente").value = "";
    } else if (isNaN(sufficienza * 1)) {
        alert("Non hai scritto un Numero. Riprova");
        document.getElementById("valutazioneFinale").value = "";
        document.getElementById("suff").value = "";
    } else if (voto >= sufficienza) {
        text = "Il candidato " + nome + " " + cognome + " è stato promosso con una valutazione finale di " + voto;
    } else {
        text = "Il candidato " + nome + " " + cognome + " è stato miseramente bocciato!!!";
    }
    document.getElementById("valutaziionFinaleCaps").innerHTML = text.toUpperCase();
}

function salvaVoto() {
    let voto = document.getElementById("votoStudente").value;
    let textMedia = "";
    arrayVoti.push(voto * 1);
    let somma = 0;

    for (let i = 0; i < arrayVoti.length; i++) {
        somma = somma + arrayVoti[i];
    }

    textMedia = "Numero Voti Inseriti: " + (arrayVoti.length) * 1 + " Media Voti Inseriti: " + somma / arrayVoti.length;
    document.getElementById("media").innerHTML = textMedia;
}

function aggiungiNominativo() {
    let voto = document.getElementById("votoStudente").value;
    let cognome = document.getElementById("in_cognome").value;
    arrayVotiStudenti.push(voto);
    arrayCognomiStudenti.push(cognome);
    let somma = 0;

    for (let i = 0; i < arrayVotiStudenti.length; i++) {
        somma = somma + arrayVotiStudenti[i] * 1;
    }

    textMedia = "Numero Voti Inseriti: " + (arrayVotiStudenti.length) * 1 + " Media Voti Inseriti: " + somma / arrayVotiStudenti.length + "<br/><br/>";

    textListaVoti = "";

    for (let i = 0; i < arrayVotiStudenti.length; i++) {
        textListaVoti = textListaVoti + "#" + (i + 1) + ".) " + arrayCognomiStudenti[i] + " --- " + arrayVotiStudenti[i] + "<br/>";
    }

    let maxVoto = maxArray(arrayVotiStudenti);
    let migliorStudente = "";

    for (let i = 0; i < arrayVotiStudenti.length; i++) {
        if (maxVoto === arrayVotiStudenti[i]) {
            migliorStudente = arrayCognomiStudenti[i];
        }

    }
    textMaxVoto = " e il voto più grande è: " + maxVoto + " ottenuto da: " + migliorStudente;

    document.getElementById("listaVoti").innerHTML = textMedia + textListaVoti + textMaxVoto;
}

function maxArray(arr) {
    return Math.max.apply(null, arr);
}








