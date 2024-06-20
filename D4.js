/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 3 *****');

function crazyDiff(num) {
	let diff = Math.abs(num - 19);
	let multiply = 0;
	if (num > 19) {
		multiply = Math.abs(num - 19) * 3;
	}

	if (multiply > 0) {
		console.log(
			'La differenza è ' + diff + ' e moltiplicata per tre da ' + multiply
		);
	} else {
		console.log('La differenza è ' + diff);
	}
}

crazyDiff(10);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 5 *****');

/* 1. dichiarare la funzione
2. controllare se la stringa inizia con EPICODE
3. se sì, restituire la stringa
4. se no, aggiungere EPICODE all'inizio della stringa*/

function epify(string) {
    if(string.indexOf('EPICODE') === 0) {
        return string;
    } else {
        return 'EPICODE ' + string;
    }
}

console.log(epify('EPICODE batch FS0624'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 5 *****');

/*
1. dichiarare la funzione
2. splittare la stringa agli spazi
3. estrarre il primo carattere di ogni parola
4. rendere maiuscolo il carattere
5. tagliare ogni parola eliminando il primo carattere
6. unire il carattere maiuscolo alla parola tagliata
7. pushare la parola trasformata in un nuovo array
*/

function upperFirst(string) {
    string = string.toLowerCase();
    let words = string.split(' ');
    console.log(words);
    let final = [];
    for (let i = 0; i < words.length; i++) {
        let first = words[i].charAt(0);
        first = first.toUpperCase();
        let cut = words[i].substring(1);
        let newWord = first + cut;
        final.push(newWord);
    }
    console.log(final.join(' '));
}

upperFirst('oggi è il venti giugno duemilaventiquattro e siamo in aula per il corso epicode');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
