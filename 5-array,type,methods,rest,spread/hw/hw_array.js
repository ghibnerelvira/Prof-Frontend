let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
]

// 1. Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
let evenIDresult = goods.filter((elem) => elem.id % 2 === 0)
console.log(evenIDresult);


// 2. Отфильтруйте продукты с количеством менее 5 единиц
let result = goods.filter((elem) => elem.count < 5)
console.log(result);


// 3. Найдите значение элемента массива (продукта), цена которого будет кратна 5
let priceresult = goods.find((elem) => elem.price % 5 === 0)
console.log(priceresult);


// 4. Найдите индекс элемента, count которого будет больше 11
let result1 = goods.findIndex((elem) => elem.count > 11);

if (result1 !== -1) {
    console.log(`Индекс элемента с count больше 11: ${result1}`);
} else {
    console.log('Элемент не найден');
}


// 5. Посчитайте количество элементов, count которых является нечетным числом
let result2 = goods.filter((elem) => elem.count % 2 !== 0)
let countOfOddCountElements = result2.length;
console.log(countOfOddCountElements);


// 6. Посчитайте количество элементов, имя которых начинается на “Т”
let nameResult = goods.filter((elem) => elem.title.charAt(0).toUpperCase() === 'Т')
let countOfbeginTName = nameResult.length;
console.log(countOfbeginTName);

// 7. Проверьте, есть ли хотя бы один продукт с ценой выше 500.
let someResult = goods.some((elem) => elem.price > 500)
console.log(someResult);


// 8. Создайте новый массив, элементы которого будут хранить значение цен всех
// товаров с 35-процентной скидкой (только цены)
let newArrayPrice = goods.map((elem) => elem.price * 0.65)
console.log(newArrayPrice);


// 9. Создайте новый массив, изменив только 1 сво-во count на значение 0 
// для всех элементов (учитывая другие  сво-ва)
let newArrayCount = goods.map((elem) => ({...elem, count: 0}))
console.log(newArrayCount);

// 10. Отсортируйте продукты по возрастанию цены
goods.sort((a, b) => a.price - b.price )
console.log(goods);


// 11. Отсортируйте массив по сво-ву title
goods.sort((a, b) => {
    return a.title.charCodeAt() - b.title.charCodeAt()
});
console.log(goods);

// Вариант 2 с localeCompare
// goods.sort((a, b) => a.title.localeCompare(b.title));
// console.log(goods);