var boton = document.getElementById("Calcular").addEventListener("click", ejecucion, false);

function ejecucion()
{
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById("Resultado").innerHTML = "MCD: " + euclidesMCD(a,b);
}

function euclidesMCD(num1, num2)
{   
    var aux;

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    a = Math.max(num1,num2);
    b = Math.min(num1,num2);

    do
    {
        aux = b;
        b = a%b;
        a = aux;
    }
    while(b !== 0);

    return a;
}