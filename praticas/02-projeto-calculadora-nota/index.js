let prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome? ');

console.log('Olá, ' + nome + '!')

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota.js');

let exerciciosA1 = parseFloat(prompt("Qual a nota dos exercíos da A1? "))
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalho da A1? "))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1?"))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("### Calculo da Nota A1 ###")
console.log("Nota Exercícios A1: " + exerciciosA1)
console.log("Nota Trabalho A1: " + trabalhoA1)
console.log("Nota Prova A1: " + provaA1)
console.log("Nota A1: " + notaA1)

let exerciciosA2 = parseFloat(prompt("Qual a nota dos exercíos da A2? "))
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho da A2? "))
let provaA2 = parseFloat(prompt("Qual a nota da prova A2?"))
let notaA2 = calcularNotaA2(exerciciosA2, trabalhoA2, provaA2)

console.log("### Calculo da Nota A2 ###")
console.log("Nota Exercícios A2: " + exerciciosA2)
console.log("Nota Trabalho A2: " + trabalhoA2)
console.log("Nota Prova A2: " + provaA2)
console.log("Nota A2: " + notaA2)

let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log("### Calculo da Nota Final ###")
console.log(notaFinal)



