function pulaLinha() {
  document.write("<br>");
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

function calculaImc(altura, peso) {
  return peso / (altura * altura);
}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt(nome + ", informe suas altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc(alturaInformada, pesoInformado);
document.write(nome + ", o seu IMC é " + imc);

if (imc < 18.5) {
  mostra("Você está abaixo do recomendado");
}
if (imc > 35) {
  mostra("Você está acima do recomendado");
}
if (imc >= 18.5 && imc <= 18.5) {
  mostra("Seu IMC está excelente");
}
