let numero4 = Number(prompt("Digite um número (0 para parar):"));
let maisDeTresDigitos = 0;

while (numero4 !== 0) {
    if (Math.abs(numero4).toString().length > 3) {
        maisDeTresDigitos++;
    }
    numero4 = Number(prompt("Digite outro número (0 para parar):"));
}

console.log("Quantidade de números com mais de três dígitos:", maisDeTresDigitos);
