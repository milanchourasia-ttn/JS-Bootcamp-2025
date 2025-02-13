//Q.Predict the output of the given snippet.
var x = 5;
function first(){
    console.log(x);
    var y = 10;
    function second(){
        console.log(y)
        console.log(z)
        var z = 20;
    }
    second();
}
first();
console.log(y);

// OUTPUT
// 5
//10
//undefined
// ReferenceError: y is not defined


// Q.Explain how hoisting affects the execution  of console.log(z) in second().
// Ans - Due to hoisting, z is declared at the top of second function but remains undefined until it is assigned a value.

// Q.Explain the scope chain for console.log(y) in second().
// Ans - When console.log(y) is executed inside second function,then below steps to be follow:
// 1. Check the value of y in the Local Scope 
// 2. Check the value of y in the Outer Scope
// 3. Check the value of y in the Global Scope

// Q.What happens when console.log(y) is executed outside first() (Line 4)? Why?
// Ans - ReferenceError: y is not defined - because the console.log(y); at Line 4 is trying to access y in the global scope But y is only defined inside first(), and it's not accessible outside.

// Q.Modify the code to use let instead of var and observe any differences.
// Ans
// let x = 5;
// function first() {
//     console.log(x);
//     let y = 10;
//     function second() {
//         console.log(y);
//         console.log(z);
//         let z = 20;
//     }
//     second();
// }
// first();
// console.log(y);

// Output
// 5 
// 10
// ReferenceError: Cannot access 'z' before initialization
// due to ReferenceError of 'z' js not read console.log(y);
