const prompt = require('prompt-sync')();

function exercicio13() {

    console.log('\nEste programa irá exibir a tabuada de 5 números digitados.\n');

    let contador = 0
    while (contador < 5) {
        const numero = Number(prompt('Digite um número inteiro: '));
        if (Number.isInteger(numero)) {
            for (let i = 0; i <= 10; i++) {

                console.log(`${i} x ${numero} = ${i * numero}`);

            }
        } else {
            console.log('Por favor, digite um número inteiro.');
        }
        contador++
    }
}

module.exports = exercicio13;