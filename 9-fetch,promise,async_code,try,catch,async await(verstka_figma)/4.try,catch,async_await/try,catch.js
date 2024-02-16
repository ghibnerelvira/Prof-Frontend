// try, catch - обрабочик ошибок
// В блок try помещаетсяфрагмент кода, который может сформировать ошибку (главное не синтаксическую SYNTAX ERROR)
// в блоке catch находится фрагмент кода, который будет исполнен в случае формировании ошибки в блоке try
// если ошибка не будет зафиксирована, блок catch не выполнит свой код.

// Особенность конструкции заключается в том, что в случаи возникновении ошибки 
// скрипт далее продолжит свое выполнение без прерываний.


// Ошибка от бекенда(нерабочая ссылка) -> Uncaught (in promise) Failed to fetch at <anonymous>:1:1

// let a = 10
// let b = a - c
// Uncaught ReferenceError: c is not defined // после ошибке код дальше не читается
// console.log('Messege!'); 


// ---- Lösung -----
try {
    let a = 10
    let b = a - c
} catch (error) {
    console.log('Зафексирована ошибка!');  // если выполнился без ошибок тогда в консоль сразу выведется Message!
}
console.log('Message!');


try {
    let a = {}
    let b = a.test.test
} catch (error) {
    console.log(error);  // TypeError: Cannot read properties of undefined (reading 'test')
    //                                 at try,catch.js:27:20
    //                                 try,catch.js:31 
}
console.log('Message!');

