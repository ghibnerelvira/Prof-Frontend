// ========================================================= Function declaration  ==========================================================
function double(num) {
    return num ** 2
}
console.log(double(5));


// ============================================== Function expression (анонимные, стрелочные) ==============================================

// ============= Анонимная функция (или безымянная функция) - это функция, которая не имеет имени.  ================
// вызывается в конце consol.log
let double1 = function(num1){
    return num1 ** 2
}
console.log(double1(5));



// ============== стрелочной функции ===============
// --- 1-ый режим работы (без return) ---
let double2 = (num2) => num2 ** 2;
console.log(double2(5));


// --- 2-ый режим работы (return указывать когда ставим {} !) ---
let double3 = (num3) => {
    return num3 ** 2
}
console.log(double3(5));

// ============================================================== Practice =================================================================
// =========================== 1. Task ========================
// Напишите функцию getSqrt(num), которая возвращает значение корня аргумента. 
// Примечание: 
// 1) Попробуйте не использовать в решение объект Math
// 2) Напишите решение используя все 3 вида функции
// console.log(25 ** 0.5);

// Function declaration
function getSqrt(num4) {
    return num4 ** 0.5;
}
let result = getSqrt(25);
console.log(result); // Выведет 5


// Function expression (aнонимная функция) Math
let getSqrt1 = function(num5) {
    if (num5 < 0) {
        return NaN;
    }

    return Math.sqrt(num5);
}
let result1 = getSqrt1(25);
console.log(result1); // Выведет 5


// Function expression (стрелочной функции)
let getSqrt2 = (num6) =>  num6 ** 0.5
console.log(getSqrt2(25)); // Выведет 5




// ======================== 2. Task =======================
// Напишите функцию checkEven(n), которая будет возвращать булевыф тип с 
// ответом на вопрос - явлеяется ли аргумент четным числовым значением
// Примечание: реализвать используя все 3 вида функций
// function checkEven(n) {
//     if (n % 2 === 0) {
//         return true;
//     }else{
//         return false;
//     }
// } 
// return n % 2 === 0; true, false
// return !(n % 2 === 0); false, true

// 1) Function declaration
function checkEven(n) {
    return n % 2 === 0;
}
console.log("1."+checkEven(4));  // Вернет true, потому что 4 - четное число
console.log("1."+checkEven(7));  // Вернет false, потому что 7 - нечетное число
console.log("1."+checkEven(-2)); // Вернет true, потому что -2 - четное число

// 2) Function expression (aнонимная функция)
let checkEven1 = function(n1) {
    return n1 % 2 === 0;
}
console.log("2."+checkEven1(4)); // Вернет true, потому что 4 - четное число
console.log("2."+checkEven1(7));  // Вернет false, потому что 7 - нечетное число
console.log("2."+checkEven1(-2)); // Вернет true, потому что -2 - четное число

// 3) Function expression (стрелочной функции)
let checkEven2 = (n2) =>  n2 % 2 === 0;
console.log("3."+checkEven2(4)); // Вернет true, потому что 4 - четное число
console.log("3."+checkEven2(7));  // Вернет false, потому что 7 - нечетное число
console.log("3."+checkEven2(-2)); // Вернет true, потому что -2 - четное число






