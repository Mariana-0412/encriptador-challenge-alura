const inputTexto = document.querySelector(".textArea__1"); // Variable para almacenar el texto ingresado
const outputMensaje = document.querySelector(".textArea__2"); // Variable para almacenar el texto encriptado
const imagenPersonaje = document.querySelector(".imagen__muñeco");
const tituloSecundario = document.querySelector(".titulo__articulo__2");
const parrafoSecundario = document.querySelector(".parrafo__articulo__2");
const seccionSecundaria = document.querySelector(".articulo__2");
const botonCopiar = document.querySelector(".copiar__button");

function manejarBotonEncriptar() {
  const textoProcesado = encriptarTexto(inputTexto.value);
  outputMensaje.value = textoProcesado;
  inputTexto.value = "";
  
  imagenPersonaje.style.display = "none";
  tituloSecundario.style.display = "none";
  parrafoSecundario.style.display = "none";

  outputMensaje.style.display = "block";
  botonCopiar.style.display = "block";
}

function encriptarTexto(textoOriginal) {
  let matrizCifrado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  textoOriginal = textoOriginal.toLowerCase();

  for (let i = 0; i < matrizCifrado.length; i++) {
    if (textoOriginal.includes(matrizCifrado[i][0])) {
      textoOriginal = textoOriginal.replaceAll(matrizCifrado[i][0], matrizCifrado[i][1]);
    }
  }
  return textoOriginal;
}

function manejarBotonDesencriptar() {
  const textoProcesado = desencriptarTexto(inputTexto.value);
  outputMensaje.value = textoProcesado;
  inputTexto.value = "";

  imagenPersonaje.style.display = "none";
  tituloSecundario.style.display = "none";
  parrafoSecundario.style.display = "none";

  outputMensaje.style.display = "block";
  botonCopiar.style.display = "block";
}

function desencriptarTexto(textoEncriptado) {
  let matrizCifrado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  textoEncriptado = textoEncriptado.toLowerCase();

  for (let i = 0; i < matrizCifrado.length; i++) {
    if (textoEncriptado.includes(matrizCifrado[i][1])) {
      textoEncriptado = textoEncriptado.replaceAll(matrizCifrado[i][1], matrizCifrado[i][0]);
    }
  }
  return textoEncriptado;
}

function copiarAlPortapapeles() {
  const outputMensaje = document.querySelector(".textArea__2");
  outputMensaje.select();
  document.execCommand("copy");
  outputMensaje.value = "";
  restaurarVista();
}

function restaurarVista() {
  if (window.innerWidth > 1200) {
    imagenPersonaje.style.display = "block";
  } else {
    imagenPersonaje.style.display = "none";
  }
  tituloSecundario.style.display = "block";
  parrafoSecundario.style.display = "block";
  outputMensaje.style.display = "none";
  botonCopiar.style.display = "none";
}

outputMensaje.addEventListener("input", function() {
  if (outputMensaje.value === "") {
    restaurarVista();
  }
});
