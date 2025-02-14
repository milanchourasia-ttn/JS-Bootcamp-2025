// Q4. Explain 3 properties of argument object.

// 1.arguments.length - Number of arguments passed.
function argsFunction() {
    console.log(arguments.length);
}
argsFunction(10, 20, 30); 
argsFunction();       
    
// 2.1.arguments[index] - access arguments by index
function displayArgs() {
    console.log(arguments[0]);
    console.log(arguments[1]);
}
displayArgs("Shivang", "Rayan"); 
// 2.2.Use rest parameters (...args)
function sum(...arg) {
    console.log(arg.reduce((a, b) => a + b, 0));
}
sum(1, 2, 3, 4);

// 3. arguments is not an array but can be converted to one
function sumAllNumber() {
    let argsArray = Array.from(arguments);
    let sum = argsArray.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}
sumAllNumber(5, 10, 15);




