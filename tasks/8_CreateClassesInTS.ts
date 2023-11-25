//---------class----------

class Person{
    name : string;
    age : number;
    readonly nic : string;
    constructor(name : string , age : number , nic : string) {
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
}

let person1 = new Person("Isuru", 22, "200123601322");
console.log(person1);
person1.name="Prabhath";
console.log(person1);
person1.age=21;
console.log(person1);
//person1.nic="200123601323";  //Cannot update because "readonly" keyword;