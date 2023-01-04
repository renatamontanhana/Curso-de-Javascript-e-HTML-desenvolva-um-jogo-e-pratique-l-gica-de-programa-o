function pulaLinha() {
  // pulando duas linhas
  document.write("<br><hr><br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

pulaLinha();

var ano = 2023;

mostra("Flávio tem " + (ano - 1977) + " anos");
mostra("Joaquim nasceu em " + (ano - 1996) + " anos");

mostra("Barney nasceu em " + (ano - 1976) + " anos");

var idadeFlavio = 39;
var idadeJoaquim = 20;
var idadeBarney = 41;
var media = (idadeFlavio + idadeJoaquim + idadeBarney) / 3;

mostra("A média das idades é " + Math.round(media));
var nome = "Flávio";
mostra("A idade de " + nome + " é " + idadeFlavio);
var IDADE1 = 10;
var IDADE2 = 20;
var IDADE3 = 12;

mostra("A média das idades é ");
mostra((IDADE1 + IDADE2 + IDADE3) / 3);
var tanque = 40;
var caminhoComGasolina = 480;
var consumoDeGasolina = caminhoComGasolina / tanque;
var caminhoComAlcool = 300;
var consumoDeAlcool = caminhoComAlcool / tanque;

mostra("O consumo de Gasolina é " + consumoDeGasolina + " km/L");
mostra("O consumo de Álcool é " + consumoDeAlcool + " km/L");

function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}
var idadeMediaQuandoTemFilhos = 28;
var anoAtual = 2016;
var quantidadeDeGeracoes = (anoAtual - 1500) / idadeMediaQuandoTemFilhos;
mostra(Math.round(quantidadeDeGeracoes));
