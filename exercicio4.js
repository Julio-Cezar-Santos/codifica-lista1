const prompt = require('prompt-sync')();

let escolha = 0;
let contador = 0;
let somaDasNotas = 0;

while (escolha !== 3) {
    console.log(`
        1 - Adicionar nota
        2 - Calcular Media
        3 - Sair
    `);
    escolha = parseInt(prompt('Escolha uma opção: '));
    if (escolha === 1) {
        let nota = Number(prompt('Digite a nota: '));
        somaDasNotas += nota;
        contador++;
    } else if (escolha === 2) {
        let media = somaDasNotas / contador;
        console.log(`A média das notas é ${media}`);
        media >= 6.0 ? console.log('PARABÉNS! Você foi aprovado! :D') : console.log('REPROVADO! :(');
    } else {
        console.log('Opção inválida!');
    }
}
console.log('Programa finalizado!');