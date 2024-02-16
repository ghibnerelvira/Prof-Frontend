// 1. Стилизовать trigger (красная кнопка).
// 2. При клике на trigger изменять текст на ON и цвет заднего фона на зеленый
// 3. При клике на кнопку отправлять запрос по 
// ссылке https://reqres.in/api/users?page=1 и выводить 
// в консоль полученные данные (массив с объектами)

const triggerBnt = document.querySelector('.trigger');

triggerBnt.addEventListener('click', () => {
    triggerBnt.classList.toggle('trigger_on');
    triggerBnt.innerText = triggerBnt.classList.contains('trigger_on') ? 'ON' : 'OFF'

    // triggerBnt.classList.contains('trigger_on') ? requestData() : ''
    triggerBnt.classList.contains('trigger_on') ? requestData() : console.clear() // очиска OFF и добавление ON
}); 

function requestData() {
    let url = 'https://reqres.in/api/users?page=1';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
    .then((res) => res.json())
    .then(json => {
        console.log(json.data)
    })
}

// toggle - добавляет класс если его нету и удаляет если он есть (клие назат)

// triggerBnt.addEventListener('click', () => {
//     triggerBnt.style.backgroundColor = 'green';
//     triggerBnt.innerText = 'ON';
// }); 

// 2. Вариант
// function requestData() {
//     fetch('https://reqres.in/api/users?page=1')
//     .then((res) => res.json())
//     .then(json => console.log(json.data))
// }
