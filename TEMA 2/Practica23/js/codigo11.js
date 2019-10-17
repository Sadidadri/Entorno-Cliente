window.onload = function() {
    //let info = document.getElementById("informacion");

	// Numero de enlaces de la pagina
    let enlaces = document.getElementsByTagName("a");
    console.log("Numero de enlaces = "+enlaces.length);

	// Direccion del penultimo enlace
    console.log ("El penultimo enlace apunta a: "+enlaces[enlaces.length-2]);

    // Numero de enlaces que apuntan a http://prueba
    let contador = 0;
    for(let i=0; i<enlaces.length; i++) {
        // Es necesario comprobar los enlaces http://prueba y
        // http://prueba/ por las diferencias entre navegadores
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
        contador++;
        }
    }
    this.console.log(contador + " enlaces apuntan a http://prueba"); 

    // Numero de enlaces del tercer párrafo
    let parrafos = document.getElementsByTagName("p");
    console.log("Hay "+parrafos[2].getElementsByTagName("a").length+" enlaces");

}