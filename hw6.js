"use strict"
//EXERCISE 1
{
    let str = 'aas@bbb@ccc';
    let re = /@/gi;
    console.log(str.replace(re, '!')); 
} 

//EXERCISE 2 
{
    let data = new Date(2025, 11, 31);
    console.log(data.toLocaleString("en-GB"));
    console.log(`${data2.getDate()}/${data2.getMonth()+1}/${data.getFullYear()}`)

}

//EXERCISE 3
{
    let str = 'Я учу iavascript!';
    console.log(str.substr(2,3), str.substr(6,10)); 
    console.log(str.substring(2,5), str.substring(6,16)); 
    console.log(str.slice(2,5), str.slice(6,16)); 
} 

//EXERCISE 4 
{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let cube = [];
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        cube.push(Math.pow(arr[i], 3))
    }
    for(let j = 0; j < cube.length; j++){
        sum = sum + cube[j]
    }
        console.log(Math.sqrt(sum))
}

//EXERCISE 5
{
    let c
    function subTraction(a, b){
        c = a - b;
        return Math.abs(c);
    }
    console.log(subTraction(3, 5))
    console.log(subTraction(6, 1))
} 

//EXERCISE 6
{
    let data = new Date();
    let day = data.getDate();
    let month = data.getMonth()+1;
    function addZero (test){
        if(test < 10){
            test = '0' + String(test);
            return test
        } else {
            return test; 
        }
    }

    console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} ${addZero(day)}.${addZero(month)}.${data.getFullYear()}`)
}

//EXERCISE 7
{
    let str = 'aa aba abba abbba abca abea';
    let res =[]
    res = str.match(/ab+a/g);
    console.log(res);
}

//EXERCISE 8
{
    function checkTel(tel){
        let check = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
        return check.test(tel)
    }
        
      console.log(checkTel("(123) 456-7890"));
}


//EXERCISE 9
{
    function checkEm(email){
        let check = /[a-z][_]?[-]?[.]?[a-z0-9]{2,50}@[a-z0-9][_]?[-]?[a-z0-9]+.[a-z]{2,11}/i;
        return check.test(email)
    }
        
      console.log(checkEm("kevin-25@mail.ru"));
}

//EXERCISE 10
{
function shareUrl(url){
    let parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    let result = parse_url.exec(url);
    let newArr = []
    newArr.push(result[1]+result[2]+result[3])
    for (let i = 4; i <= 7; i ++) {
        if(result[i] !== undefined){
            newArr.push(result[i])
        }
    }  
    return newArr;
}
    console.log(shareUrl('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));
}