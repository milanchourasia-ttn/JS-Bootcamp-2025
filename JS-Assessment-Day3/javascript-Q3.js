// Q3. Explain difference between Bind and Call (example).
// Ans - Bind
// The bind method returns a new function
// Reusable function with fixed context
// Arguments can be preset partial application


// - Call
// The call method invokes the function immediately.
// One-time function invocation	
// arguments passed individually.


// Example
const person = {
    name: "Shivang",
    personFunction: function (arg) {
      console.log(`${arg} I am ${this.name}`);
    },
  };
  const person2 = {
    name: "Shreeja",
  };
  //using Bind
  const greetBind = person.personFunction.bind(person, "Hello");
  greetBind();
  //using call
  person.personFunction.call(person2, "Hi");
