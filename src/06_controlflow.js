// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

/*if (isJohnOlder){
  console.log("John is Older ");
}*/



/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein


/*if (isJohnOlder)
{

    console.log("John is Older ");
}
else
 {
    console.log("John is younger: ");
}*/

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");
//console.log( (isJohnOlder) ? " John is Older : Mark is Older ");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)


if (isJohnOlder)
{
    console.log("John is Older ");
}
else if (isJohnEqual)
{
    console.log("John is equal to Mark ");
}
else
{
     console.log("John is younger : ");
}