const prompt = require('prompt-sync')();

function exercicio2() {

    console.log("\nEste programa irá calcular o percentual de votos brancos, nulos e válidos.\n");

    const totalDeEleitores = parseInt(prompt("Digite o total de eleitores: "));
    const votosBrancos = parseInt(prompt("Digite o total de votos brancos: "));
    const votosNulos = parseInt(prompt("Digite o total de votos nulos: "));
    const votosValidos = parseInt(prompt("Digite o total de votos válidos: "));

    if (totalDeEleitores < (votosBrancos + votosNulos + votosValidos)) {
        console.log("Erro! O total de votos não pode ser maior que o total de eleitores.");
    } else {
        const percentualVotosBrancos = (votosBrancos / totalDeEleitores) * 100;
        const percentualVotosNulos = (votosNulos / totalDeEleitores) * 100;
        const percentualVotosValidos = (votosValidos / totalDeEleitores) * 100;

        console.log(`
        Percentual de votos brancos: ${percentualVotosBrancos.toFixed(2)}%
        Percentual de votos nulos: ${percentualVotosNulos.toFixed(2)}%
        Percentual de votos válidos: ${percentualVotosValidos.toFixed(2)}%
        `);
    }
}

module.exports = exercicio2;