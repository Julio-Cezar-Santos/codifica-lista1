const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número inteiro: '));

if (Number.isInteger(numero)) {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
} else {
    console.log('Por favor, digite um número inteiro.');
}