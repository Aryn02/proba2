function say_hi(name){
    alert('Hi, ' + name)
}
let maname = 'Aryn';
say_hi(maname);

// let num = 2  //global variable
// if (num % 2 == 0) {
//     let txt = 'Even number' // local variable
// }


// анонимная функция
// let result = function(a, b){
//     return a + b
// }


// стрелочная функция 
// const/let/var function_name = (arg1, arg2 ..) => {
//     code
// }

// const sum = (a, b) => {
//     return a + b;
// }

// 1 task
function cube(n){
    return Math.pow(n, 3)
}
console.log(cube(3));

// task 2  Сделайте функцию, 
// которая отнимает от первого числа второе и делит на третье.
function task2 (a, b, c){
    return (a-b)/c
}
console.log(task2(15, 5, 5));

// 3. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
function task3 (day){
    if (day == 1) {
        return 'Понедельник'
    }else if(day == 2){
        return 'Вторник'
    }else if(day == 3){
        return 'Среда'
    }else if(day == 4){
        return 'Четверг'
    }else if(day == 5){
        return 'Пятница'
    }else if(day == 6){
        return 'Суббота'
    }else if(day == 7){
        return 'Воскресенье'
    }
}
console.log(task3(4))

//4. Напишите программу, чтобы найти квадрат любого числа с помощью функции.
function square(n){
    return n*n
}
console.log(square(4))

// 5. Напишите программу, чтобы поменять местами два числа с помощью функции.
function swap(first, second) {

    let arr = [];
    arr.push(second,first)
    return arr;
}
console.log(swap(4, 6))
//6. Напишите программу для проверки четности или нечетности 
// заданного числа с помощью этой функции.
function evenodd(n){
    if (n % 2 == 0) {
        return n +' is even '
    }else{
        return n +' is odd '
    }
}
console.log(evenodd(5))

// 7. Напишите программу, 
// чтобы получить самый большой элемент массива с помощью функции.

function findmax(arr) {
    let max = arr[0];
    for (i=0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
      }
      return max;
}
let a = [1, 2, 3];
console.log(findmax(a));

//8. Напишите функцию, 
//которая возвращает сумму двух чисел. Используйте директиву return.

function adding(a, b) {
    return a + b;
}
console.log(adding(3, 4))

//9. Напишите функцию, 
//которая возращает минимум из двух чисел. Используйте директиву return.
function findmin(a, b) {
    return 'min of ' + a + ' and ' + b + ' is '+ Math.min(a, b)
}
console.log(findmin(5, 6))

// 10. Создайте функцию которая выводить максимум из трех чисел
function maxof3(a, b, c) {
    return Math.max(a, b, c)
}
console.log(maxof3(1, 2, 3))