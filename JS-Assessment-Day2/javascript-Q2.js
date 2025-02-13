//Create an object temperatureConverter with methods:
const temperatureConverter = {
    //Q.read() → Asks the user to enter a temperature in Celsius.
    read() {
        this.celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    },

    //Q.toFahrenheit() → Converts it to Fahrenheit.
    toFahrenheit() {
        return (this.celsius * 9/5) + 32;
    },

    //Q.toKelvin() → Converts it to Kelvin.
    toKelvin() {
        return this.celsius + 273.15;
    },

    //Q.display() → Displays the results in the console.
    display() {
        document.getElementById("celsius").innerHTML = `Temperature in Celsius: <strong>${this.celsius} Celsius</strong>`;
        console.log(`Temperature in Celsius: ${this.celsius} Celsius`)
        document.getElementById("fahrenheit").innerHTML = `Temperature in Fahrenheit: <strong>${this.toFahrenheit()} Fahrenheit</strong>`;
        console.log(`Temperature in Fahrenheit: ${this.toFahrenheit()} Fahrenheit`)
        document.getElementById("kelvin").innerHTML = `Temperature in Kelvin: <strong>${this.toKelvin()} Kelvin</strong>`;
        console.log(`Temperature in Kelvin: ${this.toKelvin()} Kelvin`)
    }
};
function handleTemperature() {
    temperatureConverter.read();
    temperatureConverter.display();
}
document.getElementById("read-temperature").addEventListener('click', handleTemperature);

