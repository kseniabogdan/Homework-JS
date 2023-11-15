"use strict"

//exercise 1
{
    function calcResult(a, b, c){
        let result = (a - b) / c;
        console.log(result)
}
calcResult(12, 2, 5)
}

//exercise 2
{
    function calcDegree(d){
        console.log("Квадрат числа = " + Math.pow(d, 2))
        console.log("Куб числа = " + Math.pow(d, 3))
}
calcDegree(4)
}

//exercise 3
{
    function returnMin(a, b){
        if (a < b) { return a
    } else {return b}
}
    returnMin()
    console.log(returnMin(8, 15));
    
    function returnMax(a, b){
        if (a > b) { return a
    } else {return b}
}
    returnMax()
    console.log(returnMax(25, 100));

}

//exercise 4
{
    let e = +prompt ("Введите число начала массива данных", "1")
    let f = +prompt ("Введите число окончания массива данных", "10")
    let massive = [];
    function createMassive(){
        if ((e > 0) && (f > 0) && (f > e)) {
            for (e; e <= f; e++){
            massive.push (e);}
        } else {console.log("Неверное значение")}
    } 

    createMassive()

    function outputMassive(){
    console.log(massive)}

    outputMassive()
}

//exercise 5
{
    function isEven(m){
        if ((m % 2) === 0){
            return true
        } else {return false}
    }
    console.log(isEven(4))


//exercise 6

    
    function getNewArray(arr) {
        let newArray = [];
        for(let value of arr) {
            if (isEven(value)) newArray.push(value);
    }
    return newArray
}

    console.log(getNewArray([4, 12, 9, 5, 8, 3]))
}

//exercise 7
{
    function drawPiramid(value, param){
        for(let i = 1; i <= +value; i++ ){
            let str = '';
            for(let j = 0; j < i; j++){
                str += param || i;
            }
            console.log(str);
        }
    }
    drawPiramid(prompt('Введите количество строк'), prompt('Введите символ')) 
}

//exercise 8
{
    function drawTriangle(value){
        let str ='*';
        let count = value - 1;
        for (let i = 1; i <= value; i++){
            let white = ' '.repeat(count); 
            count--;
            console.log(`${white}${str}${white}`)
            str += '**';
        }
    }

    drawTriangle(prompt('Введите количество строк')) 
}

//exercise 9
console.log('exercise 9');

{
    function printFibonacci(n){
        let fibonacci = [0, 1];
        for (let i = 2; i < n; i ++) {

            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }
        return fibonacci.slice(0,n)
    }

    console.log(printFibonacci(1000))
}

// exercise 10
{
    function getSum (value) {
        let sum = 0;
        for( let i = 0; i < value.length; i++){
            sum += +value[i]
        }

        console.log(sum);
        if (sum > 9) {
            return getSum(String(sum))
        }
        return sum

    }
    getSum('99')
}

// exercise 11

{
    function printElement(arr, key) {
        
        if (key < arr.length) {console.log(arr[key]);
        } 
        if (key < arr.length) {printElement(arr, key + 1);
        } 

}
    printElement([4, 12, 9, 5, 8, 3], 0)
}

// exercise 12

{
    function showInfo (name, group){
        let arr = [`Домашняя работа: "Функция"`, 
        `Выполнил: студент гр. ${group}`,
        `${name}`
    ]
    let longString = 0

    for(let value of arr) {
        if(value.length > longString) {
            longString = value.length
        }
    }
    for(let i = 0; i < arr.length; i++){
        const countRepeat = longString - arr[i].length

        arr[i] = `* ${arr[i]}${' '.repeat(countRepeat)} *` 
        
    }
    arr.push('*'.repeat(longString + 4))
    arr.unshift('*'.repeat(longString + 4))

    for (let value of arr){
        console.log(value);
        }
    }
    showInfo(prompt('Введите фамилию, имя, отчество'), prompt('Введите номер группы'))
}
 
