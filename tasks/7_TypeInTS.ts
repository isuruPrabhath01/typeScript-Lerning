//-----------Type-------------
let student1 ={id : 1, name : "Isuru", age:22, faculty : 'CSE'};
let student2 ={id : 2, name : "Ashen", age:23, faculty : 'TONIC'};
let student3 ={id : 2, name : "Ashen", age:23, faculty : 'TONIC', uni:'UOC'};

type student_type = {id : number, name : string, age : number, faculty : string , uni?:string};

let student : student_type []= [];

student.push(student1);
student.push(student2);
student.push(student3);