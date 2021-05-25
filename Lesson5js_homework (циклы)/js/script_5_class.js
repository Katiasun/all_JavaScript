//1.Запросить дату (день, месяц,год)г вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяй, год, а также высокосный год
const day = +prompt("Enter the day:");
const month = +prompt("Enter the month:");
const year = +prompt("Enter the year:");

let daysInMonth = 31;
if (month === 4 || month === 6 || month === 9 || month === 11) {
  daysInMonth = 30;
}
if (month === 2) {
  const isLeapYear = year % 400 || (year % 4 === 0 && year% !==0);
  daysInMonth=isLeapYear? 29:28;
}
const isCorrectDate = day>= 1 && day <= daysInMonth && month>=1 && month<= 12 && year>0;
if (isCorrectDate){
    let nextDateDay = day+1;
    let nextDateMonth= month;
    let nextDateYear=year;

    const isLastDayOfMonth = day===daysInMonth;
    const isLastDayOfYear= isLastDayOfMonth && month==12;

    if (isLastDayOfMonth){
        nextDateDay=1;
        nextDateMonth= month+1;
    }
    if (isLastDayOfYear){
        nextDateMonth=1;
        nextDateYear= year+1;
    }
    alert (`Next date is: ${nextDateDay} . ${nextDateMonth}.${nextDateYear}`)
    else{
        alert(`The day is invalid!`); 
    }
}



//Задания, в которых необходимо использовать WHILE.


//1.Вывести # столько раз, сколько указал пользователь.
const number= +prompt("Enter the number:");

let i=1;
let result= "";
while(i<=number){
    result +="#";
    i++;
}
alert (result);

//2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
const number= +prompt("Enter number:");
let i=number;
let result= "";

while(i>=0){
result += `${i} `;
i--;
}
alert(result);

//3.Запросить число и степень. Возвести число в указанную степень и вывести результат.
let number= +prompt("Enter number:");
const power= +prompt("Enter power:");

let i=0;
let result=1;

while(i < power){
result= result*number;
i++;
}
alert(result);

//4.Запросить 2 числа и найти все общие делители.
const number1= +prompt("Enter number1:");
const number2= +prompt("Enter number2:");

let i=1;

const min=Math.min(number1, number2);
let result= "";

while(i<=min){
    if (number1 % i===0 && number2 % i===0){
        result+= `${i}`;
    }
i++;
}
alert (result);


//5. Посчитать факториал введенного пользователем числа.
const number= +prompt("Enter number:");

let i=1;

let result= 1;
while(i<= number){
    result *= i;
    i++;
}

alert (result);




//Задания, в которых необходимо использовать DO WHILE.

//1.Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

let isRight=false;
do {
    const answer= +prompt("What is the solution of 2 + 2 * 2?");
    if (answer===6){
        isRight=true;
    }
} while(!isRight);

//2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.







//Задания, в которых необходимо использовать FOR.

//1.Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
const number= +prompt("Enter number:");

for (let i=1; i<=100; i++){
 if (i%number===0){
     console.log (i);
 }
}


//Practice
//1.let result = (a+b<4) ? Malo : Mnogo ;
//2.
 let message= (login == "Sotrudnik") ? "Hi" : (login== "Direktor")
? "Hello" : (login=="") ? "Nie ma loginu" : "";








