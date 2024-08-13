let primeiroNumero = Number(prompt("Digite o primeiro número (0 para parar):"));
if (primeiroNumero !== 0) {
    let pares = 0;
    let impares = 0;
    let ultimoNumero = primeiroNumero;
    
    while (ultimoNumero !== 0) {
        if (ultimoNumero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        ultimoNumero = Number(prompt("Digite outro número (0 para parar):"));
    }
    
    console.log("Quantidade de números pares:", pares);
    console.log("Quantidade de números ímpares:", impares);
}
