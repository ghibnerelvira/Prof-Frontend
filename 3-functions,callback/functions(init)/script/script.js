// Без Функции
// console.log('-_'.repeat(10));
// console.log('Hello, Alex!');
// console.log('-_'.repeat(10));

// console.log('-_'.repeat(10));
// console.log('Hello, Alex!');
// console.log('-_'.repeat(10));

// console.log('-_'.repeat(10));
// console.log('Hello, Alex!');
// console.log('-_'.repeat(10));


// условный оператор if-else
// цикл for

// ================================================================ Функции ================================================================
// ----------- 1 аргумента в 1 function -----------
function sayHello(name) {
    console.log('-_'.repeat(10));
    console.log(`Hello, ${name}!`);
    console.log('-_'.repeat(10));
}
// script1 ...
sayHello('Alex');
// script2 ...
sayHello('Steven');
// script3 ...
sayHello('Nena');


// пробел
console.log();

// ----------- 2 и больше аргументов в 1 function -----------
function sayHello1(name1, num2) {
    console.log('-_'.repeat(num2));
    console.log(`Hello, ${name1}!!!`);
    console.log('-_'.repeat(num2));
}
// script1 ...
sayHello1('Alex',10);
// script2 ...
sayHello1('Steven',10);
// script3 ...
sayHello1('Nena',10);



// пробел
console.log();



// ------------ Return в внутри function -----------
// 1. return позваляет вернуть выходное значение за пределами функции
// 2. если в функции отсутствует return - ее результат роботы будет всегда undefined
// указывается для того чтобы за пределами функции всё работало
// 3. return принудительно завершает роботу функции (логи не будут выполнины после return)
function handle() {
    let a = 10 + 50;
    return a;
}
let result = handle(); // let result = handle() + 10;
console.log(result);
// console.log(handle()); -> короче вариант



// пробел
console.log();



// ------------ return внутри цикла и условного оператора ------------
// ------------ Break в внутри for -> завершает итерацию  пропускает -----------
// ------------ Сontinue в внутри for -> пропускает итерацию  -----------

// ----- break -----
// function handle1(number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//         if (number === i) {
//             break;
//         }  
//     }
// }
// handle1(5); -> 1,2,3,4,5


// ---- continue -----
//  function handle1(number) {
//         for (let i = 1; i <= 10; i++) {
            
//             if (number === i) {
//                 continue;
//             }  
//             console.log(i);
//         }
//         console.log('end!');
//     }
//     handle1(5);  -> 1,2,3,4,6,7,8,9,10, end!


// ---- return ----
// function handle1(number) {
//     for (let i = 1; i <= 10; i++) {
                
//         if (number === i) {
//             return;
//         }  
//         console.log(i);
//     }
//     console.log('end!');
// }
// handle1(5); -> 1,2,3,4


// ================================================================== Задачи ================================================================
// ================================ Задача 1 ================================
console.log();
console.log("--- Задача 1 --- ");
// Напишите функцию checkValue(num), которая получает в качестве аргумента число 
// и вернет сообщение в лог по условию 
// Если число будет больше 10, в консоли выведите сообщение "Число больше 10", 
// В противно случае "Число меньше или равно 10"

// ---- 1. Решение ----
function checkValue(num) {
    console.log(`Введёное число: ${num}`);
    if (num > 10) {
        console.log("Число больше 10");
    } else if (num === 10) {
        console.log("Число равно 10");
    } else {
        console.log("Число меньше 10");
    }
}
checkValue(11);
checkValue(10);
checkValue(5);


// ---- 2. Короче решение ----
console.log();
console.log("--- Короче решение ---");
// тернарный оператор
function checkValue1(num1) {
    let result = (num1 > 10) ? 'Число больше 10' : "Число меньше или равно 10"
    console.log(result);
}
checkValue1(11);
checkValue1(5);



// ================================ Задача 2 ================================ 
console.log();
console.log("--- Задача 2 --- ");
// Напишите функцию repeatLog(n), которая получает в качестве аргумента количество итераций (число)
// Функция должна будет вывести в косноль сообщения согласно примеру: 

// repeatLog(3)
// 'Сообщение 1'
// 'Сообщение 2'
// 'Сообщение 3'

// // repeatLog(5)
// 'Сообщение 1'
// 'Сообщение 2'
// 'Сообщение 3'
// 'Сообщение 4'
// 'Сообщение 5'

// ---- 1. ---- 
function repeatLog(n) {
    for (let i = 0; i <= n; i++) {
        console.log(`Сообщение ${i + 1}`);
    }
}
repeatLog(3);
console.log();
repeatLog(5);


// ---- 2. Короче решение ----
console.log();
console.log("--- Короче решение ---");

function repeatLog1(n1) {
    for (let i = 1; i <= n1; i++) {
        console.log('Сообщение'+i);
    }
}
repeatLog1(3);
console.log();
repeatLog1(5);



// ================================ Задача 3 ================================ 
console.log();
console.log("--- Задача 3 --- ");
// Напишите функцию, которая будет возвращать квадрат числа
function double(num3) {
    return num3 ** 2
}
// 1.
// let answer = double(3)   => 9 -> 3**2=9
// let num4 = double(10)   => 10 

// 2.
// function handle(num) {
//     console.log(num ** 2);
// }
// let num2 = handle(4)     => undefined

// ================================ Задача 4 ================================ 
console.log();
console.log("--- Задача 4 --- ");
// Напишите функцию, которая будет возвращать сообщение, существует ли указанный элемент в массиве или нет
let array = [2,4,5,6,7,9];
function checkElem(number1) {
    for (let elem of array) {
        if (elem === number1) {
            // console.log('Элемент был найден'); -> чтобы видет в консоле
            return 'Элемент был найден'
        } 
    }
    // console.log('Элемент не был найден'); -> чтобы видет в консоле
    return 'Элемент не был найден'
}
checkElem(2);

// ================================ Задача 5 ================================ 
console.log();
console.log("--- Задача 5 --- ");
// Напишите функцию even(2), которая будет возвращать строку с ответом на вопрос.
// Делится ли указанный аргумент на 2 без остатка

// let result = even(10) 
// число делиться на 2

// let result = even(7) 
// число не делится на 2

function even(number3) {
    if (number3 % 2 === 0) {
        return "число делится на 2";
    } else {
        return "число не делится на 2";
    }
}
let result1 = even(10);
console.log(result1);  // Выведет "число делится на 2"

let result2 = even(7);
console.log(result2);  // Выведет "число не делится на 2"


// ---- 2. Короче решение ----
console.log();
console.log("--- Короче решение ---");
// ----
function even1(number4) {
    return (number4 % 2 === 0) ?  "число делится на 2" : "число не делится на 2"
}
let result3 = even(10);
let result4 = even(7);

// ================================ Задача 6 ================================ 
console.log();
console.log("--- Задача 6  --- ");
// Напишите функцию coverString(string), которая будет получать строку в качестве аргумент
// Функция должна вернуть бинарное значение (0 или 1) по условию 
// Если длина строки будет больше 10 символов - тогда функция должна вернуть 1
// В противном случае - 0
function coverString(string) {
    return (string.length > 10) ?  1 : 0 ;
}
let result5 = coverString("123.."); // 5 символов -> 0
console.log(result5);
let result6 = coverString("123456789101112.."); // 14 символов -> 1
console.log(result6);

// 2. Вариант
// function coverString(str) {
//     if (str.length > 10) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let result5 = coverString("12345678..");
// console.log(result5);
// let result6 = coverString("123456789101112..");
// console.log(result6);



// ================================ Задача 7 ================================ 
console.log();
console.log("--- Задача 7  --- ");
// Напшиите функцию sum(num), которая будет возвращать сумму чисел от 1 до num включительно
// console.log(sum(5)) => 1 + 2 + 3 + 4 + 5 => 15
// console.log(sum(8)) => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 29

function sum7(num7) {
    let result1 = 0;
    for (let i = 1; i <= num7; i++) {
        result1 += i;
    }
    return result1;
}
// Примеры использования:
console.log(sum7(5)); // Выведет 15
console.log(sum7(8)); // Выведет 36



// ================================ Задача 8 ------- split ------  ================================ 
console.log();
console.log("--- Задача 8  --- ");
// Напишите функцию countWord(str), которая будет возвращать количество слов в указанном аргументе
// countWord('hello') => 1
// countWord('hello test') => 2
// countWord('hello test hello') => 3

function countWord(str) {
    return str.split(' ').length;
}
console.log(countWord('hello'));               // Выведет 1
console.log(countWord('hello test'));          // Выведет 2
console.log(countWord('hello test hello'));    // Выведет 3



// ================================ Задача 9 ================================ 
console.log();
console.log("--- Задача 9  --- ");
// Напишите фунцию, getCalc(num1, num2, num3)
// num1 - начальная ставка
// num2 - годовой процент (0 - 100)
// num3 - срок вклада (в годах)

// Функция должна вернуть итоговую сумму вклада спустя num3 лет

// getCalc(100, 10, 2) => 121
// getCalc(2000, 10, 3) => 2662

// Итог = Начальная ставка × ( 1 + Годовой процент/100 ) Срок вклада

function getCalc(start, perc, year) {
    // Преобразуем годовой процент в десятичную дробь
    let interestRate = perc / 100;

    // Вычисляем итоговую сумму вклада
    let result = start * Math.pow(1 + interestRate, year);

    // Округляем до двух знаков после запятой
    return Math.round(result * 100) / 100;
}

console.log(getCalc(100, 10, 2));  // Выведет 121
console.log(getCalc(2000, 10, 3)); // Выведет 2662


// 2. Вариант
console.log();
console.log("--- Короче решение ---");
// ----
function getCalc1(start1, perc1, year1) {
    let sum7 = start1;
    for (let i = 1; i <= year1; i++) {
        sum7 += sum7 * (perc1 / 100)
    }
    return sum7;
}
console.log(getCalc1(100, 10, 2));  // Выведет 121
console.log(getCalc1(2000, 10, 3)); // Выведет 2662
console.log(getCalc1(100, 10, 30)); // Выведет 1744.9402268886408



// ==============================================================================================================================================
// ==============================================================================================================================================


