var boton = document.getElementById("Calcular").addEventListener("click", ejecucion, false);

function ejecucion()
{
    var salario = parseInt(document.getElementById("salario").value);
    var nuevoSalario = aumentoSalarial(salario);

    document.getElementById("Resultado").innerHTML = nuevoSalario;
}


function aumentoSalarial(salario)
{
    if (salario > 0 && salario <= 9000)
    {
        var aumento = salario * 0.20;
        salario += aumento;
        return salario;
    }
    
    if (salario > 9000 && salario < 15000)
    {
        var aumento = salario * 0.10;
        salario += aumento;
        return salario;
    }

    if (salario > 15000 && salario < 20000)
    {
        var aumento = salario * 0.05;
        salario += aumento;
        return salario;
    }

    if (salario > 2000)
    {
        return salario;
    }
}