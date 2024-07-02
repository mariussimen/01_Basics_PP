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

let Zahl1 = parseFloat(prompt("Zahl1?: "));
let Zahl2 = parseFloat(prompt("Zalhl2? "));

/*console.log("Datentyp: " + typeof Zahl1);
console.log("Datentyp: " + typeof Zahl2);*/


let summe = Zahl1 + Zahl2 ;

console.log("Die Summe der Zahlen ist: summe " + summe);