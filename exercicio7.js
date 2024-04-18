const prompt = require('prompt-sync')();

const numeroMacas = Number(prompt('Digite o número de maçãs compradas: '));

if (numeroMacas < 12) {
    console.log(`O valor total é R$ ${numeroMacas * 0.30}`);
} else {
    console.log(`O valor total é R$ ${numeroMacas * 0.25}`);
}