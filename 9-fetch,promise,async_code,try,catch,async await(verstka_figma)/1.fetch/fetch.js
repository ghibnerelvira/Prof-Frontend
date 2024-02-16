
//          HTTP - запроc
// client ------------------>  server
//                                      \
//                                       \
//                                        СУБД
//                                       /
// client   <---------------------      /




// Данные => JSON (уневерсальный язык который понятен на всех языках(Phyton, Java, JavaScript))
// Данные конвертируютя в JSON для отправки в server

// Запрос => headers (Данные о запросе(Token))
//           body (Сами данные (JSON)) ------------> СУБД



// ================================================================ Fetch ==================================================================
// Fetch - инструмент формирования сетевого HTTP-запроса
// fetch(url) - возвращает промис

// В первом методе then мы получаем ответ от сервера, именуемый как response (res сокращенно)
// Сам ответ нам необходимо декодировать используя метод .json()
// Поскольку метод json() возвращает еще один промис, его результат необходимо получить
// ипользуя второй метод then, где в качестве аргумента в колбеке мы уже получаем сами данные (data)


// https://jsonplaceholder.typicode.com

// fetch('https://jsonplaceholder.typicode.com/posts')

let url = 'https://jsonplaceholder.typicode.com/posts'
// console.log(fetch(url)); // Promise { <pending> } fullfiled
fetch(url)
    .then((a) => console.log(a))




// ----------------------------------------------------------------- error -----------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// status 200 -> всё отлично
// status 300 -> ок
// status 401 -> не авторизован пользователь
// status 404 -> ошибка что-то не нашлось (Not Found)

// 1. Informational responses (100 - 199)
// 2. Successful responses (200 - 299)
// 3. Redirection messages ( 300 - 399)
// 4. Client error responses ( 400 - 499 )
                            // 400: "Bad request",
                            // 401: "Unauthorized",
                            // 403: "Forbidden",
                            // 404: "Not found",
                            // 409: "Conflict",
// 5. Server error responses (500 - 599)

fetch(url)
    .then((a) => { 
        if(a.status === 200) {
            console.log('OK!');
        }else if (a.status === 404) {
            console.log('not found');
        }else if (a.status === 401) {
            console.log('not found');
        }
    })



// --------------------------------------------------------------- res.json() --------------------------------------------------------------- 
let url1 = 'https://jsonplaceholder.typicode.com/users'
fetch(url1)
    // .then((res) => console.log(res.json())) // Promise / Array
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => {
        let names = data.map(el => el.name)
        console.log(names);
    })




// ================================================================== Practice =================================================================
// Задание 1
// Реализуйте сетевой запрос по адресу 
// https://jsonplaceholder.typicode.com/todos
// Получиче список выполненных задач в консоль.

let url2 = 'https://jsonplaceholder.typicode.com/todos'
fetch(url2)
    .then((res) => res.json())
    .then((data) => {
        let complitedTodos = data.filter(el => el.completed) //  == let complitedTodos = data.filter(el => el.completed === true)
        // let complitedTodos = data.filter(el => !el.completed) ==>  let complitedTodos = data.filter(el => el.completed !== true)
        console.log(complitedTodos);
})



// ------------------------------------------------------- Разновидности сетевых запросов -------------------------------------------------------
// GET(чтение), POST(добавление), DELETE(удаление), PATCH(изменение)
// https://jsonplaceholder.typicode.com

//                                              POST (данные)
//                           client          ------------------>          server
//                                                                              \          сервир конвертирует 
//                                                                               \         данные в JSON и потом в 
//                                                                                \        SQL для отправчки данных в  СУБД
//                                                                                  СУБД(база данных)


// GET  - запрос на чтение данных
// POST - запроc с данными (который должен учитывать бек) на добавление
// DELETE - запроc на удаление
// PATCH - запроc на изменение


// ================================================================================================================================================================================================

// ------------------------ GET (чтение) ------------------------
// Получиче список выполненных задач в консоль.

let url3 = 'https://jsonplaceholder.typicode.com/todos'
fetch(url3)
    .then((res) => res.json())
    .then((data) => {
        let complitedTodos = data.filter(el => el.completed)
        console.log(complitedTodos);
});

// ..................... Practice (GET - запрос) .....................
// Задание 
// Напишите функцию getUsers(), которая будет осуществлять запрос по адресу
// http://212.8.247.94:3050/users
// Полученный ответ выведите в косноль

function getUsers() {
    let url6 = 'http://212.8.247.94:3050/users' // 'http://212.8.247.94:3050/users/870'
    fetch(url6)
        .then((res) => res.json())
        .then(data => console.log(data))
}
getUsers()




// ================================================================================================================================================================================================

// ------------------------ POST(добавление) ------------------------------
// method - описывает тип запроса
// headers - определяет заголовки запроса (информация о данных, клиента)
// body - xранит сами данные, которые необходимо отправить в сторону бэкэнда

// добавление или создание новых данных
let post = {
    userId: 1,
    title: 'TEST',
    body: 'BODY TEST'  
}

let url4 = 'https://jsonplaceholder.typicode.com/posts'
fetch(url4, {
    method: 'POST',
    headers: {          // headers некогда неменяется
        'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(post)
})
    .then(res => res.json())
    .then(data => console.log(data))


// ..................... Practice (Post - запрос)  ..................... 
// Задание 1
// Реализуйте POST запрос, добавив новую todo-задачу. 
// https://jsonplaceholder.typicode.com/todos
// Сформируйте данные на ваше усмотрение, выведите ответ от сервера в косноль

let todo = {
    userId: 1,
    title: 'TEST from Todos',
    completed: true 
}

let url5 = 'https://jsonplaceholder.typicode.com/todos'
fetch(url5, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(todo)
})
    .then(res => res.json())
    .then(data => console.log(data))


// Задание 2
// Напишите функцию createNewUser(obj), которая будет отправлять POST - запрос с данными нового
// пользователя. Сами данные необходимо передавать как аргумент в виде объекта
// http://212.8.247.94:3050/users/create

// let user = {
//     name: 'Elvira',
//     age: 19,
//     salary: 1000,
//     job_id: 'Telran student' 
// }

// function createNewUser(obj) {
//     let url7 = 'http://212.8.247.94:3050/user/create'
//     fetch(url7, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8',
//         },
//         body: JSON.stringify(obj)
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         // .catch(e => console.log(e)) найти ошибки если нужно
// }
// createNewUser(user)



// ================================================================================================================================================================================================

// ------------------------ DELETE (удаление) ------------------------------
let url8 = 'http://212.8.247.94:3050/users'
fetch(url8 + '/870',{
    method: 'DELETE'
})
    .then(res => res.json())
    .then(data => console.log(data))




// ..................... Practice (DELETE - запрос)  .....................

// Напишите функцию deleteUserById(id), которая будет реализовать удаление (fetch DELETE) пользователя по
// указанному ID. 
// Устранить дубли на сервере


// function deleteUserById() {
//     let url8 = `http://212.8.247.94:3050/users/${id}`
//     fetch(url8,{
//         method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))

//     for (let i = 850; i <= 922; i++) {
//         meout(() => {
//             deleteUserById(i) 
//         })   
//     }
// }
// deleteUserById()

function deleteUserById(id) {
    let url8 = `http://212.8.247.94:3050/users/${id}`
    fetch(url8,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))

}
deleteUserById(845)
deleteUserById(846)
deleteUserById(929)
deleteUserById(936)
deleteUserById(937)
deleteUserById(931)
deleteUserById(935)
deleteUserById(931)
deleteUserById(923)




// ================================================================================================================================================================================================

// ------------------------ Patch (изменение) ------------------------
let newData1 = {
    name: 'Tigran',
    age:  40,
    salary: 99
}

let url9 = `http://212.8.247.94:3050/users/846`
    
fetch(url9,{
    
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData1)

    .then(res => res.json())
    .then(data => console.log(data))
})


// ..................... Practice (Patch - изменение)  .....................
// Задача 
// Реализуйте функцию updateUser(obj, id) котоая будет осуществлять PATCH запрос
// с указанными данными в виде объекта, а также id.
let newData = {
    name: 'Maria',
    age: 30
};

function updateUser(obj, id) {
    let url10 = `http://212.8.247.94:3050/users/${id}`;
    
    fetch(url10,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj) 
    })
        .then(response => response.json())
        .then(data => console.log(data))
    
}
updateUser(newData, 844)
getUsers()