
// Напишите функцию logHandle(str) , которая получить аргумент str и
//  дважды через пробeл выведет ее через консоль
// logHandle('test') => test test

function logHandle(str) {
    console.log(str + ' ' + str);
    // console.log(`${str} ${str}`);
}
logHandle('test'); // Выведет: test test