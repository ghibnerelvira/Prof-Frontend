// Класс Object
let obj1 = {
    name: 'Alex',
    age: 30,
    sayHi(){
        console.log('Hi!')
    }
}

let obj2 = new Object({name: 'Alex', age: 30})


// Цикл по обекту
let numbers1 = {
    num1: 50,
    num2: 30,
    num3: 20,
    num4: 150,
    num5: 35
}
let sum12 = 0
for (let key in numbers1){
    console.log(key, numbers1[key]);
    // sum += numbers1[key]
}


// ======================================================= keys()/ value()/ entries() =======================================================

// Методы класса Object

let obj3 = {
    name: 'Alex',
    age: 30
}

// Object.keys(obj)  - метод преобразует объект в массив (с ключами)
// Object.value(obj)  - метод преобразует объект в массив (с значение)
// Object.entries(obj)  - метод преобразует объект в массив (с ключами и значениями)

console.log(Object.keys(obj3))        // [ 'name', 'age' ]
console.log(Object.values(obj3))      // [ 'Alex', 30 ]
console.log(Object.entries(obj3))     // [ [ 'name', 'Alex' ], [ 'age', 30 ] ]


// ============================= Задачи ==================================
// Task 1
// Посчитайте сумму всех значений сво-йсв
let numbers = {
    num1: 50,
    num2: 150,
    num3: 20,
    num4: 45,
    num5: 35,
}

let arrayNumbers = Object.values(numbers)
let sum = arrayNumbers.reduce((accum, elem) => accum + elem, 0)
console.log(sum)

// ======================================================= Object.assign() ====================================================
// Object.assign() - метод, который обединяет два обекта в один обект
// Метод возвращает обект

let obj13 = {
    name: 'Alex',
    age: 30
}
let obj14 = {
    name: 'Steven',
    job: true
}
console.log(Object.assign(obj13, obj14)); // { name: 'Steven', age: 30, job: true }

// ------------------------------------------
let obj15 = {
    name: 'Alex'
}
let obj16 = {
    age: 30
}
let obj17 = Object.assign(obj15, obj16);

console.log(obj15); // { name: 'Alex', age: 30 }
console.log(obj16); // { age: 30 }
console.log(obj17); // { name: 'Alex', age: 30 }
console.log(obj15 === obj16); // false


// ======= Не глубокое копированние ========
let obj18 = {
    name: 'Alex',
    age: 30
}
let copyObj = Object.assign({}, obj18) // обезательно указывать при копирование{}
console.log(obj18 === copyObj); // false


// ====== Актуальный ======
let obj19 = {
    name: 'Alex',
    age: 30
}
let copyObj1 = {...obj19}
console.log(obj19 === copyObj1); // false

// ============================= Задачи ==================================
// Задан объект someObj с произвольными сво-ми. 
// Напишите функцию getKeys(obj), которая в качестве аргумента получает 
// объект и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object (и методы) нельзя.

// Результат: ['key1','key2','key3','key4']

let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

function getKeys(obj) {
    return Object.keys(obj);
}
let result = getKeys(someObj);
console.log(result);

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }

// let array = []
// for (let key in someObj) {
//     array.push(key);
// }
// console.log(array);


// -------------------------------
// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива
// Результат: 
// {
//     key1: 1,
//     key2: true,
//     key3: ‘3’,
//     key4: ‘value1’
//     key5: 9,
//     key6: ‘key’
// }

let array = [1,true,'3','value1',9,'key']


let obj22222 = {}
for (let i = 0; i < array.length; i++) {
    obj22222[`key${i+1}`] =  array[i]
}
console.log(obj22222);


