const questao19 = () => {
    let numero = Number(prompt("Digite um número inteiro (0 para sair): "));
    let divisiveisPor2 = 0;
    let divisiveisPor3 = 0;
    let divisiveisPor5 = 0;

    while (numero !== 0) {
        if (numero % 2 === 0) {
            divisiveisPor2++;
        }
        if (numero % 3 === 0) {
            divisiveisPor3++;
        }
        if (numero % 5 === 0) {
            divisiveisPor5++;
        }
        numero = Number(prompt("Digite um número inteiro (0 para sair): "));
    }

    console.log(`Quantidade de números divisíveis por 2: ${divisiveisPor2}`);
    console.log(`Quantidade de números divisíveis por 3: ${divisiveisPor3}`);
    console.log(`Quantidade de números divisíveis por 5: ${divisiveisPor5}`);
};
