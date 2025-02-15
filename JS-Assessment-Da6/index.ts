//Q1. Define an interface User with the following properties: 
// id(number), name(string), email(string), age(number optional)

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

//Q2. Create a class UserManager with:
class UserManager {
  // A private array users: User[] to store user data.
  private users: User[] = [];
  // A method addUser(user: User): void that adds a new user.
  addUser(user: User): void {
    this.users.push(user);
  }
  // A method removeUser(id: number): void that removes a user by ID.
  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
  // A method getUser(id: number): User | undefined that retrieves a user by ID.
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
  // A method getAllUsers(): User[] that returns all users.
  getAllUsers(): User[] {
    return this.users;
  }
}

//Q3. Use Arrow Functions & Default Parameters
// Add a method getUser = (name: string = "Guest"): string that returns a greeting message.

const getUser = (name: string = "Guest"): string => `Hello, ${name}!`;

console.log(getUser()); 
console.log(getUser("Shivang"));

//Q4. Use Destructuring & Spread Operator
// Create a function printUserDetails(user: User): void that logs user details using object destructuring.

type User1 = {
  name: string;
  age: number;
  email: string;
  city?: string;
  state?: string
};

function printUserDetails({ name, age, email, ...rest }: User1): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
  
  if (Object.keys(rest).length) {
    console.log("Address", rest);
  }
}

const user: User1 = {
  name: "Shreeja",
  age: 22,
  email: "shreeja@gmail.com.com",
  city: "Noida",
  state: "Uttar Pradesh"
};

printUserDetails(user);