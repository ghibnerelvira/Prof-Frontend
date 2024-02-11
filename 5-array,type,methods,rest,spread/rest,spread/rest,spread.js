// https://learn.javascript.ru/destructuring-assignment
// https://learn.javascript.ru/rest-parameters-spread-operator

// ====================================================== Spread ======================================================
// Spread - Это оператор, который распаковывает массив в указанном месте (аргумент метода, копия массива)
// распоковка массива (...array)

let array = [1,2,3,4,5]

console.log(array); // [ 1, 2, 3, 4, 5 ]

// --- c распоковкой
console.log(...array); // 1 2 3 4 5
console.log(1,2,3,4,5); // 1 2 3 4 5

// ============== Math.max / Math.min c ...array ==================
console.log(Math.max(1,2,3,4,5)); // 5
console.log(Math.max(...array)); // 5   // console.log(Math.max(array)); -> несработает, только с распоковкой

console.log(Math.min(1,2,3,4,5)); // 1



// ========== Копия массива - spread =========
// Пример spread с формированием копией массива
// let copy = [...numbers]



// ====================================================== Rest - оператор ======================================================
// Rest - операторзанемается сборкой нового массива используя деструктуризация
// Деструктуризация -  это способ обевления переменных одной строчкой кода с значениями элементов массива (или свойств обекта)

// let array1 = [10,20,30]

// let a = array1[0]
// let b = array1[1]
// let c = array1[2]
// let d = array1[3]

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// короче
let array2 = [10, 20, 30];
let [a, b, c, d] = array2;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
console.log(d); // undefined


// ====================================================== Rest + Деструктуризация ======================================================

let array3 = [10,20,30,40,50,60]
let [a1,b1,c1, ...d1] = array3
console.log(a1, b1, c1, d1); // 10, 20, 30 [ 40, 50, 60 ]


// перевернуть через reverse 
let array4 = [10,20,30,40,50,60]
let [a2,b2,c2, ...d2] = array4.reverse()
console.log(a2, b2, c2, d2); // 60, 50, 40, [ 30, 20, 10 ]

// ========================================================== Rest внутри функции ==========================================================
// Rest внутри функции c остатком в массиве
function handle(a, ...arg) {
    console.log(a); // -> 1
    console.log(arg); // -> [ 2, 3 ]
}
handle(1,2,3) 


// Напишите функцию getSum(), которая будет получать n - аргументов и выводить их сумму
// getSum(1,2) => 3
// getSum(1,2,3) => 6
function getSum(...n) {
    let sum = n.reduce((acc, elem) => acc + elem, 0);
    console.log(sum);
}
getSum(1,2)
getSum(1,2,3)

// ========================================================== пример распоковки Object ==========================================================

let obj = {
    name: 'Alex',
    age: 40
}
let {name, age} = obj
console.log(name,age); // Alex 40 
console.log({...obj, id:1}); // { name: 'Alex', age: 40, id: 1 }
// перезапись
console.log({...obj, age:50}); // { name: 'Alex', age: 50 }