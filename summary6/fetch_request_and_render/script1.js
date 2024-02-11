// ========== 1. ==========
// 1. Написать функцию, которая принимает в качестве аргумента число (1 или 2) 
// и отправляет get-запрос по ссылке https://reqres.in/api/users?page=X 
// и выводит в консоль полученные по запросу данные


let cardsContainer = document.querySelector('.cards_container');
// 1.
// let btn1 = document.querySelector('.btn_1');
// let btn2 = document.querySelector('.btn_2');
// проше через диструктиризацию 
const [btn1, btn2] = document.querySelectorAll('.triggers div');


function getUsers(pageNumber) {
    let url = `https://reqres.in/api/users?page=${pageNumber}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
    .then((res) => res.json())
    .then(json => {
        console.log(json.data)
        renderUsers(json.data)
    })
//                                                  .then(json => console.log(json.data)) // (6) [{…}, {…}, {…}, {…}, {…}, {…}]
//                                                  .then(data => console.log(data)
//                                                      {page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
//                                                          data: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    .catch(error => console.error('Error fetching data:', error));
}

// ========== 2. ==========
// 2. Написать функцию renderUsers(), которая примает массив с объектами 
// и создает для каждого объекта карточку пользователя 
//(автар, имя + фамилия, email кликабельный) 
// и добавляет эти карточки в div.cards_container

function renderUsers(users) {
    
    cardsContainer.innerHTML = '';
    
    for (let elem of users) {
        let userCard = document.createElement('div');

        let userAvatar = document.createElement('img');
        userAvatar.src = elem.avatar;
        userAvatar.alt = `${elem.first_name} ${elem.last_name}`;

        let userName = document.createElement('p');
        userName.innerText = `Name: ${elem.first_name} ${elem.last_name}`;

        let userEmail = document.createElement('a');
        userEmail.innerText = elem.email;
        userEmail.href = `Email: ${elem.email}`;

        userCard.classList.add('user_card');
        userCard.style.backgroundColor = elem.first_name[0].toLowerCase() === 'e' ? 'lightgreen' : 'lightblue';

        userCard.append(userAvatar, userName, userEmail);
        cardsContainer.append(userCard);
        
    }
}
// ======= 2.Вариант =======
// const cardsContainer = document.querySelector('.cards_container');

// const renderUsers = users => {
//   users.forEach(el => {
//     const cardElem = document.createElement('div');
//     const avatarElem = document.createElement('img');
//     const nameElem = document.createElement('p');
//     const emailElem = document.createElement('a');

//     nameElem.innerText = `${el.first_name} ${el.last_name}`;
//     emailElem.innerText = el.email;

//     emailElem.href = `mailto:${el.email}`;

//     avatarElem.src = el.avatar;
//     avatarElem.alt = `${el.first_name} ${el.last_name}`;

//     cardElem.classList.add('user_card');
//     cardElem.style.backgroundColor = el.first_name[0].toLowerCase() === 'e' ? 'lightgreen' : 'lightblue';

//     cardElem.append(avatarElem, nameElem, emailElem);
//     cardsContainer.append(cardElem);
//   })
// }


// 3. При перезагрузке страницы прогружаются юзеры с page 1. 
// При клике на 1 - прогружаются юзеры с page 1 (вызывается функция renderUsers(1)). 
// При клике на 2 - прогружаются юзеры с page 2 (вызывается функция renderUsers(2))
// Перед рендером карточек нужно очищать контейнер cards_container

// btn1.addEventListener('click', function () {
//     getUsers(1); 
// })

getUsers(1)
 

btn1.addEventListener('click', () => getUsers(1)); 

btn2.addEventListener('click', () => getUsers(2)); 



