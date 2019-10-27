/**
 * Ejercicio 16
  Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón.
  Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba
  y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función
  tamanoVentanaNavegador() proporcionada.
 *
 *@author Adrian Moya Moruno
 */
{
  function informacion(evento) {
    
    let coordenadaX = evento.clientX;
    let coordenadaY = evento.clientY;

    let [tamanoX, tamanoY] = tamanoVentanaNavegador();

    let posicionHorizontal = "";
    let posicionVertical = "";

    if (coordenadaX > tamanoX / 2) {
      posicionHorizontal = "derecha";
    }
    else {
      posicionHorizontal = "izquierda";
    }

    if (coordenadaY > tamanoY / 2) {
      posicionVertical = "abajo";
    }
    else {
      posicionVertical = "arriba";
    }

    muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
  }

  function muestraInformacion(mensaje) {
    let info = document.getElementById("info");
    info.innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (let i = 1; i < mensaje.length; i++) {
      info.innerHTML += '<p>' + mensaje[i] + '</p>';
    }
  }

  function tamanoVentanaNavegador() {
    return [window.innerWidth, window.innerHeight];
  }

  let inicio = function(){
    document.addEventListener("click",informacion);
  }
  document.addEventListener("DOMContentLoaded",inicio);
}