function sumValues() {
	return 3 + 2;
}

console.log(sumValues());

let val1 = 15;
let val2 = 12;

// function sumParameters(val1, val2) {
// 	return val1 + val2;
// }

sumParameters = (val1, val2) => { // Stessa funzione precedente con la sintassi arrow function
    return val1 + val2;
}

console.log(sumParameters(4, 6));
console.log(sumParameters(12, 8));
console.log(sumParameters('Hello ', 'World'));
console.log(sumParameters(3, true));
console.log(sumParameters('testo', 4));
console.log(sumParameters());
console.log(sumParameters(val1, val2));
console.log(sumParameters(8, sumValues()));

// Verifica form
const valueAge = document.getElementById('age');
const btnSend = document.getElementById('send');
const verify = document.getElementById('verify');

document.addEventListener('load', init());

function init() {
    btnSend.addEventListener('click', function(e) {
        e.preventDefault();
        if (checkAge(valueAge.value)) {
            printAge(valueAge.value);
            clearForm();
        } else {
            printError();
            return;
        }
    });
}

function checkAge(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}

function printAge(value) {
    verify.innerText = 'La tua età è: ' +  value;
}

function printError() {
    verify.innerHTML = '<span style="color: red;">Devi compilare il campo età!</span>';
}

function clearForm() {
    valueAge.value = '';
}
