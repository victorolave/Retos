var boton = document.getElementById("Determinar").addEventListener("click", ejecucion, false);

function ejecucion()
{
    var año = document.getElementById("año").value;

    if(esBisiesto(año))
    {
        document.getElementById("Resultado").innerHTML = "El año "+año+" es bisiesto"
    }
    else
    {
        document.getElementById("Resultado").innerHTML = "El año "+año+" no es bisiesto"
    }

    console.log(esBisiesto(año));
}

function esBisiesto(año){
	return año % 4 == 0 && año % 100 != 0 || año % 400 == 0;
}