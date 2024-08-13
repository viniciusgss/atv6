const questao17 = () => {
    let numero = Number(prompt("Digite um número inteiro (0 para sair): "));
    let contadorPares = 0;

    while (numero !== 0) {
        if (numero % 2 !== 0) {
            break;
        }
        if (numero % 2 === 0) {
            contadorPares++;
        }
        numero = Number(prompt("Digite um número inteiro (0 para sair): "));
    }

    console.log(`Quantidade de números pares antes do primeiro ímpar: ${contadorPares}`);
};
