const questao13 = () => {
    let numero = Number(prompt("Digite um número: "));
    let somaCubo = 0;

    while (numero > 0) {
        const digito = numero % 10;
        somaCubo += digito ** 3;
        numero = Math.floor(numero / 10);
    }

    console.log(`A soma dos dígitos elevados ao cubo é: ${somaCubo}`);
};
