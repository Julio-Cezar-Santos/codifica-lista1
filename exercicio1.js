const prompt = require('prompt-sync')();

let temperaturaCelcius = prompt("Digite a temperatura em Celcius: ");
let temperaturaFahrenheit = (temperaturaCelcius * 1.8) + 32;

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}`);