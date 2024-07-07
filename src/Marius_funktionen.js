

const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_DIV = "you can't solve this equation ";
const ERROR = "Somethings goes wrong !!!!";



startOperator()
function startOperator() {
    output( "The result is " + calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {

let num = parseInt(prompt("Please can you give a number!!!:"));

while (isNaN(num)) {

    num = parseInt(prompt("Please can you give a number!!!:"));
}
 return num;
}

function getNum2() {

    let num3 = parseInt(prompt("please can you give a second number !!!:"));
    
    while (isNaN(num3)) {

        num3 = parseInt(prompt("please can you give a second number !!!:"));
    }
    
   return num3;
}
function getOp() {

return prompt("plaese select a operator!!!:");

}

// calculator 
function calculator(a,b,op) {
    switch (op) {
        case "+":
           return add(a,b);
        case "-":
          return subtract(a,b);
        case "*":
         return multiply(a,b);
        case":":
        case"/":
        return divide(a,b)
        case "%":
            return modulo(a,b);
        default:
            return ERROR;
    }
}



// dividieren a:b oder a/b;
function divide(a,b) {
    if (b==0){
        return ERROR_STR_DIV;
    }
    else {
        return a/b;
    }
}

// Modulo a%b;
function modulo(a,b) {
    return a%b;
}
// Multiplikation a*b;
function multiply(params) {
    return a*b;
}


// Substract a- b;
function subtract(a,b) {
    return a - b;
}


// addieren a+b | test :
function add(a,b) {
    return a+b;
}



function output(outputData) {
    console.log(outputData);
}