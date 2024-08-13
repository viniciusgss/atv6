let p = 0;
let aprovados = 0;

while (p < 5) {
    let nota = Number(prompt(`Digite a nota do aluno ${p + 1}:`));
    if (nota >= 7) {
        aprovados++;
    }
    p++;
}

console.log("Número de alunos aprovados:", aprovados);
