//1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
//необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

const products = [
  {
    name: "Banana",
    bought: false,
    amount: 4,
  },
  {
    name: "Avokado",
    bought: true,
    amount: 2,
  },
  {
    name: "Oil",
    bought: true,
    amount: 1,
  },
  {
    name: "Water",
    bought: false,
    amount: 1,
  },
  {
    name: "Shampoo",
    bought: false,
    amount: 4,
  },
];

//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function sortByStatus(arr) {
  arr.sort((a, b) => {
    if (a.bought === b.bought) {
      return 0;
    }
    return b.bought ? -1 : 1;
  });
}

sortByStatus(products);

console.log(products);

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// Не понимаю что хотят ):

function addProductToList(arr, productName) {
  const existingProduct = arr.find((product) => product.name === productName);

  if (existingProduct) {
    existingProduct.amount++;
  } else {
    arr.push({
      name: productName,
      bought: false,
      amount: 1,
    });
  }
}

addProductToList(products, "Shampoo");
console.log(products);
addProductToList(products, "Potatoes");
console.log(products);

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function boughtProduct(arr, productName) {
  const existingProduct = arr.find((product) => product.name === productName);

  if (existingProduct) {
    existingProduct.bought = true;
  }
}
boughtProduct(products, "Shampoo");
console.log(products);
//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
// количества и цены за единицу товара. Написать следующие функции:
const receipt = [
  { name: "banana", number: 5, price: 4 }, //product etot wes bolszoj (eto dla sebia)
  { name: "shampoo", number: 2, price: 10 },
  { name: "kiwi", number: 4, price: 8 },
  { name: "knife", number: 1, price: 40 },
];

// Распечатка чека на экран;
function printReceipt(arr) {
  let result = "";
  for (const product of arr) {
    result += `Product: ${product.name} × ${product.number} - $${product.price}\n`;
  }
  return result;
}

console.log(printReceipt(receipt));

// Подсчет общей суммы покупки;
function totalAmount(arr) {
  let sum = 0;
  for (const product of arr) {
    sum += product.price * product.number;
  }
  return sum;
}
console.log(totalAmount(receipt));

// Получение самой дорогой покупки в чеке;
function expensiveProduct(arr) {
  let max = 0;

  for (const product of arr) {
    const cost = product.price * product.number;

    if (cost > max) {
      max = cost;
    }
  }
  return max;
}
console.log(expensiveProduct(receipt));

// Подсчет средней стоимости одного товара в чеке.

function averageCost(arr) {
  let sum = 0;
  for (const product of arr) {
    sum += product.price;
  }
  let cost = sum / arr.length;
  return cost;
}
console.log(averageCost(receipt));

//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).

//  Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию,
// которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,

let text =
  "Garrett, a self-described extreme farmer, sounds confident in his chances. He is the seventh generation in his family to grow corn and graze cattle in western Iowa. “Everything we do is important,” he says. But when it comes to huge corn yields, there is one crucial element: carbon.";
function showText(text) {
  document.write(
    `<p style="color:yellow; background-color:black; width:250px;">${text}</p>`
  );
}
showText(text);

//   добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

//4.Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета,
// для которого она предназначена. Написать несколько функций для работы с ним^
// const akademia = [
//   {
//     name: "Chemia organiczna",
//     places: 15,
//     facultyName: "Chemia analityczna",
//   },
// ];
// Вывод на экран всех аудиторий;
// function showAllAudience(arr) {
//   let str = arr.join(";");
// }
// console.log(str);
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).
