/*4-Faça um algoritmo para entrar com o dia e o mês de uma data e informar quantos dias se passaram
desde o início do ano. Considere sempre que um mês possui 30 dias exatos e que o usuário irá
passar o mês como um valor inteiro entre 1 e 12.*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');


var mes = parseFloat(lines.shift());
var dias = mes * 30;
console.log('Estamos á ' + dias + ' do inicio do ano');