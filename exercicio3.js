const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Digite o primeiro número: '));
let numero2 = Number(prompt('Digite o segundo número: '));
let numero3 = Number(prompt('Digite o terceiro número: '));
let numero4 = numero1 + numero2 + numero3;

numero1 += 25;
numero2 *= 3;
numero3 *= 0.12;

console.log(`
    Número 1: ${numero1}
    Número 2: ${numero2}
    Número 3: ${numero3}
    Número 4: ${numero4}
`)