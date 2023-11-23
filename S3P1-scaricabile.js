function checkType(arg, type)
{
    return typeof(arg) === type? true : false;
}

/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a , b)
{
    if(!checkType(a,'number') || !checkType(a,'number')){
        console.log("crazySum: at least one of the two arguments is not a number type data (arg1 is " + typeof(a) + " and " + "arg2 is " + typeof(b) + ")");
        return -1;
    }

    return a === b ? ( (a+b) * 3) : (a + b);
}
console.log("1a) - " + crazySum(2,3));
console.log("1b) - " + crazySum(4,4));
console.log("1c) - " + crazySum("pi",4));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(a)
{
    if(!checkType(a,'number')){
        console.log("boundary: invalid type argument (" + typeof(a) +" instead of number)");
        return 0;
    }
    return (a >= 20 && a <= 100) || a === 400 ? true : false;
}
console.log("2) - " + boundary(20));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str)
{ 
    if(!checkType(str,'string')){
        console.log("reverseString: invalid type argument (" + typeof(str) +" instead of string)");
        return -1;
    }
    return str.split('').reverse().join('');
}
console.log("3) - " + reverseString("stringa"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) // finire
{
    if(!checkType(str,'string')){
        console.log("upperFirst: invalid type argument (" + typeof(str) +" instead of string)");
        return -1;
    }
  
    let slices = [];
    let s = 0;
    let p = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str.charAt(i) == " " || i+1 >= str.length) {
            
            slices[s] = str.substring(p,i+1);  
            slices[s] = slices[s].replace(" ", "");
            slices[s] = slices[s].charAt(0).toUpperCase() + slices[s].slice(1);
            if(p == 0){
                slices[s] += " ";
            }
            s++;  
            p = i;
        }       
    }

   let final = "";
   for(let i = 0; i < slices.length; i++)
   {
     final = final.concat(slices[i]);
   }
   return final;
}
console.log(upperFirst("4) Ciao Marco, questo esercizio è un rompicapo favoloso."));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n)
{
    let arr = [];
    for(let i = 0; i < n; i++)
    {
        arr[i] = Math.round(Math.random(10)*10);   
    }
    return arr;
}
console.log("5) " + giveMeRandom(20));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(b,h)
{
    if(!checkType(b,'number') || !checkType(h,'number')){
        console.log("area: at least one of the two arguments is not a number type data (arg1 is " + typeof(b) + " and " + "arg2 is " + typeof(h) + ")");
        return -1;
    }

    return 2*(b + h);
}
console.log("EXTRA 1) area is " + area(4,6));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
function crazyDiff(a)
{
    if(!checkType(a,'number')){
        console.log("crazyDiff: invalid type argument (" + typeof(a) +" instead of number)");
        return 0;
    }

    let n = a;
    let diff = n > 19 ? n - 19 : 19 - n; // abs
    return diff > 19 ? diff*3 : diff;
}
console.log("EXTRA 2) crazyDiff is " + crazyDiff(39));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str)
{   
    if(!checkType(str,'string')){
    console.log("codify: invalid type argument (" + typeof(str) +" instead of string)");
    return 0;
    }

    return str.substring(0,4) === "code" ? str : "code " + str;  
}
console.log("EXTRA 3) " + codify("awewe"));



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
function check3and7(a)
{
    if(!checkType(a,'number')){
        console.log("CutString: invalid type argument (" + typeof(a) +" instead of number)");
        return 0;
    }

    return (a % 3 === 0 || a % 7 === 0) ? true : false;
}
console.log("EXTRA 4) " + check3and7(16));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
    Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function CutString(str)
{
    if(!checkType(str,'string')){
        console.log("CutString: invalid type argument (" + typeof(str) +" instead of string)");
        return 0;
    }
    return str.slice(1 , -1);
}

console.log("EXTRA 5) " + CutString("awowo"));

