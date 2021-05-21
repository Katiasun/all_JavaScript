//ZAD
let java = prompt("Какое «официальное» название JavaScript?");
if (java == `ECMAScript`) {
  alert(`True`);
} else {
  alert(`Не знаете? ECMAScript!`);
}

//ZAD
let num = +prompt("Enter number:");
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

//ZAD
let age = prompt("Enter your age:");
if (age >= 14 && age <= 90) {
  alert(``);
}

//ZAD
let age = prompt("Enter your age:"); //НЕ находится в диапазоне 14 и 90 включительно
if (!(age >= 14 && age <= 90)) {
}

if (age < 14 || age > 90); //НЕ находится в диапазоне 14 и 90 включительно. без этого оператора"!"

//ZAD
let password = prompt("Enter your password:");

if (password == `Admin`) {
  let pass = prompt("Пароль?");
  if (pass == "Я главный") {
    alert(`Здравствуйте!`);
  } else if (pass == " " || pass == null) {
    alert(`Отменено`);
  } else {
    alert(`Неверный пароль`);
  }
} else if (password == " " || password == null) {
  alert(`'Отменено'`);
} else {
  alert(`Я вас не знаю`);
}

//HOMEWORK
//Запросить у пользователя его возраст и определить кем он явдяется...

let age= +prompt (" Enter your age:");

if ( age>0 || age=<2) {
  alert ("A child");
}else if (age>=12 || age<18){
  alert ("A teenager");
} else if (age>=18 || age<=60){
  alert ("An adult");
} else if (age>60){
  alert ("A pensioner");
}

// Запросить у пользователя число от 0-9 и вывести ему спецсимвол...
let num = prompt("Enter number:");
if (num == 1) {
  alert("!");
}
if (num == 2) {
  alert("@");
}
if (num == 3) {
  alert("#");
}
if (num == 4) {
  alert("$");
}
if (num == 5) {
  alert("%");
}
if (num == 6) {
  alert("^");
} if (num == 7) {
  alert("&");
} if (num==8){
  alert ("*");
} if (num==9){
  alert ("(")
}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры
let number = prompt("Введите трехзначное число: ");
let num_1 = number / 100;
let num_2 = (number / 10) % 10;
let num_3 = number % 10;
if (num_1 == num_2 || num_1 == num_3 || num_2 == num_3) {
  alert("Найдено совпадение цифр");
} else {
  alert("Совпадений не найдено");
}

// Запросить у пользователя год и проверить высокосный или нет
let year= +prompt("Enter year:");
if (year==(366%4)){
  alert(`Год высокосный`);
} else if (year== !(365%4)){
  alert ("Год невысокосный");
}

//Написать конвертор валют
let suma = +prompt("Enter USD:");

let eur = 0.82;
let uan = 27.42;
let azn = 1.7;
if (suma/eur){
  alert(`EUR`:);
} else if (suma/uan){
  alert (`UAN:`);
} if (suma/azn){
  alert (`AZN:`);
}
