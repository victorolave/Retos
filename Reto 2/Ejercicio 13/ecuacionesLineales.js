
var boton = document.getElementById("Calcular").addEventListener("click", ejecutar , false);

function ejecutar()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;

    var x = resolverX(a,b,c,d,e,f);
    var y = resolverY(a,b,c,d,e,f);

    if (isNaN(x) || isNaN(y))
    {
        document.getElementById("X").innerHTML = "No se puede resolver 😥";   
    }
    else
    {
        document.getElementById("X").innerHTML = "X =  " + x;
        document.getElementById("Y").innerHTML = "Y =  " + y;
    }
}

function resolverX(a,b,c,d,e,f)
{
    var x = (c*e - b*f)/(a*e - b*d);
    return x;
}

function resolverY(a,b,c,d,e,f)
{
    var y = (a*f - c*d)/(a*e - b*d);
    return y;
}


