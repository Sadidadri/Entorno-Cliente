/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural".
 *
 *@author Adrian Moya Moruno
 */

 let cad = prompt("Introduzca una cadena: ");
 if (esPalindromo(cad.toLowerCase().split())){ //Para utilizar la cadena en minuscula y eliminar espacios.
     console.log("La cadena "+cad+" es palíndroma");
 }
 else{
     console.log("La cadena "+cad+" NO es palíndroma");
 }

 function esPalindromo(cadena){
     esPalindroma = true;
     for (let i=0;i<cadena.length;i++){
		if(cadena[i]!=cadena[cadena.length-i-1]){
			esPalindroma = false;
		}
    }
    return esPalindroma;
 }