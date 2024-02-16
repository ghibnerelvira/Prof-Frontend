// Конструкция async await(синтаксический сахар)

// 1) Конструкция описывается строго внутри функции.
//      до function необходимо указать оператор await
// 2) Аргумент метода then далее заменяется на переменную, после котоырй обязательно
//      указывается оператор await и сам результат промиса. Пока промис не сформирует 
//      резузультат - далее код не будет выполнен.
// 3) Функция не предполагает return. Функция всегда возвращает экземпляр Promise, 
//      ee return - это результат работы промиса


// Через async await 
async function getUsers() {
    let url = 'http://212.8.247.94:3050/users' 
    let res = await fetch(url, {method: 'GET'})
    let data = await res.json()
    console.log(data);
}


// Ранчше используя then
function getUsers() {
    let url = 'http://212.8.247.94:3050/users' 
    fetch(url)
        .then((res) => res.json())
        .then(data => console.log(data))
}
getUsers()

// Пример обработки ошибки try, catch
async function getUsers() {
    let url = 'http://212.8.247.94:3050/users' 
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getUsers()


// -------------------- Задание 1 --------------------
// Используя async/await реализуйте сетевой GET запрос 
// https://jsonplaceholder.typicode.com/posts
// В косноль вывести массив только с четными постами
async function getPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts' 
    let res = await fetch(url)
    let data = await res.json()
    let evenPosts = data.filter(elem => elem.id % 2 === 0);
    console.log(evenPosts);
}
getPosts();


// -------------------- Задание 2 --------------------
// Перепиште функцию ниже используя async/await, учитывая логику работы метода catch
// function createNewUser(obj){
//     let url = 'http://212.8.247.94:3050/user/create'
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(e => console.log(e))
// }


// async function createNewUser(obj) {
//     let url = 'http://212.8.247.94:3050/user/create'
//     try {
//         let res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(obj)
//         });
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// createNewUser()

async function createNewUser(obj) {
    let url = 'http://212.8.247.94:3050/user/create'
    let queryParams = {
                        method: 'POST',
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(obj)
                    }
    try {
        let res = await fetch(url, queryParams);
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}