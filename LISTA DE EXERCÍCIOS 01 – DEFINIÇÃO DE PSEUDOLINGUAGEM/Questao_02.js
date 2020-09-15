/*Um termômetro exibe a temperatura em graus Centígrados. Sabendo que a fórmula de conversão
para graus Fahrenheit é F= (9 * C + 160) / 5, onde F é a temperatura em Fahrenheit e C é a
temperatura em Centígrados, efetuar essa conversão e ao final mostrar essa temperatura em graus
Fahrenheit..*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var temp = parseFloat(lines.shift());
var F = (9 * temp + 160) / 5;
console.log('Graus Fahrenheit = ' + F);