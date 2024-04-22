const prompt = require('prompt-sync')();

function exercicio5() {

    console.log('\nEste programa irá calcular a média de notas inseridas pelo usuário.\n');

    let nota1 = Number(prompt('Digite a primeira nota: '));
    let nota2 = Number(prompt('Digite a segunda nota: '));

    let media = (nota1 + nota2) / 2;

    console.log(`A média das notas é ${media}`);
    
    media >= 6.0 ? console.log('PARABÉNS! Você foi aprovado! :D') : console.log('Você foi REPROVADO! Estude mais :(');

}

module.exports = exercicio5;