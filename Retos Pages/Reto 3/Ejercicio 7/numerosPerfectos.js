var boton = document.getElementById("ejecutar").addEventListener("click",ejecucion, false);
var perfectos = [];

function ejecucion()
{
    var cantidad = parseInt(document.getElementById("cantidad").value);
    numerosPerfectos(cantidad);
}


function numerosPerfectos(cantidad)
{
    for ( var i =  0 ; i <= cantidad; i++)
    {
        b = 0;

        for( var j = 1 ; j <= Math.floor(i/2); j++ )
        {
            if(parseInt(i) % parseInt(j) == 0)
            {
                b += parseInt(j);
            }
        }

        if (b == i)
        {
            perfectos.push(i);
        }
    }

    document.getElementById("Resultado").innerHTML = "Los numeros: " + perfectos + " son perfectos";
}