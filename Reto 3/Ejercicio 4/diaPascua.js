var boton = document.getElementById("Calcular").addEventListener("click", ejecutar);

function ejecutar()
{
    var año = parseInt(document.getElementById("año").value);
    var diaPascua = calcularDia(año);
    
    if (diaPascua > 31)
    {
        diaPascua -= 31;
        document.getElementById("Resultado").innerHTML = "Abril : "+diaPascua;
    }
    else
    {
        document.getElementById("Resultado").innerHTML = "Marzo : "+diaPascua;
    }
}

function calcularDia(año)
{
    if (año >= 1990 && año <= 2000 )
    {
        var A = año % 19;
        var B = año % 4;
        var C = año % 7;
        var D = (19 * A + 24) % 30;
        var E = (2 * B + 4 * C + 6 * D + 5) % 7;
        var N = (22 + D + E);
        return N;
    }
    else
    {
        var error = "Año fuera de rango";
        document.getElementById("Resultado").innerHTML = error;
    }
}