// методы строк
// список методов

// toUpperCase() - возведение в верхний регистр -> Consol: HELLO WORLD!
// toLowerCase() - возведение в нижний регистр -> Consol: hello world!
// Данный набор возвращают новою строку

// let string = 'Hello World!'
// let result = string.toLocaleLowerCase() 
// console.log(result);


let string1 = 'Hello World!'
console.log(string1[0]+ 123); // Consol: H123

// console.log(string[string.length -1]); -> последний index


//  =============================================================== includes сравнение  ===============================================================
// includes(substring) - метод проверяет, существует ли заданная подстрока в качестве аргумента
// укаждоко символа свой номер!!!!!
// сровнение всегда по ASCII Code
// 'Привет мой друг' 
// 'й д' -> сушествует 

// 'Привет мой друг' 
// 'привет' -> не существует так как у буквы маленькой буквы п другой номер нежели у большой П

let string = 'Привет мой друг'
console.log(string.includes('мой')); // true
console.log(string.includes('друг мой')); // false
console.log(string.includes('привет')); // false


console.log("");

// =============================================================== сравнение строк ===============================================================
// При сравнение строк тоже сравнивается ASCII - Code a = 65 / A = 97
//  65.... 97
// ('a' > 'A') 


// =============================================================== startsWith / endsWith ===============================================================
//  startsWith - проверяет, начинается ли строка по указонной подстроки
//  endsWith - проверяет, заканчивается ли строка по указонной подстроки
// методы возвращают булевый тип true/false

let string2 = 'Привет мой друг'

// startsWith
console.log(string.startsWith('Привет')); // true
console.log(string.startsWith('мой'));  // false
console.log(string.startsWith('друг')); // false

// endsWith
console.log(string.endsWith('Привет')); // false
console.log(string.endsWith('мой'));  // false
console.log(string.endsWith('друг')); // true


// =============================================================== Practice ===============================================================
console.log("");
// Напишите программу, которая будет проверять переменную string. 
// Программа должна проверить строку по условию:
// 1. Если номер телефона начинается на 7, тогда программа также должна проверить, указан ли в номере дефис
// Если это так, программма должна вывести в консоль "Номер телефона сформирован верно"
// 2. Если номер начинается на 7, но дефис отсутствует - вывести "Отсутствует дефис"
// 3. Если номер не начинается на 7, тогда вывести сообщение "Номер не соответствует формату"

let string3 = '7-987-493-423'
function checkPhoneNumber(phoneNumber) {
   
  if (phoneNumber.startsWith('7')) {  // Проверка, начинается ли номер телефона на 7
   
    if (phoneNumber.includes('-')) {  // Проверка наличия дефиса в номере телефона
      console.log("Номер телефона сформирован верно");
    } 
    else {
      console.log("Отсутствует дефис");
    }
  } 
  else {
    console.log("Номер не соответствует формату");
  }
}
checkPhoneNumber(string3);

// 2.Вариант
let string4 = '7-987-493-423'
if (string4.startsWith('7')) {  
    if (string.includes('-')) {  
      console.log("Номер телефона сформирован верно");
    }else {
      console.log("Отсутствует дефис");
    }
}
else {
    console.log("Номер не соответствует формату");
}
checkPhoneNumber(string4);




// =============================================================== indexOf(substring) ===============================================================
// indexOf(substring, startIndex) - метод позволяет получить index начала указанной подстроки
// метод возвращает index (2 или 3 или 4....)
// Если метод не найдёт подстроку - он вернет значение -1
// ненайденый -1

// let string5 = 'Привет мой друг'
// console.log(string.indexOf(мой)); -> 7
// console.log(string.indexOf(наш));  -> -1


// ----- найдёт первый попавшыйся -----
// let string5 = 'Привет мой друг мой'
// console.log(string.indexOf('мой'));  -> 7

// ----- начнот поиск с 9 index ------
// let string5 = 'Привет мой друг мой'
// console.log(string.indexOf(мой, 9));  -> 16




//  =============================================================== lastIndexOf ===============================================================
// lastIndexOf(substring, startIndex) - делает все тоже самое, но соуществляет поиск справа-налево

// let string5 = 'Привет мой друг'
// console.log(string.lastIndexOf('мой')); -> 16




// =============================================================== replace  ===============================================================
// replace(substr1, substr2) - метод, который заменяет указанный подстроку на другую указанную подстроку

// let string = 'Привет мой друг'
// console.log(string.replace('мой', 'наш')); -> Привет наш друг

// ---------- замена на пробел (удаление) ---------- 
// let string = 'Привет друг'
// console.log(string.replace('мой', '')); -> Привет друг 

// ---------- замена первого совпадения (replace) ----------
// let string = 'Привет мой друг мой '
// console.log(string.replace('мой', 'наш')); -> Привет наш друг мой 

// ---------- замена всех совпадений (replaceAll) ----------
// let string = 'Привет мой друг мой '
// console.log(string.replaceAll('мой', 'наш')); -> Привет наш друг наш


// =============================================================== slice()  ===============================================================
// slice(n, m) - метод позволяет получить подстроку по указанным index (от n индекса до m индекса не включительно)
// substring(n, count) - тоже самое, только count - это итоговое количество выводимых символов

// ----- slice -----
// let string = 'Привет мой друг'
// console.log(string.slice(0, 6)); -> Привет
// console.log(string.slice(7)); -> мой
// console.log(string.slice(11)); -> друг
// console.log(string.slice(-4)); -> друг

// ----- substring -----
// let string = 'Привет мой друг'
// console.log(string.substring(7, 3)); -> вет
// console.log(string.slice(7, 3)); -> нечего 
// console.log(string.slice(7, 10)); -> мой

// =============================================================== join ===============================================================
// .join() - используется для объединения всех элементов массива в строку.
// let fruits = ['яблоко', 'груша', 'вишня'];
// let result = fruits.join(', '); 
// console.log(result); ->  вывод: "яблоко, груша, вишня" 



// ============================================================================== Practice ===========================================================================
// МИНИ - ДЗ
// let card = '4321 4567 8833 0000'
// Напишите функцию clearData(str), которая обезличит полученный аргмуент в виде номера карты
// сформировав новую строку (в консоль) по паттерну:
// clearData('4321 4567 8833 0000') Вывод: => '**** 4567 88** ****'
// clearData('4321 1234 3333 0000') Вывод: => '**** 1234 33** ****'

let card = '4321 4567 8833 0000';

function clearData(card) {

  let maskedCard = card.replace(card.slice(0, 4), '****').replace(card.slice(-7), '** ****');

  console.log(maskedCard);
}
clearData('4321 4567 8833 0000')
clearData('4321 1234 3333 0000');

// function clearData(card) {
//   let maskedCard = card.replace(card.slice(0, 4), '****');
//   maskedCard = maskedCard.replace(card.slice(-7), '** ****');
//   console.log(maskedCard);
// }

// 2. Вариант
// function clearData(string) {

//   console.log(`**** ${string.slice(5,12)}** ****`);

// }
// clearData('4321 4567 8833 0000')
// clearData('4321 1234 3333 0000');

