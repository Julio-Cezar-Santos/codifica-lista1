const prompt = require('prompt-sync')();

function exercicio14() {

    console.log('\nEste programa calcula a média dos números digitados.\n');

    let contador = 0;
    let soma = 0;
    let numeroDigitado = Number(prompt('Digite um número (digite 0 para encerrar): '));
    
    while (numeroDigitado !== 0) {
        soma += numeroDigitado;
        contador++;
        numeroDigitado = Number(prompt('Digite um número (digite 0 para encerrar): '));
    }

    if (contador > 0) {
        let media = soma / contador;
        console.log(`A média dos números digitados é ${media.toFixed(2)}`);
    } else {
        console.log('Nenhum número válido foi inserido.');
    }
}

module.exports = exercicio14;