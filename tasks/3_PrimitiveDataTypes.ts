function  sendSum(num1 : number, num2 :number, name : string, isWithName : boolean){
    return isWithName ? `hi ${name} sum is ${num1 + num2}` : 'not valid..!!';
}

//PrimitiveDataTypes in TS
let num = 10;
let cusName ="Isuru";
let isWithName =true;

console.log(sendSum(10,20,"isuru",true));
console.log(sendSum(10,20,"isuru",false));