// --------------------------
// Cравнение

let obj1 = {
    name: 'Tigran',
    age: 30
}

let obj2 = {
    name: 'Tigran',
    age: 30
}

console.log(obj1 === obj2)  // false
console.log(obj1 == obj2)   // false

// ----------------------------------
// Задача: сравнить объекты по равенству (и порядку) сво-йсв, ключей и значений
let obj11 = {
    name: 'Tigran',
    age: 30
}

let obj22 = {
    name:'Tigran',
    age: 30
}

console.log(JSON.stringify(obj11) === JSON.stringify(obj22))


// ------------------------------------
// Cоздание копии (не парвильно)

let obj111 = {
    name: 'Tigran',
    age: 30
}

let obj222 = obj111

obj1.name = 'test'
console.log(obj111)            // { name: 'test', age: 30 }
console.log(obj222)            // { name: 'test', age: 30 }

console.log( obj111 === obj222)  // true

// -------------------
// Как создать копию? (глубокое и не глубокое)

// 1-ый способ (не глубокое копирование)
let obj1111 = {
    name: 'Tigran',
    age: 30
}

let obj2222 = {...obj1}

obj1111.name = 'test'

console.log(obj1111)        // { name: 'test', age: 30 } 
console.log(obj2222)        // { name: 'Tigran', age: 30 }          

// --------------------------
// Глубовоке копирование
let obj10 = {
    names: {
        first: 'Alex',
        last: 'Willyam'
    }
}

let obj20 = JSON.parse(JSON.stringify(obj1))

obj10.names.first = 'Tigran'

// console.log(obj10 === obj20)   false
console.log(obj10)
console.log(obj20)