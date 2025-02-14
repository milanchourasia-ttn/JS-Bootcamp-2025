// Q1. Create a hierarchy of person, employee and developers. 

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.message = function () {
    console.log(`Hi, My Name ${ this.name }, I am ${ this.age } years old.`);
}
function Employee(name, age, empid) {
    Person.call(this, name, age);
    this.empid = empid;
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.empMessage = function () {
    console.log(`Hi, My Name ${ this.name }, I am ${ this.age } years old.My EMP id is ${ this.empid }`);
}

function Developer(name, age, empid, tech) {
    Employee.call(this, name, age, empid);
    this.tech = tech;
}
Developer.prototype = Object.create(Employee.prototype)
Developer.prototype.devMessage = function () {
    console.log(`Hi, My Name ${ this.name }, I am ${ this.age } years old.My EMP id is ${ this.empid } and my technology is ${ this.tech }`);
}

let personVal = new Person('Shivang', 22);
let employeeVal = new Employee('Shreeja', 24, 1860);
let developerVal = new Developer('Milan', 32, 1858, 'Frontend developer');

personVal.message();
employeeVal.message();
employeeVal.empMessage(); 
developerVal.message(); 
developerVal.empMessage(); 






