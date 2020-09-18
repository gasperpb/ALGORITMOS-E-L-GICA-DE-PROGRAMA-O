/*3. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média
ponderada (as notas tem pesos respectivos de 1, 2 e 3).*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var nota1 = parseFloat(lines.shift());
var nota2 = parseFloat(lines.shift());
var nota3 = parseFloat(lines.shift());
var media = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / 3;
console.log('Media = ' + media);