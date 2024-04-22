const prompt = require('prompt-sync')();

function exercicio7() {

    console.log('\nEste programa irá calcular o valor total da compra de maçãs.\n');

    const numeroMacas = Number(prompt('Digite o número de maçãs compradas: '));

    if (numeroMacas < 12) {
        console.log(`O valor total é R$ ${numeroMacas * 0.30}`);
    } else {
        console.log(`O valor total é R$ ${numeroMacas * 0.25}`);
    }
}

module.exports = exercicio7;