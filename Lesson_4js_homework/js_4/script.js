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

let age = +prompt(" Enter your age:");

if (age > 0 && age <= 2) {
  alert("A child");
} else if (age >= 12 && age < 18) {
  alert("A teenager");
} else if (age >= 18 && age <= 60) {
  alert("An adult");
} else if (age > 60) {
  alert("A pensioner");
}

// Запросить у пользователя число от 0-9 и вывести ему спецсимвол...
let num = prompt("Enter number:");
if (num == 1) {
  switch (num) {
    case 1:
      alert("!");
      break;
    case 2:
      alert("@");
      break;
    case 3:
      alert("#");
      break;
    case 4:
      alert("$");
      break;
    case 5:
      alert("%");
      break;
    case 6:
      alert("^");
      break;
    case 7:
      alert("&");
      break;
    case 8:
      alert("*");
      break;
    case 9:
      alert("(October)");
      break;
  }
}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры
let number = prompt("Введите трехзначное число: ");
let num_3 = number % 10;
let lastTwo = number % 100;
let num_1 = (number - lastTwo) / 100;
let num_2 = (lastTwo - num_3) / 10;

if (num_1 == num_2 || num_1 == num_3 || num_2 == num_3) {
  alert("Найдено совпадение цифр");
} else {
  alert("Совпадений не найдено");
}

// Запросить у пользователя год и проверить высокосный или нет
let year = +prompt("Enter year:");
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  alert(`Год высокосный`);
} else {
  alert("Год невысокосный");
}

//Написать конвертор валют
let suma = +prompt("Enter USD:");

const currency = prompt("Enter currency(EUR,UAH or AZN)");
const eur = 0.82;
const uah = 27.42;
const azn = 1.7;
if (currency === "EUR") {
  alert(`${suma * eur} EUR`);
} else if (currency === "UAH") {
  alert(`${suma * uah} UAH`);
}
if (currency === "AZN") {
  alert(`${suma * azn}`);
}

//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let suma = +prompt("Cумму покупки:");
if (suma >= 200 && suma < 300) {
  alert("Cкидка будет 3%");
} else if (suma >= 300 && suma < 500) {
  alert("Cкидка будет 5%");
} else if (suma >= 500 && suma > " ") {
  alert("Cкидка будет 7%");
}
//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
let circumference = +prompt(" Enter circumference:");
let perimeterOfSquare = +prompt("Enter perimeter of a square");
if (circumference < perimeterOfSquare) {
  alert(`Можешь поместить круг в квадрат`);
}
//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let myQuestions =[
  questio_1:" Что в Российской империи было вещевым эквивалентом денег?", answer{
    a:"Шкуры пушных зверей",
    b: "Крупный рогатый скот",
    c: "Табак"
  },
  correctAnswer: "a"
},
{
  questio_2:" Кто из знаменитых художников за жизнь продал всего одну картину?, answer "{
    a:"Винсент Ван Гог.",
    b: "Пьер Огюст Ренуар",
  },
  correctAnswer: "a"
},
{
  questio_3:" Страусы от опасности прячут голову в песок.", answer:{
    a:"Yes",
    b: "No",
  },
  correctAnswer: "b"
}
];
if (questio_1== a || questio_1==b || questio_1==c){
  a++;

