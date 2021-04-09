var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))
var operacao = prompt("Digite 0 para divisão, 1 para multiplicação, 2 adição e 3 para subtração: ")

if (operacao == 0) {
  var resultado = primeiroValor/segundoValor
  document.write("<h2>" + primeiroValor + "/" + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 1) {
  var resultado = primeiroValor*segundoValor
  document.write("<h2>" + primeiroValor + "x" + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = primeiroValor+segundoValor
  document.write("<h2>" + primeiroValor + "+" + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
  var resultado = primeiroValor-segundoValor
  document.write("<h2>" + primeiroValor + "-" + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2> Opção inválida </h2>")
}