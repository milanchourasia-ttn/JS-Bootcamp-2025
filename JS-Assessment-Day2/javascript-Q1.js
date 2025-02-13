
//Q1.Create a object calculator, which will have methods read,add,subtract and multiply. read method will use prompt to ask two values from user.  
const calculator = {
    // read method
    read() {
        this.firstNumber = parseFloat(prompt("Enter the first number:"));
        this.secondNumber = parseFloat(prompt("Enter the second number:"));
    },
    // add method
    add() {
        return this.firstNumber + this.secondNumber;
    },
    // subtract method
    subtract() {
        return this.firstNumber - this.secondNumber;
    },
    // multiply method
    multiply() {
        return this.firstNumber * this.secondNumber;
    }
};
function handleRead() {
    calculator.read();
    document.getElementById("add").innerHTML = "Add: " + calculator.add();
    document.getElementById("subtract").innerHTML = "Subtract: " + calculator.subtract();
    document.getElementById("multiply").innerHTML = "Multiply: " + calculator.multiply();
}
document.getElementById("read-method").addEventListener('click', handleRead);
