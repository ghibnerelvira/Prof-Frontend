// 1. Написать функцию renderUsers(), которая принимает массив с объектами в качестве аргумента 
// и для каждого объекта массива создает див с двумя параграфами (name и username пользователя)

// 2. Добавить карточке пользователя класс user_card и задать 
// через css стили border, border-radius, padding, width

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => renderUsers(json))

const usersContainer = document.querySelector('.users_container');

const renderUsers = users => {
  users.forEach(el => {
    const userCard = document.createElement('div');
    const nameElem = document.createElement('p');
    const usernameElem = document.createElement('p');

    nameElem.innerText = `Name: ${el.name}`;
    usernameElem.innerText = `Username: ${el.username}`;

    userCard.classList.add('user_card')

    // 3. Если имя пользователя начинается на букву C, то покрасить цвет заднего фона в голубой. 
    // В ином случае покрасить светло-коричневый. 
    userCard.style.backgroundColor = el.name[0].toUpperCase() === 'C' ? 'lightblue' : 'pink';
    
    // 4. В карточку пользователя добавить его почту и сделать ее кликабельной. (a, mailto)
    const userEmailElem = document.createElement('a')
    userEmailElem.innerText = `Email: ${el.email}`;

    userEmailElem.setAttribute('href', `mailto:${el.email}`);
    userEmailElem.href = `mailto:${el.email}`;
    

    // 5. В карточку пользователя добавить параграф с адресом (индекс, город, улица, номер дома)
    const userAddressElem = document.createElement('p')
    userAddressElem.innerText = `Address: ${el.address.zipcode} ${el.address.city}, ${el.address.street}, ${el.address.suite}`;


    // 6. При клике на карточку перекрашивать цвет заднего фона в светло-розовый
    userCard.addEventListener('mouseover', () => {
        // click, mouseenter, mouseover -> HTML DOM Event Object // https://www.w3schools.com/jsref/dom_obj_event.asp
        userCard.style.backgroundColor = 'lightyellow'; 
        userCard.style.color ='midnightblue'   
    })
    userCard.addEventListener('mouseout', () => {
        userCard.style.backgroundColor = el.name[0].toUpperCase() === 'C' ? 'lightblue' : 'pink';
        userCard.style.color ='black' 
    })

   
    
    userCard.append(nameElem, usernameElem, userEmailElem, userAddressElem);
    usersContainer.append(userCard);
  })
}