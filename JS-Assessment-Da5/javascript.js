//Q1. Filter unique array members using Set.
const arr = [1, 2, 3, 4, 3, 2, 1, 5];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);

//Q2. Filter anagrams using Map
const filterAnagrams = (words) => {
    const map = new Map();
    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    });
    return Array.from(map.values());
};

const wordsArray = ["listen", "silent", "enlist", "rat", "tar", "art", "evil", "vile", "veil", "god", "dog"];
const anagrams = filterAnagrams(wordsArray);

console.log(anagrams);

//Q3. Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.
class Parent {
    #privateVar = "Private Data";
    publicVar = "Public Data";
    constructor(name) {
      this.name = name;
    }
    getPrivateVar() {
      return this.#privateVar;
    }
    static greet() {
      return "Hello from Parent Class!";
    }
  }
  class Child extends Parent {
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  class GrandChild extends Child {
    constructor(name, age, hobby) {
      super(name, age);
      this.hobby = hobby;
    }
    getFullDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Hobby: ${this.hobby}`;
    }
  }
  
  const person = new GrandChild("Alice", 25, "Painting");
  console.log(person.getFullDetails()); 
  console.log(person.getDetails()); 
  console.log(person.publicVar); 
  console.log(person.getPrivateVar());
  console.log(Parent.greet()); 


//Q4. Write a program to implement a class having static functions
class staticFunctions {
    static add(a, b) {
        return a + b;
    }
    static isEven(num) {
        return num % 2 === 0;
    }
    static formatString(str) {
        return str.trim().toUpperCase();
    }
}

console.log(staticFunctions.add(5, 10));
console.log(staticFunctions.isEven(8));
console.log(staticFunctions.formatString("Hi, My Name is Milan"));


//Q5. Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.


//Q6. Import a module for filtering unique elements in an array.


//7. Write a program to flatten a nested array to single level using arrow functions.
// Method 1
const flattenArr = (arr) => arr.flat(Infinity);
const nestedArr = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArr(nestedArr));

// Method 2
const flattenArray = (arr) => arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
);

const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArray(nestedArray)); 