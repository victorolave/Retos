var boton = document.getElementById("Calcular").addEventListener("click",calcular,false);


function calcular()
{
    var radio = parseFloat(document.getElementById("radio").value);
    var operacion = document.getElementById("operacion").value;
    var resultado;

    if(operacion == 0)
    {
        document.getElementById("operacionLabel").innerHTML = "Circunferencia:";
        resultado = circunferencia(radio);
    }
    else if(operacion == 1)
    {
        document.getElementById("operacionLabel").innerHTML = "Area:";
        resultado = area(radio);
    }
    else if(operacion == 2)
    {
        document.getElementById("operacionLabel").innerHTML = "Diametro:";
        resultado = diametro(radio);
    }

    document.getElementById("Resultado").innerHTML = resultado.toFixed(2);
}

function circunferencia(radio)
{
    return radio * 2 * Math.PI; 
}

function area(radio)
{
    return Math.PI * Math.pow(radio,2);
}

function diametro(radio)
{
    return 2*radio;
}