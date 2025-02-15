//Q1. Define an interface User with the following properties: 
// id(number), name(string), email(string), age(number optional)
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//Q2. Create a class UserManager with:
class UserManager {
    constructor() {
        // A private array users: User[] to store user data.
        this.users = [];
    }
    // A method addUser(user: User): void that adds a new user.
    addUser(user) {
        this.users.push(user);
    }
    // A method removeUser(id: number): void that removes a user by ID.
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    // A method getUser(id: number): User | undefined that retrieves a user by ID.
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    // A method getAllUsers(): User[] that returns all users.
    getAllUsers() {
        return this.users;
    }
}
//Q3. Use Arrow Functions & Default Parameters
// Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
const getUser = (name = "Guest") => `Hello, ${name}!`;
console.log(getUser());
console.log(getUser("Shivang"));
function printUserDetails(_a) {
    var { name, age, email } = _a, rest = __rest(_a, ["name", "age", "email"]);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
    if (Object.keys(rest).length) {
        console.log("Address", rest);
    }
}
const user = {
    name: "Shreeja",
    age: 22,
    email: "shreeja@gmail.com.com",
    city: "Noida",
    state: "Uttar Pradesh"
};
printUserDetails(user);
