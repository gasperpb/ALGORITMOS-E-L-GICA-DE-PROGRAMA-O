/*5-O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo
que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que
a balança já desconte o peso do prato..*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');


var kilos = parseFloat(lines.shift());
var valor = kilos * 12;
console.log('Total a pagar ' + valor + ' Reais');