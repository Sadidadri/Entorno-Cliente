/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 *
 *@author Adrian Moya Moruno
 */

 let cad = prompt("Introduzca una cadena");
 console.log(compruebaCadena(cad));

 function compruebaCadena(cadena) {
    contieneMayus = false;
    contieneMinus = false;

     for (let i = 0; i < cadena.length; i++) {
         if (cadena.charAt(i) == cadena.charAt(i).toUpperCase() ) {
             contieneMayus = true;
         }
         else if (cadena.charAt(i) == cadena.charAt(i).toLowerCase()){
            contieneMinus = true;
         }
     }

     if (contieneMayus && contieneMinus){
        return "La cadena está formada por mayusculas y minusculas";
     }
     else if (contieneMayus){
        return "La cadena está formada por mayusculas";
     }
     else (contieneMinus){
        return "La cadena está formada por minusculas";
     }
 }