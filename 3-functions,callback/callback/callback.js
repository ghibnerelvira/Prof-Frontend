// callback - это функция (как правило, function expression) 
// которая указывает как аргумент внутри другой функции

function handle(callback) {
    // let result = callback()
    // return result * 2
    return callback() * 2
}
// handle(() => 5 + 5) -> на практике 
console.log(handle(() => 5 + 5)); // 5 + 5 = 10 * 2 = 20
console.log(handle(() => 10)); // 10 * 2 = 20
console.log(handle(() => 6 ** 3)); // 6^3 * 2 = 432

// ================================================================== Practice ===============================================================

// =========================================== 1. =========================================== 
// function calc(a,b,sign) {
//     if (sign === '+') {
//         return a + b;
//     } else if (sign === '-') {
//         return a - b;
//     } else if (sign === '*') {
//         return a * b;
//     } else if (sign === '/') {
//         return a / b;
//     } else if (sign === '%') {
//         return a % b;
//     } else if (sign === '**') {
//         return a ** b;
//     } else if (sign === '√') {
//         return a ** 0.5; // Math.
//     }
// }
// console.log(calc(5,5,'+'));
// console.log(calc(5,5,'-'));
// console.log(calc(5,5,'*'));
// console.log(calc(5,5,'/'));
// console.log(calc(5,5,'%'));
// console.log(calc(5,5,'**'));

// короче вариант
function calc(callback) {
    return callback();
}
console.log("1.-> " + calc(() => 10 / 5 )); // 2
console.log("1.-> " + calc(() => 10 / 5 ** 2 + (234-40))); // 194.4


// =========================================== 2. =========================================== 
// (без callback)
// let array = [1,2,3,4,5,6]
// function checkElem(value, sign) {
//     for (let elem of array) {
//         if (sign === '==') {
//             if (elem == value) {
//                 return true;
//             }
//         } else if (sign === '!==') {
//             if (elem != value) {
//                 return true;
//             }
//         }else if (sign === '>') {
//             if (elem > value) {
//                 return true;
//             }
//         }else if (sign === '>=') {
//             if (elem >= value) {
//                 return true;
//             }
//         }else if (sign === '<') {
//             if (elem < value) {
//                 return true;
//             }
//         }
//         else if (sign === '<=') {
//             if (elem <= value) {
//                 return true;
//             }
//         }else if (sign === '===') {
//             if (elem === value) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// consol.log(checkElem('==', 10))  => false
// consol.log(checkElem('<', 10))  => true
// consol.log(checkElem('!=', 10))  => true

// короче вариант c collback
let array = [1,2,3,4,5,6]
function checkElem(callback) {
    for (let elem of array) {
        if (callback(elem)) {
            return true
        } 
    }
    return false
}
console.log(checkElem((elem) => elem > 10 )); 
console.log(checkElem((elem) => elem != 10 ));

// let res = checkElem((elem) => elem == 6 && elem % 2 === 0);
// console.log(res);

// let res1 = checkElem((elem) => Math.pow(elem, 2) === 20);
// console.log(res1);


// =========================================== 3. ===========================================
// Напишите функцию stringSqrt(callback), окторая получает в каечстве аргумента колбек
// и проверяет результат кольбека (математичсекого выражения) на четность. 
// функция должна вывести сообщения в косноль

// stringSqrt(() => 5 + 10) => 'Результат не четный'
// stringSqrt(() => 2 * 2) => 'Результат четный'

// ===== 1. c return =====
function stringSqrt(callback) {

    let n = callback();
    
    if (n % 2 === 0) {
        return 'Результат четный';
    } else {
        return 'Результат не четный';
    }
    
}
console.log(stringSqrt(() => 5 + 10)); // => 'Результат не четный'
console.log(stringSqrt(() => 2 * 2)); // => 'Результат четный'


// ===== 2. без return =====
function stringSqrt1(message, callback) {

    let n = callback();
    
    if (n % 2 === 0) {
        console.log(message +'Результат четный');
    } else {
        console.log(message +'Результат не четный'); // message + ( потомучто -> "2. ",)
    }
    
}
stringSqrt1("2. ",() => 5 + 10); // => 'Результат не четный'
stringSqrt1("2. ",() => 2 * 2); // => 'Результат четный'


// ===== 2. короче =====
function stringSqrt2(callback) {
    console.log((callback() % 2 === 0) ? 'Результат четный' : 'Результат не четный');
}
stringSqrt2(() => 5 + 10); // => 'Результат не четный'
stringSqrt2(() => 2 * 2); // => 'Результат четный'


