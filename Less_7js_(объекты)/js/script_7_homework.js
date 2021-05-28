//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

let drob1 = { numerator: 4, denominator: 12 };
let drob2 = { numerator: 2, denominator: 6 };

function findNewDiviser(x, y) {
  let minNumber = Math.min(Math.abs(x), Math.abs(y));
  for (let i = Math.min; i <= minNumber; i++) {}
}
function adddmyDrob(x, y) {
  let suma;
  if (x.denominator === y.denominator) {
    suma = { numerator: x.numerator + y.numerator, denominator: x.denominator };
  } else {
    suma = {
      numerator: x.numerator * y.denominator + y.numerator * x.denominator,
      denominator: x.denominator * y.denominator,
    };
  }
  return suma;
}
console.log(adddmyDrob(drob1, drob2));

function minuseDrob(x, y) {
  let minusY = { numerator: -y.numerator, denominator: y.denominator };

  return adddmyDrob(x, minusY);
}
console.log(minuseDrob(drob1, drob2));

function multiply(x, y) {
  let product = {
    numerator: x.numerator * y.numerator,
    denominator: x.denominator * y.denominator,
  };
  return product;
}
console.log(multiply(drob1, drob2));

function divide(x, y) {
  let quotient = {
    numerator: x.numerator * y.denominator,
    denominator: x.denominator * y.numerator,
  };
  return quotient;
}
console.log(divide(drob1, drob2));
//3.Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45»
// добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
