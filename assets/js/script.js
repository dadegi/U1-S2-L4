function sumValues() {
	return 3 + 2;
}

console.log(sumValues());

let val1 = 15;
let val2 = 12;

// function sumParameters(val1, val2) {
// 	return val1 + val2;
// }

sumParameters = (val1, val2) => {
	// Stessa funzione precedente con la sintassi arrow function
	return val1 + val2;
};

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
	btnSend.addEventListener('click', function (e) {
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
	verify.innerText = 'La tua età è: ' + value;
}

function printError() {
	verify.innerHTML =
		'<span style="color: red;">Devi compilare il campo età!</span>';
}

function clearForm() {
	valueAge.value = '';
}

// Verifica codice fiscale
let codFis = 'DLGDRA67R20F839V';
let birthDay = '20';
let birthYear = '1967';
let gender = 'M';
let fiscalYear;
let fiscalDay;

checkPositions();
extractFiscalCode();
checkFiscalCode();

function checkPositions() {
	if (gender === 'F') {
		birthDay = birthDay + 40;
	}

	const dayPosition = codFis.indexOf(birthDay, 7);
	if (dayPosition === -1) {
		console.log('Il giorno non corrisponde');
		return;
	}

	const yearPosition = codFis.indexOf(birthYear.substring(birthYear, 2), 5);
	if (yearPosition === -1) {
		console.log("L'anno non corrisponde");
		return;
	}
}

function extractFiscalCode() {
	fiscalYear = codFis.substring(6, 8);
	fiscalDay = codFis.substring(9, 11);
}

function checkFiscalCode() {
	if (fiscalDay === birthDay && birthYear.substring(2) === fiscalYear) {
		console.log('Il codice fiscale è corretto');
	} else {
		console.log('Codice fiscale errato!');
	}
}

let myNumber = Math.floor(Math.random() * 10) + 1;
console.log('Il numero casuale generato è ' + myNumber);

let dateNow = new Date();
console.log(dateNow);
// Conversione in formato locale
let options = { 'weekday': 'long', 'month': 'long', 'day': '2-digit' };
var date = new Date().toLocaleString('it-IT', options);
console.log(date);
// dateNow.setFullYear(1994);
// console.log(dateNow);

let myBirthday = new Date(1967, 9, 20);
console.log(myBirthday);

const myDate = document.getElementById('dateNow');
let myMonth;
let myDay;

switch (dateNow.getMonth()) {
	case 0:
		myMonth = 'Gennaio';
		break;

	case 1:
		myMonth = 'Febbraio';
		break;

	case 2:
		myMonth = 'Marzo';
		break;

	case 3:
		myMonth = 'Aprile';
		break;

	case 4:
		myMonth = 'Maggio';
		break;

	case 5:
		myMonth = 'Giugno';
		break;

	case 6:
		myMonth = 'Luglio';
		break;

	case 7:
		myMonth = 'Agosto';
		break;

	case 8:
		myMonth = 'Settembre';
		break;

	case 9:
		myMonth = 'Ottobre';
		break;

	case 10:
		myMonth = 'Novembre';
		break;

	case 11:
		myMonth = 'Dicembre';
		break;
}

switch (dateNow.getDay()) {
	case 0:
		myDay = 'Domenica';
		break;

	case 1:
		myDay = 'Lunedì';
		break;

	case 2:
		myDay = 'Martedì';
		break;

	case 3:
		myDay = 'Mercoledì';
		break;

	case 4:
		myDay = 'Giovedì';
		break;

	case 5:
		myDay = 'Venerdì';
		break;

	case 6:
		myDay = 'Sabato';
		break;
}

myDate.innerText =
	'Oggi è ' +
	myDay +
	' ' +
	dateNow.getDate() +
	' ' +
	myMonth +
	' ' +
	dateNow.getFullYear();
