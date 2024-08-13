const questao11 = () => {
    let numero = Number(prompt("Digite um número (0 para sair): "));
    let maior = numero;
    let menor = numero;

    while (numero !== 0) {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
        numero = Number(prompt("Digite um número (0 para sair): "));
    }

    console.log(`Maior número digitado: ${maior}`);
    console.log(`Menor número digitado: ${menor}`);
};
