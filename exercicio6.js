const prompt = require('prompt-sync')();

let lado1 = Number(prompt('Digite o valor do lado 1: '));
let lado2 = Number(prompt('Digite o valor do lado 2: '));
let lado3 = Number(prompt('Digite o valor do lado 3: '));

if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)){
    if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)){
        console.log('Triângulo Isósceles');
    } else if ((lado1 === lado2) && (lado1 === lado3)){
        console.log('Triângulo Equilátero');
    } else {
        console.log('Triângulo Escaleno');
    }
}else{
    console.log('Não é um triângulo');
}