/**
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola",
"adios", 2];
1. Determinar cual de los dos elementos de texto es mayor
2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
necesarios para obtener un resultado true y otro resultado false
3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
elementos numéricos
 *@author Adrian Moya Moruno
 */

var valores = [true, 5, false, "hola","adios", 2];
var textoMayor;

//Determinar cual es mayor
if (valores[3].length > valores[4].length){
    textoMayor = valores[3];
}else{
    textoMayor = valores[4];
}
console.log("El texto mayor es "+textoMayor);
//True y False
console.log(valores[0]==valores[2]);
console.log(valores[0]!=valores[2]);
//5 operaciones:
console.log("Suma: "+(valores[1]+valores[5]));
console.log("Resta: "+(valores[1]-valores[5]));
console.log("Multiplicacion: "+(valores[1]*valores[5]));
console.log("Division: "+(valores[1]/valores[5]));
console.log("Modulo: "+(valores[1]%valores[5]));