const prompt = require('prompt-sync')();

function exercicio15() {
    console.log('\nEste programa calcula a média ponderada.\n');

    let numeroDigitado = Number(prompt('Digite um número (digite 0 para encerrar): '));
    let somaPesos = 0;

    let somaNumeroPesos = 0;




    while (numeroDigitado !== 0) {
        let peso = Number(prompt('Digite o peso do número: '));

        somaPesos += peso;

        somaNumeroPesos += numeroDigitado * peso;

        numeroDigitado = Number(prompt('Digite um número (digite 0 para encerrar): '));
    }

    if (somaPesos > 0) {
        let mediaPonderada = somaNumeroPesos / somaPesos;
        console.log(`A média ponderada dos números digitados é ${mediaPonderada.toFixed(2)}`);
    } else {
        console.log('A soma dos pesos é zero. Não é possível calcular a média ponderada.');
    }
}

module.exports = exercicio15;