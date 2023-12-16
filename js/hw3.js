"use strict"

//EXERCISE 1 Выведите числа от 1 до 50 и от 35 до 8.
{
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
    for (let i = 35; i >= 8; i--) {
        console.log(i);
    }
}

//EXERCISE 2 
{
    for (let i = 89; i >= 11; i--) {
        document.write(i, '<br />');
    }
}

//EXERCISE 3 
{
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

//EXERCISE 4 
{
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        let a = 0;
        for (let j = 1; j <= i; j++) {
            a = a + j;
        }
        sum = sum + a;
    }
    console.log(sum);
}

//EXERCISE 5 
{
    let i = 8

    while (i <= 56) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }

    for (i = 8; i <= 56; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

//EXERCISE 6
{
    for (let i = 2; i <= 10; i++) {
        for (let j = 2; j <= 10; j++) {
            { document.write(i + "*" + j + "=" + (i * j) + '<br/>'); }
        }
    }
} 

//EXERCISE 7
{
    let num = 0;

    for (let n = 1000; ; n /= 2) {
        if (n < 50) break;
        console.log(n);
        num++;
    }
    console.log(num);
}

//EXERCISE 8
{
    let i = 0;
    let sum = 0;
    let num;

    while ((num = +prompt("Введите число")) !== "0" && num != '') {
        i++;
        sum = sum + num;
        if (isNaN(num)) {
            alert("ошибка ввода")
        } else {
            if (num < 0) { alert("Вы ввели отрицательное число") }
        }
    }
    alert("Сумма чисел: " + sum + "\n" + "Среднее арифметическое: " + (sum / i));
}

//EXERCISE 8
{
    let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    let b = '', min, max;

    for (let i = 0; i < str.length; i++) {
        b += str[i];
        if (+str[i] && !+str[i + 1]) {
            if (typeof min !== 'number' || b < +min) min = +b;
            if (typeof max !== 'number' || b > +max) max = +b;
            b = '';
        }
    }
    console.log('Minimum:', min, 'Maximum:', max)
} 

//EXERCISE 9
{
let num = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let min = Number(num[0]);
let max = Number(num[0]);
let currentNum = 0;

for (let i = 0; i < num.length; i++) {
    const char = num[i];

    if (char === " " || i === num.length - 1) {
        if (i === num.length - 1) {
            currentNum += char;
        }

        if (currentNum !== "") {
            let current = Number(currentNum);

            if (current >= 0) {
                if (current < min) {
                    min = current;
                }
                if (current > max) {
                    max = current;
                }
            }

            currentNum = "";
        }
    } else {
        currentNum += char;
    }
}

console.log(`Самое маленькое число: ${min}`);
console.log(`Самое большое число: ${max}`);
}

