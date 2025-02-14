//Q1. swap variables in ES6
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

//Q2. What is the “spread” operator in ES6?
let arr1 = [4, 5, 6];      
let arr2 = [1, 2, 3, ...arr1, 7, 8, 9, 10];  
    
console.log(arr2);

//Q3. Explain Destructuring in ES6.
// Array
let greeting =['Good','Morning'];  
let [g1, g2] = greeting;  
console.log (g1, g2);
//mix
const data = {
    id: 101,
    mobile: ["apple", "lg"],
    details: { owner: "Milan" },
};
  
const { id = 0, mobile: [firstItem, secondItem] = [], details: { owner } = {} } = data;
console.log(id, firstItem, secondItem, owner); 
   

// Q4. use of Let in function
function compareFunction() {
    let foo = 1;
    if (foo === 1) {
        let foo = 11;
        console.log(foo); 
    }
    if (foo === 11) { 
        let foo = 12;
        console.log(foo);
    }
    console.log(foo); 
}

compareFunction();

// 5.Arrow Function in es6 with example
const add = (a, b) => a + b;
console.log(add(5, 3));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

const greet = () => "Hello, World!";
console.log(greet());