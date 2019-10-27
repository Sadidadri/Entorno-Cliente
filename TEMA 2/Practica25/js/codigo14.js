/**
 * A partir de la página web proporcionada, completar el código JavaScript para que:

Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
 * @author Adrian Moya Moruno 
 */

{

  function muestraOculta(numero) {
    let contenido = document.getElementById('contenidos_' + numero);
    let a = document.getElementById('enlace_' + numero);

    if (contenido.style.display == "" || contenido.style.display == "inline") {
      contenido.style.display = "none";
      a.innerHTML = 'Mostrar contenidos';
    }
    else {
      contenido.style.display = "inline";
      a.innerHTML = 'Ocultar contenidos';
    }
    return false;
  }

  let inicio = function(){

  }
  document.addEventListener("DOMContentLoaded",inicio);
}
