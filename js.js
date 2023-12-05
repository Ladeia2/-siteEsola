let rs = require('readline-sync');

let faturamento = rs.question('Qual o seu faturamento? ');
let nomeEmpresa = rs.question("qual o nome da empresa? ")


function calcularImposto(valor) {
  return valor * 0.20; // 15% do valor
}

let resultado = calcularImposto(parseFloat(faturamento));


let resEmpresa = `A sua empresa ${nomeEmpresa} teve faturamento de ${faturamento} e vai pagar imposto de ${resultado} `

console.log(resEmpresa);

let impoto = 10;

console.log(impoto);


