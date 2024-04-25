const prompt = require('prompt-sync')();

function exercicio6() {

    console.log('\nEste programa irá verificar se os valores digitados formam um triângulo e, caso formem, qual o tipo de triângulo.\n');

    let lado1 = Number(prompt('Digite o valor do lado 1: '));
    let lado2 = Number(prompt('Digite o valor do lado 2: '));
    let lado3 = Number(prompt('Digite o valor do lado 3: '));

    if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
        if (lado1 === lado2 && lado2 === lado3) {
            console.log('Triângulo equilátero');
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log('Triângulo isósceles');
        } else {
            console.log('Triângulo escaleno');
        }
    } else {
        console.log('Não é um triângulo');
    }
}

module.exports = exercicio6;