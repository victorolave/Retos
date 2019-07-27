var masa;

var energia = document.getElementById("Energia");

const velocidadLuz = 2.997925e10;


boton = document.getElementById("Calcular").addEventListener("click", calcEnergia, false);

function calcEnergia(){

    masa = document.getElementById("masa").value;

    var ener = (velocidadLuz * Math.pow(masa, 3)).toExponential(2);
    console.log(ener);

    energia.innerHTML = ener.toString() + "  Ergios";
}