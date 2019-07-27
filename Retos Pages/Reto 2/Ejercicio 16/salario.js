var boton = document.getElementById("Calcular").addEventListener("click", ejecutar)

function ejecutar()
{
    var horas = parseInt(document.getElementById("horas").value);
    var precio = parseInt(document.getElementById("precio").value);

    salario = calcSalario(horas, precio);
    impuesto = calcImpuestos(salario);

    document.getElementById("salario").innerHTML = "Su salario es : " + salario;
    document.getElementById("impuesto").innerHTML = impuesto;
}

function calcSalario(horas, precio)
{
    var salario = 0;
    var horasExtra = 0;
    
    if ( horas > 0 && horas < 38)
    {
        salario = horas * precio;
        return salario;
    }
    else
    {
        horasExtra = horas - 37;
        salario = (horasExtra * (precio * 0.5) + (37 * precio));
        return salario;
    }
}

function calcImpuestos(salario)
{
    if ( salario > 50000 )
    {
        var impuesto = "Debe pagar " + salario * 0.1 + " de impuestos";
        return impuesto; 
    }
    else
    {
        var impuesto = "El empleado no paga impuestos";
        return impuesto;
    }
}