//node .prompt
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let ziffer1, ziffer2, Zahl1,Zahl2, summe;

ziffer1 = prompt("Geben Sie eine Zahl ein: ");
ziffer2 = prompt("Geben Sie eine Zahl2 ein: ");

console.log("Datentyp: " + typeof ziffer1);
console.log("Datentyp: " + typeof ziffer2);


//let Zahl1 = parseFloat(prompt("Zahl1?: "));
//let Zahl2 = parseFloat(prompt("Zalhl2? "));
Zahl1 = parseFloat(ziffer1);
console.log("Datentyp: " + typeof Zahl1);
Zahl2 = parseFloat(ziffer2);
console.log("Datentyp: " + typeof Zahl2);


summe = Zahl1 + Zahl2 ;

console.log("Die Summe der Zahlen ist: summe " + summe);