/**
 * Ejercicio 17
 *
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de
 * caracteres que aún puede escribir. Además, se debe permitir pulsar las teclas 
 * Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
 * @author Adrian Angel Moya Moruno
 */
{
  let elementoTArea;
  let elementoSpan;
  const NUMERO_CARACTERES = 10;
  /**
   * Funcion que limita el contenido del textarea
   */
  let limita = function(evento) {
    ev = evento.key;
    caracteresDisponibles = NUMERO_CARACTERES - (elementoTArea.textLength+1);
    console.log(caracteresDisponibles);
    if(ev == "ArrowLeft" || ev == "ArrowRight" || ev == "Backspace" || ev == "Delete"){
      elementoSpan.innertHTML = "<span>"+caracteresDisponibles+"</span>";
      return true; //Continua el textarea
    }
    else if(elementoTArea.textLength >= NUMERO_CARACTERES){
      elementoSpan.innertHTML = "<span>"+caracteresDisponibles+"</span>";
      evento.preventDefault()//Bloquea el textArea
    }
    else{
      elementoSpan.innerHTML = caracteresDisponibles;
      return true;//Continua textArea
    }
  }

  let inicio = function () {
    elementoTArea = document.getElementById("texto");
    elementoSpan = document.getElementById("caracteres");

    document.addEventListener("keydown", limita);
  }
  document.addEventListener("DOMContentLoaded", inicio);
}
