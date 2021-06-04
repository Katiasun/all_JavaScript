//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
let car = {
  manufacturer: "Великобритания",
  model: "I-PACE S",
  "Year of Manufacture": 2019,
  "Average speed": 100,
};

function getInfo(aboutCar) {
  for (const key in aboutCar) {
    console.log(`${key}:${aboutCar[key]}`);
  }
}
getInfo(car);

function checkHowLongDoesItTake(objectCar, distance) {
  const averageSpeed = objectCar["Average speed"];
  const totalTime = distance / averageSpeed;
  //t=s/v
  const restTime = Math.trunc(totalTime / 4);
  const allTime = totalTime + restTime;
  const hour = Math.trunc(allTime);
  const min = Math.round((allTime - hour) * 60);

  return `${hour} Hours and ${min} minutes`;
}
let dane = checkHowLongDoesItTake(car, 450);
console.log(`You will need:${dane}`);

//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

let drob1 = { numerator: 5, denominator: 12 };
let drob2 = { numerator: 2, denominator: 6 };

function findNewDiviser(x, y) {
  let minNumber = Math.min(Math.abs(x), Math.abs(y));
  for (let i = minNumber; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
}
function cutDrob(result) {
  let spilnyDilnyk = findNewDiviser(result.numerator, result.denominator);
  result.numerator /= spilnyDilnyk;
  result.denominator /= spilnyDilnyk;
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
  cutDrob(suma);
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
  cutDrob(product);
  return product;
}
console.log(multiply(drob1, drob2));

function divide(x, y) {
  let quotient = {
    numerator: x.numerator * y.denominator,
    denominator: x.denominator * y.numerator,
  };
  cutDrob(quotient);
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
let dayTime = {
  hours: 23,
  minutes: 59,
  seconds: 59,
};

function timeInDay(time) {
  return `${time.hours.toString().padStart(2, "0")}:${time.minutes
    .toString()
    .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
}

console.log(timeInDay(dayTime));

function calcTime(object) {
  let seconds = object.seconds;
  for (let i = seconds; i > 59; i--) {
    if (i % 60 === 0) {
      object.minutes += 1;
      object.seconds -= 60;
    }
  }
  let minut = object.minutes;
  for (let i = minut; i > 59; i--) {
    if (i % 60 === 0) {
      object.hours += 1;
      object.minutes -= 60;
    }
  }
}

function changeHours(dayTime, hour) {
  dayTime.hours += hour;
}

function changeMinutes(dayTime, min) {
  dayTime.minutes += min;
  calcTime(dayTime);
}
function changeSeconds(dayTime, sec) {
  dayTime.seconds += sec;
  calcTime(dayTime);
}
changeSeconds(dayTime, 300);
console.log(timeInDay(dayTime));

changeMinutes(dayTime, 100);
console.log(timeInDay(dayTime));
