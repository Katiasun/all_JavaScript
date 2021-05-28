//Funtions

function isLeapYear(year) {
  let isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return isLeapYear;
}

//1.Написать функцию, которя принимает 2 числа и возращает меньшее из них
function getLower(num1, num2) {
  return num1 > num2 ? num2 : num1;

  alert(getLower);
}

let x = +prompt("Enter:");
let y = +prompt("Enter:");

let lowerNumber = getLower(x, y);

//2.Написать функцию, которя выводит переданное число в указанную степень
let getPower = function (num, power) {
  //Такая запись пишется переменная
  return num ** power;
  alert(getPower);
};
getPower(x, y);
