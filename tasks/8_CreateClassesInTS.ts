//---------class----------

class Person{
    name : string;
    age : number;
    nic : string;
    constructor(name : string , age : number , nic : string) {
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
}

let person1 = new Person("Isuru", 22, "200123601322");
console.log(person1);