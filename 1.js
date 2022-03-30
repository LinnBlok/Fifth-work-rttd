/*Объект должен содержать в себе такие свойства как:
1 )Имя
2) Фамилия
3) Дата рождения
4) Причина по которой вы учите JavaScript

Объект должен содержать методы
1) Вывод в консоль имени
2) Вывод в консоль Фамилии
3) Вывод в консоль Даты рождения
4) Вывод в консоль причины по которой вы учите JS в формате  "{Ваше имя} хочет выучить JS потому что {причина по которой вы учите JS}" - на место текста в фигурных скобках должны подставляться заранее заполненные свойства из вашего объекта
5) Мечтать - метод принимающий один аргумент - вашу мечту и выводящий в консоль строку "{Ваше имя} мечтает о {мечта}"

В конце скрипта необходимо вызвать метод выводящий всю информацию и метод мечтать.*/

const human = {
    firstname: 'Linn',
    lastname: 'Blok',
    age: '26.04.1997',
    motivation: 'хочет кучеряво жить',
    dream: 'мир во всем мире',
    logFirstname(){
        console.log( 'Имя:', this.firstname);
    },
    logLastname(){
        console.log('Фамилия:', this.lastname);
    },
    logAge(){
        console.log('Дата рождения:', this.age);
    },
    logMotivation(){
        console.log(this.firstname, 'хочет выучить JS потому что', this.motivation);
    },
    logDream(arg){
        console.log (this.firstname, 'мечтает о', arg);
    },
    logFullInformation(){
        this.logFirstname();
        this.logLastname();
        this.logAge();
        this.logMotivation();
        this.logDream(this.dream);
    },
}
human.logFullInformation();