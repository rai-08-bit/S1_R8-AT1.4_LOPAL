let nomes = []; //
let alturas = []; //
let posicoes = []; //
let opcao = "";
let maPosicao = 0;
let mePosicao = 0;
let i = 0;
let quantidade;

do {

    nomes[i] = prompt(`Digite o ${i + 1} nome:`);

    do {

        alturas[i] = parseInt(prompt(`Digite a altura de ${nomes[i]}:`));

    } while (isNaN(alturas[i]) || alturas <= 0 || alturas > 3);

    do {
        opcao = prompt(`Digite 0 para continuar ou 1 para finalizar`);

    } while (opcao == "");

    if (opcao != "1") {
        i++;
    }

} while (opcao != "1");

let maiorNome = nomes[0];
let maiorAltura = alturas[0];
let menorNome = nomes[0];
let menorAltura = alturas[0];

for (let i = 0; i < quantidade; i++) {
    if (alturas[i] > maiorAltura) {
        maiorNome = nomes[i];
        maiorAltura = alturas[i];
        maPosicao = i;
    } else if (alturas[i] < menorAltura) {
        menorNome = nomes[i];
        menorAltura = alturas[i];
        mePosicao = i;
    }
} 

alert(`O mais alto é ${maiorNome}, com sua altura ${maiorAltura}, sendo ela digitada na posição ${maPosicao} `); 
alert(`O mais baixo é ${menorNome}, com sua altura ${menorAltura}, sendo ela digitada na posição ${mePosicao}`);