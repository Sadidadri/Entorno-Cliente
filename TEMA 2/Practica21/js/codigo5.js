/**
 * Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se
muestren siempre de forma correcta:
 *@author Adrian Moya Moruno
 */
{
    let numero1 = 5;
    let numero2 = 8;

    if (!(numero1 > numero2)) {
        console.log("numero1 no es mayor que numero2");
    }
    if (numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if (numero1 < 0 || numero1 != 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    if (!((numero1++) >= numero2)) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

