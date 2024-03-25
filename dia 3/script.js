let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite o seu nome")
idade = parseInt(prompt("Digite a sua idade"))
altura = Number(prompt("Digite a sua altura"))
peso = Number(prompt("Digite o seu peso"))

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá" + nome + ", você tem" + idade + "anos, nasceu em" + anoNasc +
", tem" + altura + ", pesa" + peso + "kg seu IMC é" + imc + "Kg/m2")
