/**
 * Ejercicio 17
 *
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de
 * caracteres que aún puede escribir. Además, se debe permitir pulsar las teclas 
 * Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
 *
 */
{   

    function limita(maximoCaracteres) {
        let elemento = document.getElementById("texto");
        let numeroCaracteres = elemento.value.length;
        
        if(numeroCaracteres >= maximoCaracteres ) {
          return false;
        }
        else {
          document.getElementsByTagName("span")[1].innerText = maximoCaracteres - (numeroCaracteres+1);
          return true;
        }
        
      }
      
    window.onload = function() {
        
    }
    
}
