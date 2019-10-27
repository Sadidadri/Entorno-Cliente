/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural".
 *
 *@author Adrian Moya Moruno
 */

{
    let cadena;


    let esPalindromo = function () {
        cadena = document.getElementById("cadena").value;
        cadena = cadena.toLowerCase();//Para utilizar la cadena en minuscula y eliminar espacios.
        esPalindroma = true;
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] != cadena[cadena.length - i - 1]) {
                esPalindroma = false;
            }
        }
        if (esPalindroma) { 
            console.log("La cadena " + cadena + " es palíndroma");
        }
        else {
            console.log("La cadena " + cadena + " NO es palíndroma");
        }
    }
    let inicio = function () {
        boton = document.getElementById("boton");
        boton.addEventListener("click", esPalindromo);
    }
    document.addEventListener("DOMContentLoaded", inicio);
}
