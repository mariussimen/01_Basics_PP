
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


//  Funktionsaufruf | call
// test();

// Funktionrumpf | callee
// Funktionsdeklaration
function test()
{

    console.log("Hallo Marius!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
// ausgabeNamen()

// Funktion
function ausgabeNamen() {
    // interne Variable | what happens in VEGAS ....
    let firstName = "Marius";

    console.log("Hallo " + firstName + "!");
}
// console.log(firstname) Fehler : Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Arian");// Argument ---> Daten für Parameter
// ausgabeNamen2("Maxime");
// ausgabeNamen2("Saba"); 

function ausgabeNamen2(firstName) {
   
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente
// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamensParams(prompt("Vorname?:"),prompt("Nachname:? "));

function ausgabeNamensParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + " !");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

// ausgabeNamenSRP("Max", "Mütze");

function ausgabeNamenSRP(firstName, familyName) {
    //  1. Funktionalität string composing
    const GAP= " ";
    let oputputStr = "Hallo," + firstName + GAP + familyName + "!";

    // 2. Funktionalität: String composing
    console.log(oputputStr);    
}

/***** Funktionen 03b *****/

 // 1. Funktionalität: string composing
 output(getString("max","Mütze"));

function getString(firstName, familyName) {
    const GAP =" ";
    let oputputStr = "Hallo," + firstName + GAP + familyName + "!";
    return oputputStr; // return schickt die Daten an den call---
    console.log("hi")// nach Return wird die Funktion abgebrochen
}
// 2. Funktionalität: string output
// output("Hi!");
// output(2);
// output(true);


function output(outputData) {
    console.log(outputData);
 }
