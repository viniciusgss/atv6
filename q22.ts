let numero5 = Number(prompt("Digite um número (0 para parar):"));
let somaEntre50e100 = 0;
let quantidadeEntre50e100 = 0;

while (numero5 !== 0) {
    if (numero5 >= 50 && numero5 <= 100) {
        somaEntre50e100 += numero5;
        quantidadeEntre50e100++;
    }
    numero5 = Number(prompt("Digite outro número (0 para parar):"));
}

if (quantidadeEntre50e100 > 0) {
    console.log("Média dos números entre 50 e 100:", somaEntre50e100 / quantidadeEntre50e100);
} else {
    console.log("Nenhum número entre 50 e 100 foi digitado.");
}
