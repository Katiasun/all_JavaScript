// 1
let yourName = prompt("Enter you name:");
alert(`Привет, ${yourName}`);

// 2
let age = +prompt("Enter year of your birth:");
const thisYear = 2021;
alert(`Your age: ${thisYear - age}`);

// 3
let side = +prompt("Enter the side of the square: ");
alert(`Perimeter of a square: ${4 * side}`);

// 4
let radius = +prompt("Enter radius:");
alert(`area of a circle: ${3.14 ** radius}`);

// 5
let km = +prompt("Enter kilometers:");
let time = +prompt("Enter time:");
alert(`Your speed: ${km / time}`);

// 6
let dollar = +prompt("Enter dollar:");
const euro = 0.82;
alert(`Convector: ${dollar * euro}`);

// 7
let flash_drive = +prompt("Enter the size of the flash drive:");
const memory = 820;
alert(`Number of files to move: ${(flash_drive * 1024) / memory}`);

// 8
let myMoney = +prompt("Enter amount of money:");
let chocolatePrice = +prompt("Enter chocolate price:");
alert(`Number of my chocolates: ${myMoney / chocolatePrice}`);

let change = myMoney % chocolatePrice; //ОСТАТОК
let numberOfChocolate = (myMoney - change) / chocolatePrice;
alert(`Остаток денег: ${change},  Количество шоколадк: ${numberOfChocolate}`);
// 9
let threDigitNumber = +prompt("Enter three digit number:"); //356
let lastNumber = threDigitNumber % 10; //6
let lastTwo = threDigitNumber % 100; //56
let secondNumber = (lastTwo - lastNumber) / 10; //5
let firstNumber = (threDigitNumber - lastTwo) / 100; //3
let reversedNumber = lastNumber * 100 + secondNumber * 10 + firstNumber;

// 10
let sum = +prompt("Enter your sum:");
const percent = 5 / 100;
let profit = sum * (percent / 12) * 2;
