
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */



/**
 *   PRAXIS
 * 
 */
/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) 
// {
// //    output(i); 
//    output(arr[i]);// Mapping 
// }



/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 // word5 + GAP +
//                 // word6 + GAP +
//                 PUNCT;

//     return str;
// }




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/****** 02. Theorie: Array  */

// let arr;
// // arr = new Array(); //Komstruktor
// //  arr = []; // Literal
// arr =[2,12,5,2,3];

// output(arr);
// output(arr.length);// Anzahl der Elemente
// output(arr[0]); // Index 0 (1. Pos. im Array)
// output(arr[arr.length-1]); // letzte Pos. / allgemein


/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// output(getSentence(["Ich","bin","die","coole","Maxine","Mützerich"]));
// // function getSentence(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + GAP +
//                 PUNCT;

//     return str;
// }

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

//     Inkrement ( untere grenze --> obere Grenze)
// for (let i= 10; i <=100; i+=5) {   // i --> Schleifen - index
//    output(i);
    
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i>0; i--) {
//     output(i);
    
// }

/*** 01b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...
output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
output(getSentenceArr2([192,168,10,25]))
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = " ";
//     // 1 Iteration: Struktur  Genau berzeugen
//    for (let i = 0; i < arr.length; i++) 
//     if (i != arr.length - 1 ){// wenn du noch nicht am Ende des Arrays bist .... 
//         str += arr[i] + GAP; // entweder;
//        }else {
//         str += arr[i] + PUNCT; // oder ;
//        }
//     return str ;

//    2 Variante: Struktur erzeugen + trimmen()
 for (let i = 0; i < arr.length; i++) {

       str += arr[i] + GAP;
    
 }
//   return str.trim() + PUNCT;
  // 3 Varianten: Ausnutzen  von generischen Funktionen.....
  return arr.join(GAP) + PUNCT;
}

/********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */

// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    a += 1; // a = a + 1
//    output("inhalt von a: " + a);
// }

// 1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
// Solange die Variable existiert, bleibt dieser erhalten
// hier: Verkettung eines Strings // Transponierung
// */

// let str = ""; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    str += "Test" + " "; // a = a + 1
//    output(str);
// }
