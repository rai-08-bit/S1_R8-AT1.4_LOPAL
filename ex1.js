let idades = [];
let idade;

for (let i = 0; i < 4; i++) {

    do {
        idade = parseFloat(prompt(`Digite a idade ${i + 1}`));

        if (isNaN(idade) || idade < 0 || idade > 100) {
            alert("Idade inválida, digite um número entre 0 e 100");
        }
    } while (isNaN(idade) || idade < 0 || idade > 100);

    idades[i] = idade;
}

let maiorIdade = idades[0];
let soma =""

for (let i = 0; i < 4 ; i++) {
    soma += idades[i];

    //Verificando idades
    if (idades[i] > maiorNota) {
        maiorNota = notas[i];
    }
}

alert(`A maior idade é: ${maiorIdade}`);
console.log