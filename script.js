/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var input = document.querySelector("#input-texto");
var botonEncriptar = document.querySelector("#btn-encriptar");
var msg = document.querySelector("#msg");

function encriptar(event) {
  event.preventDefault();
  var encriptado = input.value;

  encriptado = encriptado.split('')

  encriptado.forEach((caracter, index) => {
    if (caracter === 'a') {
      encriptado[index] = 'ai';
    } else if (caracter === 'e') {
      encriptado[index] = 'enter';
    } else if (caracter === 'i') {
      encriptado[index] = 'imes';
    } else if (caracter === 'o') {
      encriptado[index] = 'ober';
    } else if (caracter === 'u') {
      encriptado[index] = 'ufat';
    } 
  });

  encriptado = encriptado.join('');
  msg.value = encriptado;
}

botonEncriptar.addEventListener("click", encriptar);

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
