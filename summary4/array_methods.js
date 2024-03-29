// МЕТОДЫ МАССИВОВ

// Простые методы, принимают простое значение, вообще не принимаю аргументов, мутирую исходный массив

// .push() - добавляет элемент в конец массива
// .pop() - удаляет элемент из конца массива
// .shift() - удаляет элемент из начала массива
// .unshift() - добавляет элемент в начало массива

// -------------------------------------------------
// 2. Методы, принемающие в качестве аргумента callback-функцию

// .forEach(() => {}) -  метод, который принемает переданную функцию к каждому элементу массива.
// Возвращает undefined = ничего не возвращает
// .map(() => {}) - метод, которвый принемает переданную функцию к каждому элементу массива.
// Возвращает новый массив.

// .filter(() => {})
// .find(() => {})
// .reduce(() => {})
// .sort(() => {})

// Callback - функция - функция, переданная внутрь другой функции в качестве аргумента
// Функция высшего порядка - функция, которая принемает callback - функцию в качестве аргумента


// ----------------------- Practice --------------------------

// 1. Дан массив с числами. Создать новый массив, в который войдут все 
// числа из массива numbers деленные на 2. Решите задачу, используя forEach() и map()
numbers = [22, -10, -8, 7, 15, 101, 73, 55, 85, -100];
const result1 = [];
numbers.forEach(el => result1.push(el / 2));

const result2 = numbers.map(el => el / 2);

console.log(result1);
console.log(result2);

// 2. Создать новый массив, в котором все отрицательные числа будут заменены на 0
// => [22, 0, 0, 7, 15, 101, 73, 55, 85, 0]
// Решите задачу, используя forEach() и map()
// Выведите сформированные массивы в консоль


const originalArray = [22, -5, -10, 7, 15, 101, 73, 55, 85, -3];

const newArray = originalArray.map(number => (number < 0 ? 0 : number));
// const newArray = originalArray.map((number) => {
//     // Если число отрицательное, заменяем его на 0
//     if (number < 0) {
//         return 0;
//     } else {
//         return number;
//     }
// });

console.log(newArray);