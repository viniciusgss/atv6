const questao18 = () => {
    let numero = Number(prompt("Digite um número inteiro (0 para sair): "));
    let contadorPares = 0;
    let contadorImpares = 0;

    while (numero !== 0) {
        if (numero % 2 === 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
        numero = Number(prompt("Digite um número inteiro (0 para sair): "));
    }

    console.log(`Quantidade de números pares: ${contadorPares}`);
    console.log(`Quantidade de números ímpares: ${contadorImpares}`);
};
