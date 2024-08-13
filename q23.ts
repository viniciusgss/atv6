let numero6 = Number(prompt("Digite um número (0 para parar):"));
let menorPositivoImpar = null;

while (numero6 !== 0) {
    if (numero6 > 0 && numero6 % 2 !== 0) {
        if (menorPositivoImpar === null || numero6 < menorPositivoImpar) {
            menorPositivoImpar = numero6;
        }
    }
    numero6 = Number(prompt("Digite outro número (0 para parar):"));
}

if (menorPositivoImpar !== null) {
    console.log("Menor número positivo e ímpar digitado:", menorPositivoImpar);
} else {
    console.log("Nenhum número positivo e ímpar foi digitado.");
}
