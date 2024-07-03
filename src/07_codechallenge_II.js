/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

let Name, Alter ;

Name  = prompt("Geben Sie Ihren Namen ein!!: ");
Alter = parseInt(prompt("Geben Sie Ihren Alter ein!!! "));

// while (Alter<0) {
//     Alter = parseInt(prompt("Geben Sie Ihren Alter ein: "));
// }
console.log("Datentyp: " + typeof Name);
console.log("Datentyp: " + typeof Alter);

// if(Alter>=0 && Alter<=5)
//     {
//     console.log(Name + " " + "trinkt Milch!!");
//     }
// else if (Alter>=6 && Alter<=12){
//         console.log(Name +" " + "trinkt Saft!! ");
//     }
// else if( Alter>=13 && Alter<=17)
//     {
//         console.log(Name + " "+ "trinkt Cola!! ");
//     }
// else{
//     console.log(Name + " " + "trinkt wein" );
// }

//  ++++++++    Switch case ++++++

// Alter = Number(Alter>=0 && Alter<=5) //" trinkt Milch";
// Alter = Number(Alter>=6 && Alter<=12) //" trinkt saft";
// Alter = Number(Alter>=13 && Alter<=17) //" trinkt Cola";
// Alter = Number(Alter>=18) //"trinkt Wein";
switch (Alter) {
    case (Alter>=0 && Alter<=5
        
    ):
        console.log(Name + " "+ " trinkt Milch")
        break;
    case (Alter>=6 && Alter<=12):
        console.log(Name + " " + " trinkt Saft");
        break;
    case (Alter>=13 && Alter<=17):
        console.log(Name + " " + "trinkt Cola");
        break;
    case (Alter>=18):
        console.log(Name + " "+ " trinkt Wein");
        break;
    default:
        console.log("Never executes");
        // Alter = parseInt(prompt("Geben Sie Ihren Alter ein!!! "));
        break;
}
         