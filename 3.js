/*1) Создать функцию которая выводит в консоль число и строку содержащую в себе информацию о четности этого числа
2) Создать функцию принимающую 2 числа, выбрать из двух чисел меньшее.
 Запустить цикл от 1 до n(где n меньше число из аргументов функции) и вывести поочередно все числа до N в консоль.
 Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта.
3) Создать функцию принимающую 2 числа, выбрать из двух чисел большее.
Запустить цикл от 1 до n(где n большое число из аргументов функции) и вывести поочередно все четные числа до N в консоль.
Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта.
4) Создать функцию принимающую 2 числа(N и M).
Запустить цикл от 1 до N. Вывести поочередно числа и их произведение с числом M, если произведение с чиcлом M - нечетное.
 Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта.*/

function taskOne (x){
    console.log (x)
    if (x % 2 === 0){
        console.log('четное')
    }else {
        console.log('нечетное')
    }
}
taskOne (3);

function taskTwooptionone(a,b){
    let n = Math.min(a,b);
    let i = 1;
    while (i < n) {
        console.log(i)
        i++;

    }
}
function taskTwooptiontwo (a,b){
    let n = Math.min(a,b);
    for (let i = 1;i < n;i++){
        console.log(i)
    }
}
function taskTwooptionthree(a,b) {
    let n = Math.min(a,b);
    let i = 1;
    do {
        console.log(i)
        i++;
    } while (i < n);
}

taskTwooptionone(4,9);
taskTwooptiontwo(8,15);
taskTwooptionthree(5,10);

function taskThreeoptionone(x,y){
    let n = Math.max(x,y);
    let i = 1;
    while (i < n) {
        i++;
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
function taskThreeoptiontwo(x,y){
    let n = Math.max(x,y);
    for (let i = 1;i < n;i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
function taskThreeoptionthree(x,y) {
    let n = Math.min(x, y);
    let i = 1;
    do {
        console.log(i)
        i++;
    } while (i < n);
}
taskThreeoptionone(4,19);
taskThreeoptiontwo(1,12);
taskThreeoptionthree(21,46);

function taskFouroptionone(n,m) {
    let i = 1;
    while (i < n) {
        i++;
        let c = i * m;
        if (c % 2 === 1) {
            console.log(i)
            console.log(c)
        }
    }
}
function taskFouroptiontwo(n, m){
    for (let i = 1;i < n;i++){
        console.log(i)
        let c = i * m;
        if(c % 2 === 1){
            console.log(c)
        }
    }
}
function taskFouroptionthree(n, m){
    let i = 1;
    do {
        let c = i * m;
        if(c % 2 === 1) {
            console.log(c);
        }
        console.log(i)
        i++;
    } while (i < n);
}
taskFouroptionone(41,439);
taskFouroptiontwo(9, 77);
taskFouroptionthree(13, 87);