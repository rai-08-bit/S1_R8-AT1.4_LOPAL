<<<<<<< HEAD
let idades = []; //
let idade; //
let posicaoMaior; //
for (let i = 0; i < 4; i++) {

    do {
        idade = parseFloat(prompt(`Digite a idade ${i + 1}`)); //

        if (isNaN(idade) || idade < 0 || idade > 100) {
=======
let idades = []; // criação da array "idades" para armazenar valores das idades digitadas pelo usuário
let idade; // criação da variável "idade" para armazenar separadamente o valor posição

for (let i = 0; i < 4; i++) {

    do {
        idade = parseFloat(prompt(`Digite a idade ${i + 1}`)); // Caixa de texto para que o usuário digite a idade de acordo com a posição

        if (isNaN(idade) || idade < 0 || idade > 100) { //Verifica se o valor digitado é verdadeiro
>>>>>>> 1df627b5dd7b89e8689b43b4503107ce16f49e96
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

<<<<<<< HEAD
alert(`A maior idade é: ${maiorIdade}`); //
alert (`A posição em que ela foi digitada é: ${posicaoMaior}`); //
=======
alert(`A maior idade é: ${maiorIdade}`);
console.log
>>>>>>> 1df627b5dd7b89e8689b43b4503107ce16f49e96
