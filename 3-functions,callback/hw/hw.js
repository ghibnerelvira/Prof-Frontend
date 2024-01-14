// https://docs.google.com/document/d/1KfY44RsQ4eJu_X0its0_TDlzTzg0WstXC9cRZhv6xCs/edit


// ============================================================= 1. Задание =============================================================
// Создайте функцию, которая будет возвращать оператор приветствия, использующий входные данные; 
// ваша программа должна вернуть сообщение Hello, <name> how are you doing today?".

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

let personName = "John";
let greeting = greet(personName);
console.log(greeting);

// let greet = name => `Hello, ${name} how are you doing today?`;


// ============================================================= 2. Задание =============================================================
// Создайте метод, который принимает на вход имя, город и штат, чтобы приветствовать человека.
// Обратите внимание, что name будет массивом, состоящим из одного или нескольких значений, которые должны быть
// объединены одним пробелом между каждым, и длина массива имен в тестовых примерах будет варьироваться.
// Example:
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
let myObject = {
    name: ['John', 'Smith'],
    city: 'Phoenix',
    state: 'Arizona',
}

function sayHello(obj) {
    return `Hello, ${obj.name.join(' ')}! Welcome to ${obj.city}, ${obj.state}!`;
}

console.log(sayHello(myObject));

// ============================================================= 3. Задание =============================================================
// Определите общее количество цифр целого числа (n>=0), заданного в качестве 
// входных данных функции. Например, 9 — однозначное число, 66 — 2-значное, 
// а 128685 — 6-значное. Будьте осторожны, чтобы избежать переполнения/недополнения.
// function digits(n) {
//     // TODO
// }
function digits(n) {
    let numString = n.toString();
    return numString.length;
}
let number = 12345;
let result = digits(number);
console.log("Количество цифр числа", number, ":", result);


// ============================================================= 4. Задание =============================================================
// Простые числа Вильсона удовлетворяют следующему условию. Пусть P представляет собой простое число.
// Затем,
// ((P-1)! + 1) / (P * P)
// должен дать целое число.
// Ваша задача — создать функцию, которая возвращает true, если 
// заданное число является простым числом Вильсона.
// function amIWilson(p) {
//     // check if prime is Wilson
// }
function amIWilson(p) {
    let isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    return isPrime(p) && ((factorial(p - 1) + 1) % (p * p) === 0);
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

let number1 = 5;
let result1 = amIWilson(number1);
console.log(`Число ${number1} является простым числом Вильсона: ${result1}`);

// ============================================================= 5. Задание =============================================================
// Завершите решение так, чтобы строка разбивалась на пары 
// по два символа. Если строка содержит нечетное количество 
// символов, необходимо заменить отсутствующий второй символ 
// последней пары подчеркиванием («_»).
// Примеры:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
// function solution(str){
   
// }

function solution(str) {
    if (str.length % 2 !== 0) {
        str += '_';
    }

    return str.match(/.{1,2}/g);
}
console.log(solution('abc'));      // ['ab', 'c_']
console.log(solution('abcdef'));   // ['ab', 'cd', 'ef']

// ============================================================= 6. Задание =============================================================
// Измените функцию kebabize так, чтобы она преобразовывала 
// строку регистра верблюда в регистр кебаба.
// Примечания:
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// возвращаемая строка должна содержать только строчные буквы
// function kebabize(str) {
//     // TODO
// }

function kebabize(str) {
    str = str.replace(/[^a-zA-Z]/g, '');

    return str.replace(/[A-Z]/g, function(match) {
        return '-' + match.toLowerCase();
    }).replace(/^-/, ''); 
}
console.log(kebabize("camelsHaveThreeHumps"));  // "camels-have-three-humps"
console.log(kebabize("camelsHave3Humps"));       // "camels-have-humps"
console.log(kebabize("CAMEL"));                  // "c-a-m-e-l"


// ============================================================= 7. Задание =============================================================
// Просматривая Интернет, я нашел интересную математическую задачу 
// под названием «Всегда идеально». Это означает, что если 
// вы прибавите 1 к произведению четырех последовательных чисел, 
// ответом ВСЕГДА будет идеальный квадрат. Например, 
// у нас есть: 1,2,3,4 и произведение будет 1X2X3X4=24. 
// Если мы добавим 1 к произведению, получится 25, поскольку полученное 
// число представляет собой полный квадрат, квадратный корень из 25 будет равен 5.

// Итак, теперь давайте напишем функцию, которая принимает числа, 
// разделенные запятыми, в строковом формате и возвращает число, 
// представляющее собой полный квадрат, и квадратный корень из этого числа.

// Если строка содержит символы, отличные от числа, или содержит более 
// или менее 4 чисел, разделенных запятой, функция возвращает «неправильный ввод».

// Если строка содержит 4 числа, но не подряд, возвращается «не подряд».

// function checkRoot(string){
//your code here
// }

function checkRoot(string) {
    const numbers = string.split(',').map(Number);

    if (numbers.some(isNaN) || numbers.length !== 4 || !numbers.every((num, i) => i === 0 || num === numbers[i - 1] + 1)) {
        return "неправильный ввод";
    }

    const productPlusOne = numbers.reduce((acc, num) => acc * num, 1) + 1;
    const squareRoot = Math.sqrt(productPlusOne);

    return Number.isInteger(squareRoot) ? squareRoot : "не подряд";
}

console.log(checkRoot("1,2,3,4"));        // Возвращает 5
console.log(checkRoot("2,3,4,5"));        // Возвращает "неправильный ввод"
console.log(checkRoot("1,2,4,5"));        // Возвращает "не подряд"





// ============================================================= 8. Задание =============================================================
// Дан массив из 4 целых чисел
// [a,b,c,d] представляющие две точки (a, b) и (c, d), возвращают 
// строковое представление наклона линии, соединяющей эти две точки.
// Для неопределенного наклона (деление на 0) верните undef. 
// Обратите внимание, что «неопределенное» чувствительно к регистру.
// a:x1
// b:y1
// c:x2
// d:y2
// Предположим, что [a,b,c,d] и ответ — целые числа (без плавающих чисел!)
// function slope(points)
// {
//     //..
// }

function slope(points) {
    const [x1, y1, x2, y2] = points;

    if (x2 - x1 === 0) {
        return undefined;
    }

    const result = (y2 - y1) / (x2 - x1);
    return result.toString();
}

const lineSlope = slope([1, 2, 3, 4]);
console.log("Наклон линии:", lineSlope);

// ============================================================= 9. Задание =============================================================
// Вам даны длина и ширина четырёхстороннего многоугольника. 
// Многоугольник может быть прямоугольником или квадратом.
// Если это квадрат, верните его площадь. 
// Если это прямоугольник, верните его периметр.
// 6, 10 --> 32
// 3, 3 --> 9
// Примечание: для целей этого ката вы будете считать, 
// что это квадрат, если его length и width равны, в противном случае это прямоугольник.
// const areaOrPerimeter = function(l , w) {
//     // Return your answer
// };

const areaOrPerimeter = function(l, w) {
    if (l === w) {
        return l * w;
    } else {
        return 2 * (l + w);
    }
};

console.log(areaOrPerimeter(6, 10)); // Возвращает 32
console.log(areaOrPerimeter(3, 3));  // Возвращает 9


// ============================================================= 10. Задание =============================================================
// https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
// function seatsInTheater(nCols, nRows, col, row) {
//   //coding and coding.. 
// }
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols-col+1) * (nRows - row);  
}

// ============================================================= 11. Задание =============================================================
// Первое столетие охватывает от 1 года до 100 года включительно, 
// второе столетие — от 101 года до 200 года включительно и т. д.
// Учитывая год, верните столетие, в котором он находится.
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// function century(year) {
//     // Finish this :)
//     return;
// }
function century(year) {
    const centuryNumber = Math.ceil(year / 100);

    return centuryNumber;
}

console.log(century(1705)); // Возвращает 18
console.log(century(1900)); // Возвращает 19
console.log(century(1601)); // Возвращает 17
console.log(century(2000)); // Возвращает 20

// ============================================================= 12. Задание =============================================================
// Бобу нужен быстрый способ вычисления объема кубоида 
// с тремя значениями: длиной, шириной и высотой кубоида. 
// Напишите функцию, которая поможет Бобу выполнить эти вычисления.
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     // your code here
//   }
// }

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
} 
const volume = Kata.getVolumeOfCuboid(3, 4, 5);
console.log("Объем кубоида:", volume);


// ============================================================= 13. Задание =============================================================
// Return the Nth Even Number
// Example(Input --> Output)
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// function nthEven(n){
//     // your code here
// }

function nthEven(n) {
    return 2 * (n - 1);
}

console.log(nthEven(1));      // Возвращает 0
console.log(nthEven(3));      // Возвращает 4
console.log(nthEven(100));    // Возвращает 198
console.log(nthEven(1298734)); // Возвращает 2597466


// ============================================================= 14. Задание =============================================================
// Игра НБА длится 48 минут (четыре четверти по 12 минут). 
// Игроки обычно не играют в полную версию игры, подключаясь 
// и выключаясь по мере необходимости. Ваша задача — экстраполировать 
// очки игрока за игру, если он отыграл полные 48 минут.

// Напишите функцию, которая принимает 
// два аргумента: ppg (points per game) и mpg (minutes per game) 
// и возвращает прямую экстраполяцию количества ppg за 48 минут, 
// округленного до ближайшей десятой. Верните 0, если 0.

// Примеры:
// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0

// function pointsPer48(ppg, mpg) {

// }

function pointsPer48(ppg, mpg) {
    if (mpg === 0) {
        return 0;
    }

    const extrapolatedPPG = (ppg / mpg) * 48;
    return Math.round(extrapolatedPPG * 10) / 10;
}

console.log(pointsPer48(12, 20)); // Возвращает 28.8
console.log(pointsPer48(10, 10)); // Возвращает 48
console.log(pointsPer48(5, 17));  // Возвращает 14.1
console.log(pointsPer48(0, 0));   // Возвращает 0

// ============================================================= 15. Задание =============================================================
// Учитывая неотрицательное целое число n, 
// напишите функцию to_binary/ToBinary, 
// которая возвращает это число в двоичном формате.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:
// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

// function toBinary(n){
//     return n;
// }
function toBinary(n) {
    return n.toString(2);
}

console.log(toBinary(1));   // Возвращает "1"
console.log(toBinary(5));   // Возвращает "101"
console.log(toBinary(11));  // Возвращает "1011"