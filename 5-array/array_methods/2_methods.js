// =============================================================== Методы массива ============================================================
// методы которые принемают в качестве аргумента callback


// ============================================================== filter() ==============================================================
// filter() - метод, который фильтрует массив по указанному условию
// возвращает новый массив
// в случае, если один элемент массива не удовлетворил условие - метод вернёт пустой массив
// let result = array.filter(() => true) -> [10,20,30,40,50,60]
// let result = array.filter(() => false) -> []
// elem - значение элемента массива

let numbers = [10,20,30,40,50,60]

let result = numbers.filter((elem) => elem > 30)  // ((elem) => elem ** 2) -> неработает, так как метод должен получить булевый тип 
console.log(result); // [ 40, 50, 60 ]



// Отфильтруйте массив таким образом, чтобы в новый массив оказались четные элементы
let array = [1,2,3,4,5,6,7,8,9,10]
let result1 = array.filter((elem) => elem % 2 === 0)
console.log(result1);


// Отфильтруйте массив таким образом, чтобы в новом оказались элементы, которые
// содержат букву а (А)
let fruits = ["Яблоко", "Вишня", "Арбуз", "Мандарин", "Тыква"]
let result2 = fruits.filter((elem) => elem.toLowerCase().includes('а'))
console.log(result2);
// toLowerCase() преврашает строку внижний регистр (все маленькие)


// Отфильтруйте массив таким образом, чтобы в новый массив попапли строки, длина которых 
// меньше или равно 5
let result3 = fruits.filter((elem) => elem.length <= 5 )
console.log(result3);


// ========================================================== Aргументы callback (filter) ===========================================================

// 1) Значение элемента массива
// 2) Индекс элемента массива
// 3) Исходный массив
let array1 = [10,20,30,40,50,60]
let result4 = array1.filter((element, index, array) => console.log(element, index, array)) 
// 10 0 [ 10, 20, 30, 40, 50, 60 ]
// 20 1 [ 10, 20, 30, 40, 50, 60 ]....


let array2 = [10,20,30,40,50,60]
let result5 = array2.filter((elem, ind) => ind <=2) 
console.log(result5); // [ 10, 20, 30 ]




// =========== callback для более больших решений (обезательно указывать return) ==========

// Пример использования метода с подробным описание колбека (return)
let fruits2 = ["Яблоко", "Вишня", "Арбуз", "Мандарин", "Тыква"]
let result6 = fruits2.filter((elem) =>{
    let lowerCase = elem.toLowerCase()
    return lowerCase.includes('а')
})
console.log(result6);



// Отфильтруйте массив таким образом, чтобы в новый массив попали четные элементы с четным индексом
let numbers1 = [5,3,7,2,8,9,10,11,51]
let result7 = numbers1.filter((elem, ind) => elem % 2 === 0 && ind % 2 === 0)
console.log(result7);


// Сформируйте новый массив, который будет хранить пользователей с возрастом от 30 до 40 лет включительно
// elem >= 30
let users = [
    {id: 1, age: 30, name: 'Alex'},
    {id: 2, age: 20, name: 'Steven'},
    {id: 3, age: 40, name: 'Neena'},
    {id: 4, age: 50, name: 'John'},
    {id: 5, age: 30, name: 'Grend'}
]
let result8 = users.filter((elem) => elem.age >= 30 && elem.age <= 40)
console.log(result8);

// console.log(users.filter(elem => elem.age >= 30 && elem.age <= 40))



// ========================================================== find (findIndex) ===========================================================
// ===== find() =====
// find() - Метод позволяет найти элемент по условию 
// метод возвращает найденный элемент массива
// если метод не найден по условию элемент - вернет undefined 
// !! позваляет найти OДИН конкретный элемент по указонному условию (возврашает булевый тип) !! // filter вернёт целый массив (неправельный = пкстой массив)

let array3 = [10,20,30,40,50]

let result9 = array3.find(elem => elem > 15)

console.log(result9); // первое попавшийся число которое боле 15 -> 20
// elem === 100 вернет undefined 

// ===== findIndex() =====
// findIndex() - делает всё тоже самое, только будет возвращать индекс найденного элемента масива по условию
// если ненайденно -> вернет -1
// похож на indexOf, разница в том что нужно указывает точное значение массива 

let array4 = [10,20,30,40,50]
let result10 = array4.findIndex((elem) => elem === 20)
console.log(result10); // 1   -> index 20 = 1


// let result11 = array4.indexOf({id: 1, age: 30, name: 'Alex'}) -> ненайдёт
// let result11 = array4.findIndex(elem => elem.id === 1) -> 1
// let result11 = array4.find(elem => elem.id === 1) ->  {id: 1, age: 30, name: 'Alex'}



// ========================================================== some() && every() ===========================================================

// some() && every() - методы, которые возвращают булевый тип. true/false
// some() отвечает на вопрос, есть ли хотябы 1 элемент по указанному условию колбека
// every() отвечает на вопрос, все ли элементы удовлетваряют указанному условию callback

let array5 = [10,20,30,40,50]

let someResult = array5.some((elem) => elem > 20) // true  так как есть хотябы один эл. >20 
console.log(someResult);

let everyResult = array5.every((elem) => elem > 20) // false так как не все эл. >20 
console.log(everyResult); 


// Выведите булевые типы которые ответят на вопросы: 
let fruits1 = ["яблоко", "вишня", "арбуз", "мандарин", "тыква"]

// 1) Есть ли в массиве хотябы 1 элемент, который начинается на 'в'
console.log(fruits1.some((elem) => elem.startsWith("в")));
// console.log(fruits1.some((elem) => elem.includes("в")));

// 2) Все ли элементы массива содержат букву 'а'?
console.log(fruits1.every((elem) => elem.includes("а")));





// ========================================================== map()  ===========================================================

// map() - метод перезаписывает значения элементов массива. 
// Делает все тоже самое ка и  forEach, some, every проходится по массиву
// метод возвращает новый массив
// Метод требует, чтобы мы в колбеке вернули НОВОЕ значение элемента массива.

// возводит в квадрат (проще без цикла)
let array6 = [1,2,3,4,5]

let result12 = array6.map(elem => elem ** 2)
console.log(result12);
// let result12 = array6.map(elem => {
//     return elem * 2
// })


// let array6 = [1,2,3,4,5]
// let result12 = array6.map(elem => 100)
// console.log(result12);       
// Consol: -> [ 100,100, 100, 100, 100 ]


// ['Alex','Steven','Neena']  Consol -> [ 'A', 'S', 'N' ]
let name1 = ['Alex','Steven','Neena']
let result13 = name1.map(elem => elem[0])
console.log(result13);


// Что будет, если в колбек поместить условие 
// let array = [1,2,3,4,5]
// let result = array.map(elem => elem > 2)
// console.log(result); 
// -> [ false, false, true, true, true ]



// В магизине объявлена распродажа. Стоимость всех продуктов теперь указано с 15% скидкой
// Сформируйте новый массив, который будет хранить новую стоимость с учетом указанной скидки
// 100-15=85
let prices = [100,450,600,200,1000,4000]
let pricesresult = prices.map(elem => elem * 0.85) 
console.log(pricesresult);


// Сформируйте новый массив, который будет хранить строкове значение по указанному формату:
// ['S.K', 'A.W', 'J.G', 'N.P']
let names = [
    {first_name: 'Steven', last_name: 'King'},
    {first_name: 'Alex', last_name: 'Willyam'},
    {first_name: 'John', last_name: 'Grec'},
    {first_name: 'Neena', last_name: 'Palman'},
]

console.log(names.map(elem => `${elem.first_name[0]}.${elem.last_name[0]}`));
// console.log(names.map(elem => elem.first_name[0] + '.' + elem.last_name[0]));



// const numbers = [5, 2, 1, 9, -6];
// const result = numbers.map(elem => {
//     return 'render'
// });
// console.log(result); -> 'render', 'render', 'render', 'render', 'render'


// ========================================================== forEach()  ===========================================================
// forEach() - занемает мало место если надо вывести в consol
// forEach() - метод создает итерациюю (цикл) по массиву (переберает массив и пренимает callback) 
// (callback = funktia которая является как аргумент для друго функции)
// результат его работы сохранять бесмыслено, посколько метод ничего не возвращает (undefined)
// является альтернативой обычному циклу for (для массива) 
                                        // for (let index = 0; index < array.length; index++) {
                                        //     console.log(array[index]); 
                                        // }

let arrays = [10,20,30,40,50]

arrays.forEach((elem) => console.log(elem)) // (elem, ind, arr)
// 10
// 20
// 30
// 40
// 50
// console.log();


// позитивные числа
const numbers11 = [5, 2, 1, 9, -6];
numbers11.forEach(elem => {
    if (elem > 0) {
        console.log(elem);
    }
});

// проверка возвращаемости и муттации
// const result = numbers.forEach(elem => {
//     if (elem > 0) {
//         console.log(elem);
//     }
// });
// console.log(result); = undefined


// ========================================================== sort()  ===========================================================
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// sort() - метод сортирует массив по указанному условию
// Метод мутирует массив !!! не нужно указывать let result = array.sort чтобы вывести в консоль


// =================================== Буквы ===========================
// Если не указывать параметры fruits.sort(), то сортировка выполнится по алфавиту порядку
// reverse() - в обратном порядкe 
// -> fruits.sort().reverse()

// let fruits3 = ["Яблоко", "Вишня", "Арбуз", "Мандарин", "Тыква"]
// fruits.sort().reverse()
// console.log(fruits);



// const numbers = [ 'a', 'c', 'b', "vdbxbjd"]
// numbers.sort((a, b) => {
//     return a.charCodeAt() - b.charCodeAt()
// });
// console.log(numbers);



// Вариант 2 с localeCompare
// numbers.sort((a, b) => a.title.localeCompare(b.title));
// console.log(numbers);

// ================================= Числа ==============================
// по возрастанию
// array.sort((a, b) => a - b)
// по убыванию
// array.sort((a, b) => b - a)

// ===== по возрастанию =====
// [1,  5, 10,  20,  30, 40, 50, 100 ]
// let arrays1 = [30,40,10,20,50,1,5,100]
// arrays1.sort((nextElem, carentElem) => {
//     if (nextElem > carentElem) return 1
//     if (nextElem < carentElem) return -1
//     if (nextElem === carentElem) return 0
// })
// console.log(arrays1);

// легче
let arrays1 = [30,40,10,20,50,1,5,100]
arrays1.sort((nextElem, carentElem) =>  nextElem - carentElem )
console.log(arrays1);



// ====== по убыванию ======
// let arrays1 = [30,40,10,20,50,1,5,100]
// arrays1.sort((nextElem, carentElem) => {
//     if (nextElem > carentElem) return -1
//     if (nextElem < carentElem) return 1
//     if (nextElem === carentElem) return 0
// })
// console.log(arrays1);
// легче
let arrays2 = [30,40,10,20,50,1,5,100]
arrays2.sort((a, b) =>  b - a)
console.log(arrays2);


// Задача: отсортировать массив по id
let users1 = [
    {id: 4, age: 30, name: 'Alex'},
    {id: 5, age: 20, name: 'Steven'},
    {id: 2, age: 40, name: 'Neena'},
    {id: 1, age: 50, name: 'John'},
    {id: 3, age: 30, name: 'Grend'}
]
console.log(users1.sort((a, b) =>  a.id - b.id));



// Найдите индекс элемента массива, длина которого будет равна 6
let fruits3 = ["Яблоко", "Вишня", "Арбуз", "Мандарин", "Тыква"]
console.log(fruits3.findIndex(elem => elem.length === 6));

// let result14 = fruits3.filter((elem) => elem.length === 6)
// console.log(result14);


