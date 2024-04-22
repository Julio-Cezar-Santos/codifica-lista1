function exercicio16() {

    console.log("\nOs 50 primeiros números primos são: \n");

    let numero = 100;
    let divisor = numero
    let ehPrimo = 0;
    let contador = 0;

    while (contador < 50) {

        while (divisor > 0) {
            if (numero % divisor === 0) {
                ehPrimo++;
            }
            divisor--;
        }

        if (ehPrimo === 2) {
            console.log(numero);
            contador++;
        }
        numero++;
        divisor = numero;
        ehPrimo = 0;
    }
}

module.exports = exercicio16;