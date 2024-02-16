// Введение в классы 
// {}

let user1 = {
    name: 'Mary',
    role: 'Medic',
    level: 5,
    getInfo(){
        console.log(`Name: ${user1.name}, role: ${user1.role}`);
        // return 123
    }
}
// let a = user1.getInfo()
user1.getInfo()

let user2 = {
    name: 'Alan',
    role: 'Support',
    level: 2,
    getInfo(){
        console.log(`Name: ${user2.name}, role: ${user2.role}`);
    }
}
user2.getInfo()

// ======================================================= Решение через function =======================================================
function createUser(name, age) {
    return{
        name,
        age
    }
}
const user = createUser('Willi', 22);
console.log(user);
// { name: 'Willi', age: 22 }


// ======================================================= Решение через классы =======================================================

// шаблонизатор (шаблон)    = класс
// экземпляр                = объект

// constructor внутри класса нжуен для того, чтобы 
// проиницилазиировать сво-ва для будущих экземпляров

class User {
    constructor(name, role, level){
        this.name = name;
        this.role = role;
        this.level = level;
    }
    getInfo(){
        console.log(`Name: ${this.name}, role: ${this.role}`);
    }
    changeName(new_name){
        this.name = new_name
    }
}
let user3 = new User('Maria', 'Doctor', 1);
let user4 = new User('Alex', 'Support', 10);


// -- c console и без --
// user3.getInfo();            //  -> Name: Maria, role: Doctor
// user4.getInfo();            //  -> Name: Alex, role: Support

// console.log(user3);     // -> User { name: 'Maria', role: 'Doctor', level: 1 }
// console.log(user4);     // -> User { name: 'Alex', role: 'Support', level: 10 }



// работает только с console и перезаписывает
user3.changeName('Milli');
user4.changeName('Tigran');
console.log(user3);
console.log(user4);
// User { name: 'Milli', role: 'Doctor', level: 1 }
// User { name: 'Tigran', role: 'Support', level: 10 }




// ----- Ввывод только 5 пользователей -----
// function get5users() {
//     user1.getInfo();
//     user2.getInfo();
//     user3.getInfo();
//     user4.getInfo();
//     user5.getInfo();
// }
// get5users()




// -------- Задача 1 --------
// Напишите класс MathNumb, который будет внутри экземпляров формировать сво-во number с числовым значением
// Напишите метод getDuble(), который будет выводить в косноль квадрат сво-ва number.

// Напишите еще один метод setQuadNumber, который бдует возводить 
// число в 4 степень и переопределять сво-ва number

class MathNumb {
    constructor(number){
        this.number = number;
    }
    getDouble(){
        console.log(this.number ** 2);
    }
    setQuadNumber(){
        this.number = this.number ** 4
    }
}

let number_1 = new MathNumb(5);
number_1.getDouble();       // -> 25
console.log(number_1);      // -> MathNumb { number: 5 }


// переопределять
let number_2 = new MathNumb(7);
number_2.setQuadNumber();   // -> 2401
console.log(number_2);







