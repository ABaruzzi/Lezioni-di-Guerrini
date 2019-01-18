/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function faiPotenza(){
    let primoValore = document.getElementById("valore1").value;   
    let secondoValore = document.getElementById("valore2").value;
    let div = document.getElementById("risultato");
    
    calcolaPotenza(primoValore,secondoValore,div);    
}

function faiSomma(){
    let primoValore = document.getElementById("valore1").value;   
    let secondoValore = document.getElementById("valore2").value;
    let div = document.getElementById("risultato");
    
    calcolaSomma(primoValore,secondoValore,div);    
}


