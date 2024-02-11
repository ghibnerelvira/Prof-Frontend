// 1 Задание 
// Сформируйте карточки для каждого пользователя используя функцию рендер
// Необходимо софрмировать сетевой запрос в виде функции, функцию render необходимо 
// вызвать с сететвого запроса

// Пример
// function getUsers(){
//     ...render(data)
// }
// function render(){
// }
// getUsers()

let users_wrapper = document.querySelector('.users_wrapper');


// Задание 2.
// На стороне JS релазуйте процесс, который будет собирать данные с input полей (с формы) после нажатия на кнопку submit
// И выводить в консоль все данные в виде объекта
let add_form = document.querySelector('.add_form')
add_form.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(add_form)
    let data = Object.fromEntries(form_data)
    console.log(data)

    createNewUser(data)
}
// add_form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let form_data = new FormData(add_form)
//     let data = Object.fromEntries(form_data)
//     console.log(data);
// })


// 3 Задание
// После нажати на submit реализуйте пост запрос, который учтет данные с формы 
// для добавления нового юзера в бэкенд
function createNewUser(obj){
    let url = 'http://212.8.247.94:3050/user/create'
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            getUsers()
        })
        .catch(e => console.log(e))
}



function getUsers() {
    let url = 'http://212.8.247.94:3050/users' 
    fetch(url)
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            render(data)
        })
}


function render(array) {
    
    users_wrapper.innerHTML = '';
    
    for (let elem of array.reverse()) {
        let userCard = document.createElement('div');
        userCard.className = 'user_card';

        let userName = document.createElement('h1');
        userName.innerText = `Name: ${elem.name}`;

        let userAge = document.createElement('p');
        userAge.innerText = `Age: ${elem.age}`;

        let userJob = document.createElement('p');
        userJob.innerText = `Job: ${elem.job_id}`;

        let userSalary = document.createElement('p');
        userSalary.innerText = `Salary: ${elem.salary}`;

        let userId = document.createElement('p');
        userId.innerText = `ID: ${elem.id}`;

        userCard.append(userName, userAge, userJob, userSalary, userId);
        users_wrapper.append(userCard);
        
    }
}
getUsers()


