// ------- Practice 1 ------- 
// Consol:
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even

for (let i = 0; i < 5; i++) {
    if (i%2==0){
    console.log(`${i} is even`);
    // console.log(i + " is even");
}else{
    console.log(`${i} is odd`);
    // console.log(i + " is odd");
    }
}


// ------- Practice 2 -------
// вывод всех элементов
// чётное не чётное
let array1 = [4, 5, 1, 2, 0, 9, 56]; 

for (let i = 0; i < array1.length; i++) {
    // console.log(i, array1[i]); i-> index от 0...  / array1[i]-> массив с числами
    if (array1[i]%2==0) {
        // Вывод четных элементов
        console.log(`${array1[i]} is even`);
        // Вывод только  четных элементов
        // console.log(array1[i]+ " is even");
    } else {
        // Вывод не четных элементов
        console.log(`${array1[i]} is odd`);
    }
}


// ------- Practice 3 -------
// найти min max массива
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Находим минимальное значение
let minValue = Math.min(...myArray);
// ... используется для передачи элементов массива 
// в функцию Math.min или Math.max как отдельные аргументы. 
// Это делается для того, чтобы не приходилось явно указывать 
// каждый элемент массива в виде отдельного аргумента.

// Находим максимальное значение
let maxValue = Math.max(...myArray);

// Выводим результаты
console.log("Минимальное значение 1: " + minValue);
console.log("Максимальное значение 1: " + maxValue);


// или 
let array2 = [2, 5, 1, 3, 0, 7, 38];
function maxElement(array2) {
    let max = array2[0];
    for (let i = 1; i < array2.length; i++) {
        if (array2[i] > max){
        max = array2[i];
        }
    }
    return max;
}

function minElement(array2) {
    let min = array2[0];
    for (let i = 1; i < array2.length; i++) {
        if (array2[i] < min){
        min = array2[i];
        }
    }
    return min;
}
console.log("Минимальное значение 2: " + maxElement(array2));
console.log("Максимальное значение 2: " + minElement(array2));



// ------- Practice 4 -------
let array3 = [1, 2, 3];
// Consol: [ 1, 2, 3, 4 ]
array3.push(4); 
console.log(array3);
// вывод числа всех index + save Consol: 5
let y = array3.push(4);
console.log(y);
// удаление последнего элемента
let x = array3.pop();
console.log(x);

// ------- Practice 5 -------
// вывод чисел с index от 0 до 2
let array4 = [ 1, 2, 3, 4, 5 ];
let newArray = array4.slice(0, 2);
console.log(newArray);

// ------- Practice 6 -------
// замена чисел
let array5 = [ 1, 2, 3, 4, 5 ];
let newArray1 = array5.splice(0, 3, 20);
console.log(array5);
