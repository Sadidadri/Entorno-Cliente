/**
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
resultado devuelto por la función.
 *@author Adrian Moya Moruno
 */

 {
    let num;
  
    let parOImpar = function () {
        num = document.getElementById("num");
        if (num.value%2 == 0) {
            console.log("El numero es par");
        }
        else{
            console.log("El numero es impar");
        }
    }

    let inicio = function(){
        boton.addEventListener("click",parOImpar)
    }
    document.addEventListener("DOMContentLoaded",inicio);

    
 }
