
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */



/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                // word5 + GAP +
                // word6 + GAP +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/****** 02. Theorie: Array  */

let arr;
// arr = new Array(); //Komstruktor
//  arr = []; // Literal
arr =[2,12,5,2,3];

output(arr);
output(arr.length);// Anzahl der Elemente
output(arr[0]); // Index 0 (1. Pos. im Array)
output(arr[arr.length-1]); // letzte Pos. / allgemein