/*1. Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o
preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no
tanque.*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var reais = parseInt(lines.shift());
var valorG = parseFloat(lines.shift());
var X = reais / valorG;
console.log('Total de litros = ' + X);