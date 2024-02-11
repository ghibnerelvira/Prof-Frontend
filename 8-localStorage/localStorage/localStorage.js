// ===================== Механизмы работы localStorage ===================

// 1) Метод позволяющий сохранить значение в LS по указанному ключу 'key'
// localStorage.setItem('key','Hello world')

// 2) Метод который позволяет получить значение из LS
// let result = localStorage.getItem('key')
// console.log(result); -> так как в истории есть  Hello world  <- и это вернёт
// если ключь ненайден вернёт null


// 3) Методы позволяет удалить 1 запись или вс е записи с хранилища
// (1 запись)
// localStorage.removeItem('key1')
// (все записи)
// localStorage.clear()


// ------------------------------------------------------------------------------------------------------------------------------

// Создать кнопку, которая переключает значение localStorage из 1 в 0 и обратно.
let btn_init = document.querySelector('.btn_init')
btn_init.onclick = () => {
    if (localStorage.getItem('init') === '1') {
        localStorage.setItem('init', 0)
    }else{
        localStorage.setItem('init', 1)
    }
}

// --- легче ----
// let btn_init = document.querySelector('.btn_init')
// btn_init.onclick = () => {
//     let initStorage = localStorage.getItem('init')
//     localStorage.setItem('init', (initStorage === 1) ? '0' : '1')
// }


// ------------------------------------------------------------------------------------------------------------------------------

// 1) Релизовать кнопку, которая будет выводить в консоль значение input элемента
// 2) При нажатии на кнопку значение поля ввода должно сохраняться в localStorage.
// 3) К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

let form_inp = document.querySelector('.form_inp')
let submit_btn = document.querySelector('.submit_btn')
let get_btn = document.querySelector('.get_btn');

submit_btn.onclick = () => {
    // 1)
   console.log(form_inp.value);
   // form_inp.value = 'HELLO WORLD!'

   // 2)
   localStorage.setItem("inputValue", form_inp.value);
   form_inp.value = ''

}
// 3)
get_btn.onclick = () => {
    form_inp.value = localStorage.getItem('form')
}



// ------------------------------------------------------------------------------------------------------------------------------

// Повторить document
// Создать каунтер. 
// Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно 
// меняться в соответствующую сторону. Значение counter не должно слетать 
// при перезагрузке страницы.


// 1.Вариант
// let counterElement = document.getElementById('counter');
// let incrementButton = document.getElementById('increment');
// let decrementButton = document.getElementById('decrement');

// // Проверяем, есть ли сохраненное значение в localStorage
// let counterValue = localStorage.getItem('counterValue') || 0;
// counterElement.textContent = counterValue;


// // ++
// incrementButton.addEventListener('click', () => {
//     counterValue++;
//     counterElement.textContent = counterValue;
//     localStorage.setItem('counterValue', counterValue);
// });

// // --
// decrementButton.addEventListener('click', () => {
//     counterValue--;
//     counterElement.textContent = counterValue;
//     localStorage.setItem('counterValue', counterValue);
// });


let[minus_btn, plus_btn] = document.querySelectorAll('.btn')
let p_count = document.querySelector('.count')

// let count = (localStorage.getItem('count')) ? +localStorage.getItem('count') : 0
// ---- короче ----
// let counter = localStorage.getItem('counter') || 0
// или оператор нулевого слияния (короче)
let count = (localStorage.getItem('count')) ?? 0

p_count.innerText = count

minus_btn.onclick = () => {
    p_count.innerText = --count
    localStorage.setItem('count', count)
}

plus_btn.onclick = () => {
    p_count.innerText = ++count
    localStorage.setItem('count', count)
}


// (conditon) ? value1 : value2  // (conditon) -> условие
// ---- короче ----
// value1 ?? value2
// value1 || value2

