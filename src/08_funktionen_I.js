
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

function ausgabeNamen2( firstName) {
   
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente
const prompt = require('prompt-sync')({sigint: true});
ausgabeNamensParams(prompt("Vorname?:"),prompt("Nachname:? "));

function ausgabeNamensParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + " !");
}