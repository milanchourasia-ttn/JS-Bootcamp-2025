// Q7. Explain 5 array methods with example.

//1. map()
// The map method creates a new array by applying a function to each element of the original array.

const number = [1, 2, 3, 4, 5];
const squaredNumber = arr.map(item => item * 2);

console.log(squaredNumber);

//2. filter()
// The filter method creates a new array containing only the elements that satisfy a given condition.

const age = [12, 18, 25, 30, 10, 21];
const ageGreater18 = age.filter(age => age >= 18);

console.log(ageGreater18);

//3. reduce()
// The reduce method reduces an array to a single value and it does not change the original array.
const price = [10, 20, 30, 40];
const total = price.reduce((acc, cur) => acc + cur, 0);

console.log(total);


// 4. splice()
// The splice method is used to add, remove, replace element from array and modifies the original array.

const fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 0 , "Orange"); 
console.log(fruits);  


// 5. slice()
// The slice method returns a new selected elements from array without modifying it.

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const sliceFruit = fruit.slice(1, 3);
console.log(sliceFruit)
