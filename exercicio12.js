function exercicio12() {

    console.log('\nNúmeros entre 1000 e 1999 que divididos por 11 dão resto 5:\n');

    for (let numero = 1000; numero <= 1999; numero++) {
        if (numero % 11 === 5) {
            console.log(numero);
        }
    }
}

module.exports = exercicio12;