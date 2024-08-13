let numero3 = Number(prompt("Digite um número (0 para parar):"));
let somaDivisiveisPor3 = 0;
let quantidadeDivisiveisPor3 = 0;

while (numero3 !== 0) {
    if (numero3 % 3 === 0) {
        somaDivisiveisPor3 += numero3;
        quantidadeDivisiveisPor3++;
    }
    numero3 = Number(prompt("Digite outro número (0 para parar):"));
}

if (quantidadeDivisiveisPor3 > 0) {
    console.log("Média dos números divisíveis por 3:", somaDivisiveisPor3 / quantidadeDivisiveisPor3);
} else {
    console.log("Nenhum número divisível por 3 foi digitado.");
}
