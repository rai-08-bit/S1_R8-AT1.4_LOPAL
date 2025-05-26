let idades = []; //
let idade; //
let posicaoMaior; //
for (let i = 0; i < 4; i++) {

    do {
        idade = parseFloat(prompt(`Digite a idade ${i + 1}`)); //

        if (isNaN(idade) || idade < 0 || idade > 100) {
            alert("Idade inválida, digite um número entre 0 e 100"); //
        }
    } while (isNaN(idade) || idade < 0 || idade > 100); //

    idades[i] = idade; //
}

let maiorIdade = idades[0]; //
let soma = 0; //

for (let i = 0; i < 4 ; i++) {
    soma += idades[i]; //

    //Verificando idades
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i]; //
        posicaoMaior = i; //
    }
}

alert(`A maior idade é: ${maiorIdade}`); //
alert (`A posição em que ela foi digitada é: ${posicaoMaior}`); //