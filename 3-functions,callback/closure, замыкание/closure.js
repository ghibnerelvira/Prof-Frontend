function handle() {
    let a = 10
    return a
}
let b = handle()
console.log(b);


// ============================================================= closure ================================================================
// функция в функции

function handle1() {
    let a1 = 11
    return function () {
        console.log(a1);
    }
}
let b1 = handle1();
b1()




// ===== с аргументом в нутри ===== 
function handle2() {
    let a2 = 15
    return function (m) {
        console.log(a2, m);
    }
}
let b2 = handle2();
b2(5) // -> Consol:  15 , 5





// =====  с аргументом в нутри 2 функциий и изменений ===== 
function handle3(a2) {
    return function (m) {
        console.log(a2, m);
    }
}
let b3 = handle3(10);
let c = handle3(15)

b3(5)// -> Consol:  10 , 5
b3(6) // -> Consol:  10 , 6

c(3) // -> Consol:  15 , 3
c(4) // -> Consol:  15 , 4





// ===== пример  изменений ===== 
function handle4(x) {
    let a = x * 2
    console.log('handle');
    return function (m) {
        console.log(a, m);
        console.log('clouse');
    }
}
let p = handle4(5);
let e = handle4(2)

p(2)
p(3) 
e(4) 
e(5) 
// handle
// handle
// 10 2
// clouse
// 10 3
// clouse
// 4 4
// clouse
// 4 5
// clouse

// handle(5)(20) -> лутчше не использовать




// ====== cклеевание ====== 
// amazon - domen  / zone - com, net    google.com
function generateUrl(zone) {
    return function (domen) {
        console.log(`${domen}.${zone}`);
        console.log('---- clouse ----');
    }
}
let comUrl = generateUrl('com')
let netUrl = generateUrl('net')

comUrl('google')
comUrl('amazon')

netUrl('test')
netUrl('ebay')




// ============================================================= Practice ================================================================

// Напиши функцию pow(n), которая в качестве аргумента будет принимать значение степени. 
// Функция должна вернуть другую функцию, которая в качестве аргумента будет принимать число num и выводить в коноль 
// результат вычисления степени (num ** 2)


function pow(n) {
    // Возвращаем функцию, которая принимает число и выводит результат возведения в степень n
    return function(num) {
      console.log(num ** n);
    };
}
  
let square = pow(2); // (hoch 2)
let quad = pow(4)  // (hoch 4)

square(5); // Выведет 25, так как 5^2 = 25
square(8); // Выведет 64, так как 8^2 = 64
quad(2); // Выведет 16, так как 2^4 = 16


// function pow(n) {
//     return (num) => console.log(num ** n); 
// }
// square(5); 
// square(8); 
// quad(2);




