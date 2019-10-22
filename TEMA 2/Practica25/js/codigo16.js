{
  function informacion(elEvento) {
  let evento = elEvento;

  let coordenadaX = evento.clientX;
  let coordenadaY = evento.clientY;

  let [tamanoX, tamanoY] = tamanoVentanaNavegador();

  let posicionHorizontal = "";
  let posicionVertical = "";

  if(coordenadaX > tamanoX/2) {
    posicionHorizontal = "derecha";
  }
  else {
    posicionHorizontal = "izquierda";
  }

  if(coordenadaY > tamanoY/2) {
    posicionVertical = "abajo";
  }
  else {
    posicionVertical = "arriba";
  }

  muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
}

function muestraInformacion(mensaje) {
  let info = document.getElementById("info");
  info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(let i=1; i<mensaje.length; i++) {
    info.innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

function tamanoVentanaNavegador(){
  return [window.innerWidth, window.innerHeight];
}

document.onclick = informacion;
}