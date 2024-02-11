// =========================================== Меxанизмы работы с LS обектами =================================================
// JSON.stringify - конвертирует обекты в строчный JSON формат (строка)
// JSON.parse - конвертирует JSON в JS обект
// часто используется для корзины в онлайн магазине
let obj = {
    name: 'Alex'
}
localStorage.setItem('key', JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem('key')));

// -------------------------------------------------------- Задача 1 -----------------------------------------------------------
// Имеется строка со структурой массива. 
// Используя объект JSON преобразуйте данную строку в массив, добавьте в нее 
// еще пару чисел (80,90) и преобразуйте обратно в строку.

let string = '[20,50,60,70]'

// Результат: 
// '[20,50,60,70,80,90]'

let array = JSON.parse(string);
array.push(80, 90);

// localStorage.setItem('key', JSON.stringify(array));
// console.log(JSON.parse(localStorage.getItem('key'))); 
// ---- короче ----
console.log(JSON.stringify(array));



// -------------------------------------------------------- Задача 2 -----------------------------------------------------------
// Опишите две функции: writeLocalStorage(obj) и readLocalStorage(). 
// Функции должны записывать или считывать объекты в localStorage соответственно.
// writeLocalStorage должен в качестве аргумента получить объект
// readLocalStorage должен в консоль вернуть сам ОБЪЕКТ из LS

let obj1 = {
    name: 'Alex',
    age: 33
}

function writeLocalStorage(obj1) {
    localStorage.setItem('myObject', JSON.stringify(obj1));
}
function readLocalStorage() {
    console.log(JSON.parse(localStorage.getItem('myObject')));
}
writeLocalStorage(obj1)
readLocalStorage()





// -------------------------------------------------------- Practice --------------------------------------------------------
// создание и добавление карточек

let default_data = [
    {id: 1, title: 'Велосипед', price: 15000},
    {id: 2, title: 'Самокат', price: 2000},
    {id: 3, title: 'Ноутбук', price: 30000},
    {id: 4, title: 'Стол', price: 10000},
    {id: 5, title: 'Телевизор', price: 23000},
]

let data = JSON.parse(localStorage.getItem('products')) ?? default_data


let div_products = document.querySelector('.product_wrapper')
let add_form = document.querySelector('.add_form')
let remove_form = document.querySelector('.remove_form')

// чтобы документ html при отправки не обновлялся (preventDefault())
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// (при <form></form> в html всегда нужно указывать!, как обнуление настроик в браузере css *{} )
add_form.onsubmit = (event) => {
    event.preventDefault()

    // console.log(event.target);
    // или (одинаковое)
    // console.log(add_form);
    // доступ к input
    // console.log(event.target[0].value);
    // console.log(event); -> всё

    let form_data = new FormData(add_form) 
    // let form_data = new FormData(even.target)
    // form_data.(get)
    let inp_data = Object.fromEntries(form_data) // конвертация в строго Java Object
    // console.log(data);
    addNewProduct(inp_data)
}

remove_form.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(event.target)
    let value_id = form_data.get('id');
    removeProduct(+value_id)
}

function addNewProduct(info) {
    let new_product = {
        ...info,
        id: Date.now()
    }
    data.push(new_product)
    // data.push({...info, id: Date.now()})

    render(data)
}


// чтобы небыло повторного добавления
// function rerender(array) {
//     render(array)
// }


function removeProduct(id) {
    data = data.filter(elem => elem.id !== id)
    render(data)
}


function tolocalStorage(obj) {
    localStorage.setItem('products', JSON.stringify(obj))
}

function render(array) {
    div_products.innerHTML = '' // короче -> чтобы небыло повторного добавления
    tolocalStorage(array)
    for (let elem of array) {
        let div_card = document.createElement('div')
        let h_title = document.createElement('h2')
        let p_price = document.createElement('p')

        div_card.className = 'card'
        h_title.innerText = `${elem.id} \n ${elem.title}`
        p_price.innerText = elem.price

        div_card.append(h_title, p_price)
        div_products.append(div_card)
    }
}

render(data)


// Домашнее задание
// 1) Реализовать новую форму, которая будет включать инпут, по которому необходимо реализовать удаление товара
// В инпут необходимо передать значение ID товара и после нажатия товар должен быть удален на стороне разметки.
// 2) Реализовать механизмы работы LS. После каждого изменения массива должно просиходить сохранение документа. 
// После обновления массив не должен меняться. В случае, если LS не будет, оставить массив data.
// 3) Релизовать чтение данных из LS в момент обновления страницы


