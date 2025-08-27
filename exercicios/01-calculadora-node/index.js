let prompt = require('prompt-sync')();

let numA = parseFloat(prompt('Digite o primeiro número: '));
let numB = parseFloat(prompt('Digite o segundo número: '));

let {somar, subtrair, multiplicar, dividir, potencia, raizQuadrada} = require('./calculadora.js');

console.log('Soma =', somar(numA, numB));
console.log('Subtração =', subtrair(numA, numB));
console.log('Multiplicação =', multiplicar(numA, numB));
console.log('Divisão =', dividir(numA, numB));
console.log('Potencia =', potencia(numA, numB));
console.log('Raiz quadrada =', raizQuadrada(numA));