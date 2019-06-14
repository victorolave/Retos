function formReset() 
{
    document.getElementById("myForm").reset();
}

function comprobar() {
    var va1, va2, va3, va4,
        vb1, vb2, vb3, vb4,
        vc1, vc2, vc3, vc4,
        vd1, vd2, vd3, vd4,
        text;

    va3 = document.getElementById("a3").value;
    va4 = document.getElementById("a4").value;
    vb2 = document.getElementById("b2").value;
    vb3 = document.getElementById("b3").value;
    vb4 = document.getElementById("b4").value;
    vc1 = document.getElementById("c1").value;
    vc2 = document.getElementById("c2").value;
    vc3 = document.getElementById("c3").value;
    vc4 = document.getElementById("c4").value;
    vd1 = document.getElementById("d1").value;
    vd2 = document.getElementById("d2").value;
    vd3 = document.getElementById("d3").value;
    vd4 = document.getElementById("d4").value;

    if (va3 != 9 || va4 != 4 || vb2 != 11 || vb3 != 7 || vb4 != 14 || vc1 != 3 || vc2 != 10 || vc3 != 6 || vc4 != 15
        || vd1 != 13 || vd2 != 8 || vd3 != 12 || vd4 != 1) 
    {
        text = "Hay algún error o faltan datos.";
    } 
    else 
    {
        text = "¡MUY BIEN, FANTÁSTICO!";
    }
    document.getElementById("demo").innerHTML = text;
}

function ayuda1() 
{
    va4 = document.getElementById("a4").value = 4;
    vb3 = document.getElementById("b3").value = 7;
    vc2 = document.getElementById("c2").value = 10;
}

function ayuda2() 
{
    vd1 = document.getElementById("d1").value = 13;
    vd2 = document.getElementById("d2").value = 8;
    vd4 = document.getElementById("d4").value = 1;
}