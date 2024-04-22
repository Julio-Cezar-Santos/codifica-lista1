const prompt = require('prompt-sync')();
function exercicio1() {

    console.log('\nEste programa irá converter a temperatura de Celcius para Fahrenheit.\n');

    let temperaturaCelcius = prompt("Digite a temperatura em Celcius: ");
    let temperaturaFahrenheit = (temperaturaCelcius * 1.8) + 32;

    console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}`);
}

module.exports = exercicio1;