var puloLinha = "<br><br><br>";
var ano = 2023;

document.write("Flávio tem " + (ano - 1977) + " anos");
document.write("<br>");
document.write("Joaquim nasceu em " + (ano - 1996) + " anos");
document.write("<br>");
document.write("Barney nasceu em " + (ano - 1976) + " anos");

var idadeFlavio = 39;
var idadeJoaquim = 20;
document.write(puloLinha);
var idadeBarney = 41;
var media = (idadeFlavio + idadeJoaquim + idadeBarney) / 3;
document.write("<br>");
document.write("<br>");

document.write("A média das idades é " + Math.round(media));
var nome = "Flávio";
document.write("<br><br>A idade de " + nome + " é " + idadeFlavio);

var IDADE1 = 10;
var IDADE2 = 20;
var IDADE3 = 12;

document.write("<br>A média das idades é ");
document.write((IDADE1 + IDADE2 + IDADE3) / 3);

var tanque = 40;

var caminhoComGasolina = 480;
var consumoDeGasolina = caminhoComGasolina / tanque;

var caminhoComAlcool = 300;
var consumoDeAlcool = caminhoComAlcool / tanque;
document.write("<br>");

document.write("O consumo de Gasolina é " + consumoDeGasolina + " km/L");

document.write("<br>");

document.write("O consumo de Álcool é " + consumoDeAlcool + " km/L");
