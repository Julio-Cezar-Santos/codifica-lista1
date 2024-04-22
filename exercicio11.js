const prompt = require('prompt-sync')();

function exercicio11() {

    console.log('\nEste programa irá verificar se um número é par ou ímpar. Para encerrar o programa, digite zero ou um número negativo.\n')

    let numero = Number(prompt('Digite um número inteiro: '));

    while (numero > 0) {
        if (Number.isInteger(numero)) {
            if (numero % 2 === 0) {
                console.log('PAR');
            } else {
                console.log('ÍMPAR');
            }
        } else {
            console.log('Por favor, digite um número inteiro.');
        }
        numero = Number(prompt('Digite um número inteiro: '));
    }
    console.log('Programa encerrado.');
}

module.exports = exercicio11;