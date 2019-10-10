"use strict"

function Q1()
{
    let n1 = prompt("What is the first number?");
    let n2 = prompt("What is the second number?");
    alert(n1*n2);
}
    
function Q2()
{
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    alert("Hi. My name is "+name+" and I'm "+age+" years old");
}

function Q3()
{
    let array = new Array();
    array = [1, 2, 3, 4, 5];
    alert(array);
    let p = prompt("Please enter a power");
    if(array[p]!=null){
        alert(array[p] ** p);
    }
    else{
        alert(-1);
    }
}

function Q4(n)
{
    if(n%3==0 && n%5==0){
        return "Fizz Buzz";
    }
    else if(n%3==0){
        return "Fizz"
    }
    else if(n%5==0){
        return "Buzz";
    }
}

function Q5(input)
{
    let total = 1;
    let n = String(input);
    let arr = n.split('');
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!=0){
            total = total*arr[i];
        }
    }
    return total;
}

function Q6(message)
{
    let newMessage = "";
    for(let i = 0; i<message.length; i++){
        if(message[i].charCodeAt(0) > 64 && message[i].charCodeAt(0)< 91){
            newMessage +=  message[i];
        }
    }
    return newMessage;
}

function Q7(Arr)
{
    let myArray = Arr;
    let size = myArray.length;
    let countArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i in myArray) {
        for (let j = 0; j < size;j++){
            if (myArray[i] == myArray[j]){
                countArray[i]++;
            }
        }
    }
    
    let max = 0;
    let index = 0;
    for (let i in countArray) {
        if(countArray[i]>max){
            max = myArray[i];
            index = i;
        }
    }
    return myArray[index]
}


function Q8(Arr)
{
    let myArray = Arr;
    let size = myArray.length;
    let countArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i in myArray) {
        for (let j = 0; j < size;j++){
            if (myArray[i] == myArray[j]){
                countArray[i]++;
            }
        }
    }

    for (let i = 0; i<size;i++) {
        if (countArray[i] > 1) {
            console.log(myArray[i]);
        }
    }
}

funcion Q9()
{

}