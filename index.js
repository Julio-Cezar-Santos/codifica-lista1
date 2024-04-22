const exercicio1 = require("./exercicio1");
const exercicio2 = require("./exercicio2");
const exercicio3 = require("./exercicio3");
const exercicio4 = require("./exercicio4");
const exercicio5 = require("./exercicio5");
const exercicio6 = require("./exercicio6");
const exercicio7 = require("./exercicio7");
const exercicio8 = require("./exercicio8");
const exercicio9 = require("./exercicio9");
const exercicio10 = require("./exercicio10");
const exercicio11 = require("./exercicio11");
const exercicio12 = require("./exercicio12");
const exercicio13 = require("./exercicio13");
const exercicio14 = require("./exercicio14");
const exercicio15 = require("./exercicio15");
const exercicio16 = require("./exercicio16");

const prompt = require("prompt-sync")();


let escolha;

while (true) {
    console.log("\nMenu de exercícios:");
    console.log("1 a 16: Escolha o número do exercício para executá-lo");
    console.log("0: Sair do programa\n");
    
    escolha = parseInt(prompt("Digite sua escolha: "));
    
    switch (escolha) {
        case 0:
            console.log("Programa encerrado.");
            return;
        case 1:
            exercicio1();
            break;
        case 2:
            exercicio2();
            break;
        case 3:
            exercicio3();
            break;
        case 4:
            exercicio4();
            break;
        case 5:
            exercicio5();
            break;
        case 6:
            exercicio6();
            break;
        case 7:
            exercicio7();
            break;
        case 8:
            exercicio8();
            break;
        case 9:
            exercicio9();
            break;
        case 10:
            exercicio10();
            break;
        case 11:
            exercicio11();
            break;
        case 12:
            exercicio12();
            break;
        case 13:
            exercicio13();
            break;
        case 14:
            exercicio14();
            break;
        case 15:
            exercicio15();
            break;
        case 16:
            exercicio16();
            break;
        default:
            console.log("Escolha inválida. Por favor, tente novamente.");
            break;
    }
}