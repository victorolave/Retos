var boton = document.getElementById("Determinar").addEventListener("click", ejecutar, false);

var billetes;

function ejecutar()
{
    var cantidad = parseInt(document.getElementById("cantidad").value);

    document.getElementById("Resultado").innerHTML = "Cantidad de billetes de " + determinar(cantidad);
}

function determinar(cantidad)
{
    if(cantidad > 0 && cantidad < 2000)
    {
        billetes = "mil = " + cantidad / 1000;
        return billetes;          
    }
    
    if(cantidad >= 2000 && cantidad < 5000)
    {
        billetes = "dosmil = " +cantidad / 2000;
        return billetes;          
    }

    if(cantidad >= 5000 && cantidad < 10000)
    {
        billetes = "cincomil = " + cantidad / 5000;
        return billetes;          
    }

    if(cantidad >= 10000 && cantidad < 20000)
    {
        billetes = "diesmil = " + cantidad / 10000;
        return billetes;          
    }

    if(cantidad >= 20000 && cantidad < 50000)
    {
        billetes = "veintemil = " + cantidad / 20000;
        return billetes;          
    }

    if(cantidad >= 50000 && cantidad < 100000)
    {
        billetes = "cincuentamil = " + cantidad / 50000;
        return billetes;          
    }

    if(cantidad >= 100000)
    {
        billetes = "cienmil = " + cantidad / 100000;
        return billetes;          
    }
}
