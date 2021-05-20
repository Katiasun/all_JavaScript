// Задания, в которых необходимо использовать IF

// 1
// let num = +prompt("Enter number:");
// if (num > 0) {
//   alert(`positive number`);
// } else if (num < 0) {
//   alert(`Число отрицатлкьное`);
// } else {
//   alert(`число равно нулю`);
// }

// 2
// let num=+prompt("Enter your age:");
// if (0<num && num <120){
//     alter (`Correct`)
// } else{
//     alert("Incorrect")
// }

// 3
//  let num=+prompt("Enter number:");
//  alert(math.abs(num));

// 4
// let hours = +prompt("Enter hours");
// let min = +prompt("Enter minutes");
// let sec = +prompt("Enter seconds");

// if (0 <= hours && hours < 24 && 0 <= min && min < 60 && 0 <= sec && sec < 60) {
//     alert("Correct");
// } else {
//     alert("Incorrect");
// }

// 5
// let x = +prompt("Enter x:");
// let y = +prompt("Enter y:");
// if (x > 0 && y > 0) {
//   alert(" I fourth");
// } else if (x < 0 && y > 0) {
//   alert("II fourth");
// } else if (x < 0 && y < 0) {
//   alert("III fourth");
// } else if (x > 0 && y < 0) {
//   alert("IV fourth");
// }
// else if (x==0 || y==0) {
//   alert("Start of the coodinate line:");
// }

// Задания, в которых необходимо использовать SWITCH.
// 1
// let month = +prompt("Month number:");
// if (month < 0 && month < 13) {
//   switch (month) {
//     case 1:
//       alert("January");
//       break;
//     case 2:
//       alert("February");
//       break;
//     case 3:
//       alert("March");
//       break;
//     case 4:
//       alert("May");
//       break;
//     case 5:
//       alert("June");
//       break;
//     case 6:
//       alert("Jule");
//       break;
//     case 7:
//       alert("August");
//       break;
//     case 8:
//       alert("September");
//       break;
//     case 9:
//       alert("October");
//       break;
//     case 10:
//       alert("");
//       break;
//     case 11:
//       alert("");
//       break;
//     case 12:
//       alert("");
//       break;
//   }
// } else {
//   alert("Incorrect");
// }

// 2
// let num_1 = +prompt("Enter first number:");
// let num_2 = +prompt("Enter second number:");
// let num_3 = prompt("Enter nathematical operation:");

// switch (sign) {
//   case "+":
//     alert(num_1 + num_2);
//     break;
//   case "-":
//     alert(num_1 - num_2);
//     break;
//   case "*":
//     alert(num_1 * num_2);
//     break;
//   case "/":
//     alert(num_1 / num_2);
//     break;
// }

// Задания, в которых необходимо использовать тернарный
// оператор.

// 1

// let num_1 = +prompt("Enter first number:");
// let num_2 = +prompt("Enter second number:");
// let num_3 = (num_1>num_2) ? alert(num_1):alert(num_2);

// 2
// let num = +prompt("Enter number:");
// let resuly = (num %5 == 0) ? alert("Yes") : alert("No");

// 3
// let planet = prompt("Enter your planet");
// let result =
//   planet == "Земля" || planet == "земля"
//     ? alert("Привет, землянин!")
//     : alert("Привет, инопланетянин!");
