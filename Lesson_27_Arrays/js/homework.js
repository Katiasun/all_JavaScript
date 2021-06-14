//1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
//необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

const products = [
  {
    banana: 5,
    bought: true,

    avokado: 2,
    bought: false,

    oil: 1,
    bought: true,

    water: 1,
    bought: true,

    shampoo: 1,
    bought: false,
  },
];

//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function select(arr) {
  let boughtGoods = [];
  let notBoughtGoods = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element.bought) {
      boughtGoods.push(element);
    } else {
      notBoughtGoods.push(element);
    }
  }
  let result = notBoughtGoods.concat(boughtGoods);
  return result;
}
console.log(select(products));
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.

//Не понимаю что хотят ):

function addProductToList(arr) {
  let newProduct = []; //новые продукты

  for (let i = 0; i > arr.length; i++) {
    newProduct;
  }

  let result = newProduct.concat(arr);
}
console.log(addProductToList(products));
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function boughtProduct(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].bought) {
      result.push(arr[i]);
    }
  }
  return select;
}
console.log(boughtProduct(products));
//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
// количества и цены за единицу товара. Написать следующие функции:
const receipt = [
  {name: "banana", number:5, price:4}
  {name:"shampoo", number:2 ,price:10 ,}
  {name:"kiwi", number: 4,price: 8,}
  {name:"knife", number:1 ,price:40 ,}
];

// Распечатка чека на экран;
function checkOfProd (arr){
  for (const list of checkOfProd){
    return `${list.name},${list.number},${list.price}`
  }
}
console.log(checkOfProd(receipt));


// Подсчет общей суммы покупки;
function totalAmount(arr){
  for (let i=0; i<arr.length;i++){
    for (const product of arr){
      i +=product.number*product.price;
    }
  }
}
console.log(totalAmount(receipt));


// Получение самой дорогой покупки в чеке;
function expensiveProduct(arr){
  let max=0;

  for (const goods of arr){

  }
}
// Подсчет средней стоимости одного товара в чеке.

//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).






//  Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию,
// которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
function getArr(list) {
  document.write("<ul>");
  for (const item of list) {
    document.write(`<p>${item}</p>`);
  }
  ("</ul>");
}

getArr(css);
console.log(list);
//   добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

//4.Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета,
// для которого она предназначена. Написать несколько функций для работы с ним^
const akademia = [
  {
    name: "Chemia organiczna",
    places: 15,
    facultyName: "Chemia analityczna",
  },
];
// Вывод на экран всех аудиторий;
function showAllAudience(arr) {
  let str = arr.join(";");
}
console.log(str);
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).
