function muestraOculta(numero) {
  let contenido = document.getElementById('contenidos_'+numero);
  let a = document.getElementById('enlace_'+numero);

  if(contenido.style.display == "" || contenido.style.display == "inline") {
    contenido.style.display = "none";
    a.innerHTML = 'Mostrar contenidos';
  }
  else {
    contenido.style.display = "inline";
    a.innerHTML = 'Ocultar contenidos';
  }
}
