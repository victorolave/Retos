var boton = document.getElementById("Calcular").addEventListener("click", ejecutar);

function ejecutar() 
{
    var x = parseFloat(document.getElementById("x").value);
    document.getElementById("Resultado").innerHTML = ""+calcularE(x);    
}

function calcularE(x) 
{
    var resultado = 0;

    for (let i = 0; i < 100; i++) 
    {
        var calculo = (Math.pow(x, i) / factorial(i));
        resultado += calculo;
    }

    return resultado;
}

function factorial(n) 
{
    var total = 1;
    for (i = 1; i <= n; i++) 
    {
        total = total * i;
    }
    return total;
}