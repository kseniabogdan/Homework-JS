"use strict"
// exercise 1
let name = prompt('Как вас зовут?', 'Света');
let age = prompt('Какой ваш возраст?', '18');

{
    let city = prompt('В каком городе вы живете?', 'Минск');
    let phone = prompt('Ваш телефон?', '29 111 22 33');
    let email = prompt('Ваша электронная почта?', 'hello@gmail.com');
    let company = prompt('Где вы работаете?', 'Белтелеком');
    console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и 
работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);
}

// exercise 2
{
    let year = 2023 - age
    console.log(`${name} родился(лась) в ${year} году.`);
}

// exercise 3
{
    let numbers = [34, 5, 9, 13, 28, 15];
    let sum1 = +numbers.slice(0, 1) + +numbers.slice(1, 2) + +numbers.slice(2, 3);
    let sum2 = +numbers.slice(3, 4) + +numbers.slice(4, 5) + +numbers.slice(5);
    (sum1 === sum2) ? console.log('Да') : console.log('Нет');
}

// exercise 4
{
    let a = 1;
    (a > 0) ? console.log('Верно') : console.log('Неверно');
    a = 0;
    (a > 0) ? console.log('Верно') : console.log('Неверно');
    a = -3;
    (a > 0) ? console.log('Верно') : console.log('Неверно');
}

// exercise 5
let a = 10;
let b = 2;
{
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    if ((a + b) > 1) {
        console.log(Math.pow ((a + b), 2))};
}

// exercise 6
{
    if (((a > 2) && (a < 11)) || ((b >= 6) && (b < 14))) {
        console.log('Верно');}
        else {console.log('Неверно')};

}

// exercise 7
{
    let n = prompt('Введите число от 0 до 59', '20');

    if (n >= 0 && n <= 15) {
        console.log('Первая четверть часа');
    } else if (n > 15 && n <= 30) {
        console.log('Вторая четверть часа');
    } else if (n > 30 && n <= 45) {
        console.log('Третья четверть часа');
    } else if (n > 45 && n <= 59) {
        console.log('Чтвертая четверть часа');
    } else {console.log('Неверное значение');}
}

// exercise 8

{
    let n = prompt('Введите дату от 0 до 31', '20');

    if (n >= 1 && n <= 10) {
        console.log('Первая декада месяца');
    } else if (n > 10 && n <= 20) {
        console.log('Вторая декада месяца');
    } else if (n > 20 && n <= 31) {
        console.log('Третья декада месяца');
    } else {console.log('Неверное значение');}
}

// exercise 9
let day = prompt('Введите количество дней', '365');

{
    let year = day / 365;
let month = day / 31;
let week = day / 7;
 
if (year >= 1) {
    console.log(`${year} лет`);
}
else {
    console.log("Меньше года");
}

if (month >= 1) {
    console.log(`${month} месяцев`);
}
else {
    console.log("Меньше месяца");
}

if (week >= 1) {
    console.log(`${week} недель`);
}
else {
    console.log("Меньше недели");
}

console.log(day * 24 + ' часов');
console.log(day * 1440 + ' минут');
console.log(day * 86400 + ' секунд');
}

// exercise 10
{
    switch (true) {
        case (day >= 1 && day <= 31):
            console.log('Январь, зима');
            break;
        case (day >= 32 && day <= 59):
            console.log('Февраль, зима');
            break;
        case (day >= 60 && day <= 90):
            console.log('Март, весна');
            break;
        case (day >= 91 && day <= 120):
            console.log('Апрель, весна');
            break;
        case (day >= 121 && day <= 151):
            console.log('Май, весна');
            break;
        case (day >= 152 && day <= 181):
            console.log('Июнь, лето');
            break;
        case (day >= 182 && day <= 212):
            console.log('Июль, лето');
            break;
        case (day >= 213 && day <= 243):
            console.log('Август, лето');
            break;
        case (day >= 244 && day <= 273):
            console.log('Сентябрь, осень');
            break;
        case (day >= 274 && day <= 304):
            console.log('Октябрь, осень');
            break;
        case (day >= 305 && day <= 334):
            console.log('Ноябрь, осень');
            break;
        case (day >= 335 && day <= 365):
            console.log('Декабрь, зима');
            break;
        default:
            console.log('Неверное значение или больше года');
    }
}


