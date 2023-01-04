function pulaLinha() {
  document.write("<br>");
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

function calculaIMC(altura, peso) {
  var imc = peso / (altura * altura);
  mostra("O IMC calculado é " + imc);
}

var pesoRenata = 70;
var alturaRenata = 1.65;
calculaIMC(1.65, 70);

var pesoAmigo = 64;
var AlturaAmigo = 1.64;
calculaIMC(AlturaAmigo, pesoAmigo);
