const prompt = require('prompt-sync')();

let valor1 = Number(prompt('Digite o primeiro valor: '));
let valor2 = Number(prompt('Digite o segundo valor: '));

if(valor1 === valor2){
    console.log('Os valores são iguais');
}else{
    if(valor1 < valor2){
        console.log(`${valor1} - ${valor2}`);
    }else{
        console.log(`${valor2} - ${valor1}`);
    }
}