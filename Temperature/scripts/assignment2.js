function convertToFahrenheit () {
const temperature = Number(prompt("Enter temperature in Celcius:"));

const fahrenheit = (temperature * 9 / 5) +32

document.getElementById("results").innerHTML = `<p>The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}</p>`
}