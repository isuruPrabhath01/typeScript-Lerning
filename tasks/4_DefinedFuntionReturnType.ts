function  sendSum(num1 : number, num2 :number, name : string):number{
    return   num1+num2;
}

console.log(sendSum(10,20,"isuru"));

function  sendSum2(num1 : number|string, num2 :number, name : string):number{
    if (typeof num1 === 'string'){//Type guard
        return +num1+num2;
    }else{
        return num1+num2;
    }
}

console.log(sendSum2(10,20,"isuru"));
console.log(sendSum2("10",20,"isuru"));