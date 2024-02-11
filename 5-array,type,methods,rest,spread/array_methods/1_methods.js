// =============================================================== Методы массива ============================================================

// (мутируют массив)
// pop() - метод удаляет последний элемент массива (возвращают удаляемый элемент)
// push() - метод добавляет новый элемент массива в конец (новая длина массива)
// shift() - метод удаляет первый элемент массива (возвращают удаляемый элемент)
// unshift() - метод добавляет новый элемент в начало массива (новая длина массива)
// splice() - метод одновременно удаляет и добавляет элементы в массив (метод мутирует массив)

// let array = [1,2,3,4,5]
// array.pop()
// let b = array.pop()
// console.log(array);
// console.log(b);  -> [1,2,3,4] 5

// ============================================================== Practice ==================================================================
// Task 1
// Заданы два массива

let numbers = [10,7,8,5,34,22,65,11,101]
let evenNubmers = []

// Поместите в пустой массив evenNumbers только четные элемента массива. 
// В решение необхоидмо использовать цикл

for (let elem of numbers) {
    if (elem % 2 === 0) {
        evenNubmers.push(elem);
    }
}
console.log(evenNubmers);


// ============================================================== includes ==============================================================
// includes - проверяет, существует ли элемент в массиве.
// возвращает булевый тип

// let array = [10,20,30,40,50]
// let array = ["one", "hello"]
// console.log(array.includes(100)); -> false
// console.log(array.includes(10)); -> true

// ============================================================== slice ==============================================================
// slice(n,m) - метод возвращает новый массив по указанным индексам
// let array = [10,20,30,40,50]
// console.log(array.slice(0,3)); -> [10,20,30]
// console.log(array.slice(-2)); -> [40, 50]

// ============================================================== splice ==============================================================
// splice(startindex,последушие после старта(count), newElement....) 
// - метод одновременно удаляет и добавляет элементы в массив (метод мутирует массив)
let strings = ["один","два","три","четыре", "пять"]
strings.splice(0,2,'шесть') // 5, 0, 'шесть', 'семь' (0 для добавление последние элементы)
console.log(strings);


// Задание 1
//  1) Удалите Арбуз, Вишню и Мандарин. 
//  2) Добавьте до Тыквы Апельсин и Персик
//  3) Удалите Тыкву
let fruits = ["Яблоко", "Вишня", "Арбуз", "Мандарин", "Тыква"]
fruits.splice(1,4,'Апельсин', 'Персик')
console.log(fruits);





// ============================================================== indexOf / lastIndexOf ==============================================================
// indexOf - метод возвращает индекс найденного элемента
// если метод не найден значение - вернет -1
// let array = [10,20,30,40,50]
// console.log(array.indexOf(30));
// console.log(array.indexOf(50));
// console.log(array.indexOf(100));

// IndexOf c лева на право(с начало)
// let array = [10,20,30,40,50] => 1

// lastIndexOf поиск справа на лево(с конца)
// let array = [10,20,30,20,50] => 3
// let array = [10,20,30,40,50] => 1



// ============================================================== Practice ==================================================================
// Task 2
// Задан массив, который хранит занчения разныx типов данных


// Напишите программу, которая сформирует новый массив с элементами, с момента
// нахождения первого булевого типа и далее до конца массива.

// [1,'string', true, 10, 'test', false] =>  [true, 10, 'test', false]
// [1,3, true, 10, true, false] =>  [true, 10, true, false]

// --- 1. --- 
// let array = [1,'string', true, 10, 'test', false]
// let startIndex = 0

// for (let elem of array) {
//     if (typeof elem === 'boolean') {
//         startIndex = array.indexOf(elem);
//         break;
//     }
// }
// let result = array.slice(startIndex)
// console.log(result);

// --- 2. --- 
// let array = [1,'string', true, 10, 'test', false]
// let findTrue = array.indexOf(true)
// let findFalse = array.indexOf(false)
// let startIndex = (findTrue === -1 ||findFalse === -1) ? Math.max(findTrue, findFalse) : Math.min(findTrue, findFalse)
// let result = array.slice(startIndex)
// console.log(result);


// --- 3. --- 
let array = [1,'string', true, 10, 'test', false]
let startIndex = array.findIndex(elem => typeof elem === 'boolean')
let result = array.slice(startIndex)
console.log(result);




// ============================================================== Practice ==================================================================
// Task 2
// Создайте новый массив clear_phone, который будет содежрать все номера телефонов с небольшим условием:
// Каждый номер телефона должен быть приведен к международному формату

// [
//     '+790325435425',
//     '+753425435436',
//     '+723425435476',
//     '+796325435474',
//     '+792325435445',
//     '+793325435446',
// ]

let phones = [
    '890325435425',
    '853425435436',
    '823425435476',
    '896325435474',
    '892325435445',
    '893325435446',
]
let clear_phones = []
for (let elem of phones) {
    clear_phones.push(`+7${elem.slice(1)}`)
}
console.log(clear_phones);


// ============================================================== Practice ==================================================================
// Task 3
// Сформируйте 2 новых массива phones, emails, которые должны содержать отдельно почту и номер телефона

// [
//     'test@gmail.com.net',
//     'string@mail.ru',
//     'someemail@mail.com',
//     'tigran@yahoo.net',
// ]

// [
//     '853433456',
//     '85342345',
//     '853469356',
//     '85342546736',
// ]

let phones1 = []
let emails = []

let contacts = [
    'test@gmail.com.net 853433456',
    'string@mail.ru 85342345',
    'someemail@mail.com 853469356',
    'tigran@yahoo.net 85342546736',
]

for (let elem of contacts) {
    let [email, phone] = elem.split(' ');
    
    emails.push(email);
    phones1.push(`+7${phone}`);
}

console.log('Emails:', emails);
console.log('Phones:', phones1);


// --- 2 Вариант ---
// for (let elem of contacts) {
//     let findSpace = elem.indexOf(' ');
//     phones1.push(elem.slice(findSpace + 1));
//     emails.push(elem.slice(0, findSpace));
// }
// console.log('Emails:', emails);
// console.log('Phones:', phones1);