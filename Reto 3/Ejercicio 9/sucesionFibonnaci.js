var boton = document.getElementById("Calcular").addEventListener("click", ejecucion);

function ejecucion()
{
    var cantidad = parseInt(document.getElementById("Cantidad").value);

    conejosFibonacciAño()
    document.getElementById("Resultado2").innerHTML = "Se necesitan " + conejosFibonacci(cantidad) + " meses para tener " + cantidad + " parejas"; 
}

function conejosFibonacciAño() {
    var sucesion = [0];

    for (let i = 2; i <= 11; i++) {
        if (sucesion[0] == 0) {
            sucesion[0] = 1;
        }

        if (sucesion.length == 1) {
            sucesion[1] = 1;
        }

        sucesion[i] = sucesion[i - 1] + sucesion[i - 2];
    }

    document.getElementById("Resultado").innerHTML = "En un año habran " + sucesion[11] + " parejas";
}

function conejosFibonacci(cantidad) {
   
    var sucesion = [0];

    if (cantidad > 1) 
    {
        for (let i = 2; i <= 1000; i++) 
        {
            if (sucesion[0] == 0) 
            {
                sucesion[0] = 1;
            }

            if (sucesion.length == 1) 
            {
                sucesion[1] = 1;
            }

            sucesion[i] = sucesion[i - 1] + sucesion[i - 2];

            if(cantidad <= sucesion[i])
            {
                return i + 1;
            }
        }
    }
}