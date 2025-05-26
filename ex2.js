let nomes = [];
let sexos = [];
let salarios = [];
let nome;
let salario;
let sexo;
let resultado="";

for (let i = 0; i < 2; i++) {

    nome = prompt(`Digite seu nome ${i + 1}`);

    if (!isNaN(nome)) {
        alert("Nome inválido, digite novamente");
        nome = prompt(`Digite seu nome ${i + 1}`);
    } else {
        nomes[i] = nome;
    }

    sexo = prompt(`Digite seu sexo, para masculino, digite (M) para feminino, digite (F) ${i + 1}`);

    if (!isNaN(sexo)) {
        alert("Sexo inválido, digite novamente");
        sexo = prompt(`Digite seu sexo, para masculino, digite (M) para feminino, digite (F) ${i + 1}`);
    } else {
        sexos[i] = sexo;
    }

    salario = parseFloat(prompt(`Digite seu salário ${i + 1}`));

    if (isNaN(salario)) {
        alert("Salário inválido, digite novamente");
        salario = prompt(`Digite seu salário ${i + 1}`);
    } else {
        salarios[i] = salario;
    }
}


for (let i = 0; i < 2; i++) {
    if (sexos[i] == "F" || sexos[i] == "f") {
        if (salarios[i] >= 5000.00) {
            resultado += `${nomes[i]} - sexo: ${sexos[i]} - salário: ${salarios[i]}\n`;
        }

    }

}
alert(` As funcionárias mulheres da empresa com salários maiores que R$ 5000,00, são: \n${resultado}`);