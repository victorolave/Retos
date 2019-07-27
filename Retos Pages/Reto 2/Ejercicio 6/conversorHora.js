var horas;
var minutos;
var formato24 = document.getElementById("Formato24");

var boton = document.getElementById("Calcular").addEventListener("click",convHora,false);

function convHora () {

    horas = parseInt(document.getElementById("horas").value);
    minutos = document.getElementById("minutos").value;

    if(horas > 0 && horas < 12)
    {
        if (minutos.length < 2)
        {
            formato24.innerHTML = horas + ":0" + minutos + " AM";
        }
        else
        {
            formato24.innerHTML = horas + ":" + minutos + " AM";
        }
    }
    else if (horas > 12 && horas <= 24)
    {
        horas = horas - 12;
        formato24.innerHTML = horas + ":" + minutos + " PM";
    }
}   