//----------Arrays-----------

let num_array : number [] = [1,2,3,4];
let string_array : string [] = ["isuru","ashen","kalana"];
let num_string_array : (number | string) [] = ["isuru",13,24,"ashen"];


let student1 ={id : 1, name : "Isuru", age:22, faculty : 'CSE'};
let student2 ={id : 2, name : "Ashen", age:23, faculty : 'TONIC'};
let student3 ={id : 2, name : "Ashen", age:23, faculty : 'TONIC', uni:'UOC'};

let student : {id : number, name : string, age : number, faculty : string , uni?:string}[]= [];

student.push(student1);
student.push(student2);
student.push(student3);