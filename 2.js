/*1) Необходимо написать функцию возвращающую тип принятого аргумента
2) Написать функцию которая возвращает true для четных чисел, false для нечетных
2) Необходимо написать функцию принимаю 1 аргумент, если аргумент строка - вывести эту строку в консоль,
если аргумент число - вывести в консоль четное оно или нечетное.
 Для определения четности использовать функцию из п.2 . Для определения типа использовать функцию из п.1 .
3) Написать функцию которая принимает число, если число четное, то необходимо умножить его на 2 и вывести в консоль результат,
если число нечетное, то необходимо умножить его на 3 и вывести в консоль. (функция должна быть в 2ух вариантах, с ифами и с тернарным оператором)
4) написать функцию которая принимает 2 аргумента(аргументами могут быть числа и строки содержащие в себе числа),
если оба аргумента четные, то функция должна вывести на экран сумму чисел, если хотябы один из аргументов четный,
то функция должна вывести разницу чисел, иначе произведение чисел
Вызвать все функции кроме первых двух в конце скрипта!*/

function returnArg (x){
    return typeof x
}
console.log(returnArg(true));
function returnBool (a){
    return a % 2 === 0;
}
console.log(returnBool(3));
function returnType (b){
    if (returnArg(b) === 'string'){
        console.log(b)
    }else if (returnArg(b) === 'number') {
        console.log (returnBool(b));
    }
}
function evenNumberone(q){
    if (q % 2 === 0){
        console.log(q * 2 )
    }else {
        console.log(q * 3 )
    }
}
function evenNumbertwo(q){
    let a =  (q % 2 === 0 ? (q * 2 ) : (q * 3));
    console.log(a)
}
function twoArg (x, y){
    if (x % 2 === 0 && y % 2 === 0) {
        console.log(x + y)
    }
    else if (x % 2 === 0 || y % 2 === 0){
        console.log(x - y)
    }
    else {
        console.log(x * y)
    }
}
returnType(34);
evenNumberone(4);
evenNumbertwo (5)
twoArg(3, 2)
