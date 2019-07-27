var boton = document.getElementById("Determinar").addEventListener ("click", ejecutar, false);

function ejecutar()
{
    numero = parseInt(document.getElementById("numero").value);
    determinar(numero);
}

function determinar(numero)
{
    if(numero == 0)
    {
        document.getElementById("Resultado").innerHTML = "El numero es 0";
    }
    else if(numero > 0)
    {
        document.getElementById("Resultado").innerHTML = "El numero es Positivo";
    }
    else if(numero < 0)
    {
        document.getElementById("Resultado").innerHTML = "El numero es Negativo";
    }
    else
    {
        document.getElementById("Resultado").innerHTML = "Numero Invalido";
    }
}