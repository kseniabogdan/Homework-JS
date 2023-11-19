"use strict"

// EXERCISE 1  
{
    let arr = [1, 2, 3, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
 
// EXERCISE 2  
{
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > -10 && arr[i] < -3){
        console.log(arr[i]);
    }
    }
}
// EXERCISE 3  
{
    let arr = [];
    for (let i = 23; i <= 57; i++) {
        arr.push(i);
    }
    console.log(arr);

    let arr2 = [];
    let j = 23;
    while (j <= 57) {
        arr2.push(j);
        j++;
    }
    console.log(arr2);

    let result = 0;
    for (let k = 0; k < arr.length; k++){
        result += arr[k];
    }
    console.log("result = " + result);
} 

// EXERCISE 4 
{
    let arr = ['10', '20', '30', '50', '235', '3000']
    for (let i = 0; i < arr.length; i++){
        if (Number(arr[i][0]) === 1 || Number(arr[i][0]) === 2 || Number(arr[i][0]) === 5){
            console.log(arr[i]);
        } 
    }
}

// EXERCISE 5 
{
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'СБ' || arr[i] === 'ВС'){
            document.write(arr[i].bold() + " ");
        } else {
            document.write(arr[i] + " ");
        }
    }
}

// EXERCISE 6
{
    let arr = ['10', '20', '30', '50', '235', '3000'];
    arr.push('250');
    console.log(arr[arr.length-1]);
}

// EXERCISE 7

{
    let arr = [];
    let element;

    for (let i = 0; element !== '' && element !== ' ' && element !== null; i++){
       element = prompt("Введите несколько чисел. Для прекращения цепочки ввода введите пустое значение");
       arr.push(element);
    }
    arr.pop();
    console.log('Получены данные: ' + arr);
    
    arr.sort((a, b) => a - b)
    console.log('Отсортированы полученные данные: ' + arr);
}

// EXERCISE 8
{
    let arr = [12, false, 'Текст', 4, 2, -5, 0];
    let newArr = [];
    let i = arr.length-1;
    while (i >= 0) {
        newArr.push(arr[i]);
            i--;
    }
    console.log(newArr);

    console.log(arr.reverse());
}

// EXERCISE 9
{
    let arr = [5, 9, 21, , , 9, 78, , , , 6];
    let sum = 0;
     for (let i = 0; i < arr.length; i++){
        if (arr[i] === undefined){
            sum = sum + 1;
        } 
    } 

    console.log('Количество пустых элементов: ' + sum)
}

// EXERCISE 10
{
    let arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];

    let start = arr.indexOf(0); // 2
    let end = arr.lastIndexOf(0) //9

    if (start !== -1 && end !== -1) {
        let newArr = arr.slice(start + 1, end);
        let sum = 0;
        for (let i = 0; i < newArr.length; i++) {
            sum = sum + newArr[i];
        }
        console.log(sum);
    } 
}


