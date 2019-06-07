var boton = document.getElementById("Calcular").addEventListener("click", ejecucion, false);

function ejecucion()
{
    año = document.getElementById("año").value;
    mes = document.getElementById("mes").value;
    determinar(año, mes);
}

function determinar(año, mes)
{
    if (año <= 0 || mes <= 0 || mes > 12)
    {
        document.getElementById("Resultado").innerHTML = "No es un mes|año valido";
    }
    else
    {
        switch(parseInt(mes))
        {
            case 1 :
            case 3 :
            case 5 :
            case 7 :
            case 8 :  
            case 10:
            case 12:
                document.getElementById("Resultado").innerHTML = "31 Dias";
                break;

            case 4:
            case 6:
            case 9:
            case 11:
                    document.getElementById("Resultado").innerHTML = "30 Dias";
                break;

            case 2:
                if(esBisiesto(año))
                {
                    document.getElementById("Resultado").innerHTML = "29 Dias";
                }
                else
                {
                    document.getElementById("Resultado").innerHTML = "28 Dias";
                }
                break;
        }
    }
}

function esBisiesto(año){
	return año % 4 == 0 && año % 100 != 0 || año % 400 == 0;
}