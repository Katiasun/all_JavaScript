let obj={key:"truskawka"};
const arr=["string," 1, null, false, undefined, [1,2,3],{key:"ttruskawka"}];
arr[1]; //1
arr.length; //8 name of massive and you'll see длина массива

arr[6].length


console.log(arr.length);
console.log(arr.[1]);

arr[1]="Something";



arr.push(); //Dodac w koniec masywu
arr.push("Apple", "Banana"); //mozna dodawac kilka elementów

arr.pop() or const deleted= arr.pop(); //mozna zapisac pop do zmiennej
console.log("Deleted:",deleted) or console.log("Deleted:", arr.pop());  //Zobaczymy usuniety element

arr.unshift("Apple", "Malina", "Truskawka"); //dodać element na początku
arr.shift() or const usuniety=arr.shift(); //usunąć element na początku
console.log(arr.shift) or  console.log(usuniety); //wyjście do konsoli dwa wypadki

const dayOfWeek=["Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (const day of dayOfWeek){
    console.log(`Day: ${day}`);
}

dayOfWeek.forEach(function(elem, index,arr){
    console.log(elem, index,arr);
})
 dayOfWeek.forEach((elem, index)=>{
     console.log(elem,index);
 });


 //Создать массив из 10 случайных чисел и написать несколько функций для работы с ним. 

 //1) Функция принимает массив и выводит его на экран
 const numbers=[];

 for(let i=0; i<10; i++){
     const randomNumber=Math.round(Math.random()); 
     numbers.push(randomNumber); //
 }

console.log(numbers);

function printArray(arr){
    console.log("Array:",arr.join(" ,"));
}


//Функция принимает массив и выводит только четные элементы. 

function getEven(arr){
    const filtered= arr.filter((el)=>{
        return el % 2===0;
    });
    return filtered;
}

//3)Функция принимает массив и возвращает сумму всех элементов массива.
function getSum (arr){
    let sum=0;
    for (const number of arr){
        sum +=number;
    }
    return sum;
}

//Функция принимает массив и возвращает его максимальный элемент. 

function getMax(arr){
let max=0;
for (const number of arr){
    if (number>max){
        max=number;
    }
}
return max;
}

//Функция добавления нового элемента в массив по указанному индексу.

function insertElement(arr,index,elem){
    arr.splice(index,0,elem);
}

//6) Функция удаления элемента из массива по указанному индексу. 
function removeElement(arr,index){
    arr.splice(index,1);
}



const randomNumbers=getRandomArray();
printArray(randomNumbers);
console.log("Even numbers:", getEven(randomNumbers));
console.log("Sum:" getSum(randomNumbers));
console.log("Maximum:", getMax(randomNumbers));
printArray(randomNumbers);
insertElement(randomNumbers,2,100);
printArray(randomNumbers);

//Part2
//Создать еще один массив из 5 случайных чисел и написать следующие функции

//1) Функция принимает 2 массива и возвращает новый массив, 
//в котором собраны все элементы из двух массивов без повторений.
[1,2,3]
[3,4,5]
function union(arr1,arr2){
    const result=[];  //zmienna gdzie będzie rezultat z pustym masywem
    const concatenated=arr1.concat(arr2);
for (const item of concatenated){
    if (!result.includes()){
        result.push(item)
    }
}

return result;
}

const x=union([1,2,3], [3,4,5]);//[1,2,3,4,5]
console.log(x);

//Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы 
//(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений. 

function intersection(arr1,arr2){
    const united=union(arr1,arr2);
    return united.filter(item=>arr1.includes(item) && arr2.includes(item));

}
console.log(intersection([1,2,3,6,6],[3,4,5,6,6]));  //[3,6]
//Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве. 
function difference(arr1,arr2){
    return arr1.filter(elem=> !arr2.includes(elem));
}
console.log(difference([1,2,3,6,6],[3,4,5,6,6]))  //[1,2]
//Part3
//Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.

//1) Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). 
const fruits=["Apple", "Pear", "Apricot", "Orange", "Peach"];

function printList(list){
document.write("<ul>");
for (const item of list){
    document.write(`<li>${item}</li>`)
}
document.write("</ul>");
}

printList(fruits);


//2) Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден.
// Поиск должен быть не регистрозависимым.

fruits.sort();
//Sort of numbers
const nums=[123,10,20,1];
nums.sort((a,b)=> a - b);

console.log(fruits.indexOf("Pear"));


//Znalezc objecty w masywie
const found=fruits.find(function (el,index,arr)=="Apricot");
console.log(found);