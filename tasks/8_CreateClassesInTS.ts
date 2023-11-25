//---------class----------

class Person{
    name : string;
    private age : number;
    readonly nic : string;
    constructor(name : string , age : number , nic : string) {
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
    getAge(){
        return this.age;
    }
}

let person1 = new Person("Isuru", 22, "200123601322");
console.log(person1);
person1.name="Prabhath";
console.log(person1);
//console.log(person1.age):-------->> cannot access out of class scope
console.log(person1.getAge());//------>> access using get method
//person1.nic="200123601323";------>> Cannot update because "readonly" keyword




//-----------Create singleton class----------------

class DBConnection{
   static connection: string;

    private constructor(value : string) {
        DBConnection.connection=value;
    }

    static getConnection(){
        if (!DBConnection.connection){
            new DBConnection('testConnection')
        }
        return DBConnection.connection;
    }
}

let connection:string = DBConnection.getConnection();
console.log('Connection : ',connection);