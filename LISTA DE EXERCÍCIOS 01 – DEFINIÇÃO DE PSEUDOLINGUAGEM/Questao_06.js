/*6-Faça um algoritmo para ler o salário de um funcionário e aumentá-lo em 15%. Após o aumento,
desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final.*/


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var inicio = salario + (salario * 0.15);
var desconto = inicio - (inicio * 0.08);

console.log('Salario inicial ' + salario + ' Reais');
console.log('Salario inicial ' + inicio + ' Reais');
console.log('Salario inicial ' + desconto + ' Reais');