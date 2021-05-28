//1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function getNumbers (num1,num2) {
//     let num1 = +prompt("Enter number num1:");
//     let num2 = +prompt("Enter number num2:");

//     if (num1 < num2){
//   console.log(-1);
// } else if (num1 > num2){
//   console.log(1);
// } else (num1==num2){
//     console.log(0);
// }
// }

//2.Написать функцию, которая вычисляет факториал переданного ей числа.
// function calcFactorial (number){
//     let answer=1;
//     for (let i=1; i<=number; i++){
//         answer *=i;
//     }
//     alert (answer)
// }
// calcFactorial ();

//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// function threeNumbers (a,x,y){
//     return a+x+y;
// }
//     let number1= +prompt ("Enter number 1:");
//     let number2= +prompt ("Enter number 2:");
//     let number3= +prompt ("Enter number 3:");

//    let allNumber=threeNumbers(a,x,y);

//4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// function calcRectangle (w,h){
//     return w*h;
// }
//  let width= +prompt ("Enter width of rectangle:");
//  let high = +prompt ("Enter high of rectangle:");

//   let area=calcRectangle(w,h);

//   alert (area);

//5.Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//  Совершенное число – это число, равное сумме всех своих собственных делителей.

// function isPerfectNumber (inputNumber){
//     let sum=0;

//     for (let i=1; i< inputNumber; i++){
//         if (inputNumber % i ===0){
//             sum +=i;
//         }
//     }
//     if (sum== inputNumber){
//         return true;
//     }
//     else {
//         return false;
//     }
//     alert (sum);
// }

//6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными.
//  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// function isPerfectNumber (inputNumber){
//     let sum=0;

//     for (let i=1; i< inputNumber; i++){
//         if (inputNumber % i ===0){  //16%1===0;16%2===0;
//             sum +=i;                //0+1=1; 1+2=3;
//         }
//     }
//     if (sum== inputNumber){
//         return true;
//     }
//     else {
//         return false;
//     }
//     alert (inputNumber);
// }

// function minAndMax(min, max){
// for (let i= Math.min (min,max); i<= Math.min (min,max); i++){
//     if (isPerfectNumber (i)===true){
//         alert (`${i}`)
//     }

// }
// }

//7. Написать функцию, которая принимает время (часы, минуты, секунды) и
// выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы,
// то выводить их как 00.
function getDateFormat(time) {
  return time.toString().padStart(2, "0");
}
function getTime(hour = 0, min = 0, sec = 0) {
  return `${getDateFormat(hour)}:${getDateFormat(min)}:${getDateFormat(sec)}`;
}
console.log(getTime(23, 26, 59));

//8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function changedTime(hour = 0, min = 0, sec = 0) {
  let secondsInMinutes = 60 * min;
  let minutesInHours = hour * 60;
  let secondsInHours = minutesInHours * 60;

  let sum = secondsInHours + secondsInMinutes + sec;
  return sum;
}
console.log(changedTime(60, 20, 10));

//9.Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function getSeconds(sec) {
  let seconds = sec % 60;
  let minutesTotal = (sec - seconds) / 60;
  let myMinutes = minutesTotal % 60;
  let hours = (minutesTotal - myMinutes) / 60;
  return getTime(hours, myMinutes, seconds);
}
console.log(getSeconds(800));

//10.Написать функцию, которая считает разницу между датами.
//  Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
//  При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах,
// а потом разницу переведите обратно в «чч:мм:сс»
function getTimeDifference(hour1, min1, sec1, hour2, min2, sec2) {
  let timeOne = changedTime(hour1, min1, sec1);
  let timeTwo = changedTime(hour2, min2, sec2);

  let changedBetweenOfTime = timeOne - timeTwo; //sec
  return `The difference is: ${getSeconds(changedBetweenOfTime)}`;
}
console.log(getTimeDifference(25, 39, 45, 19, 12, 31));
