var masa1;
var masa2;
var distancia;

var fuerza = document.getElementById("Fuerza");

const gravedad = 6.673e-8;

boton = document.getElementById("Calcular").addEventListener("click", calcFuerza, false);

function calcFuerza(){

    masa1 = document.getElementById("masa1").value;
    masa2 = document.getElementById("masa2").value;
    distancia = document.getElementById("distancia").value;

    var fuerz = (gravedad * masa1 * masa2 / Math.pow(distancia, 2)).toExponential(2);

    console.log(fuerz);
    fuerza.innerHTML = fuerz.toString()+" Dinas";
}