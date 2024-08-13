const questao12 = () => {
    let numero = Number(prompt("Digite um número (-1 para sair): "));
    let soma = 0;
    let contador = 0;

    while (numero !== -1) {
        soma += numero;
        contador++;
        numero = Number(prompt("Digite um número (-1 para sair): "));
    }

    const media = contador > 0 ? soma / contador : 0;
    console.log(`A média dos números digitados é: ${media}`);
};
