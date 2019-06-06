var boton = document.getElementById("Calcular").addEventListener("click",ejecutar,false);


function ejecutar()
{
    var fecha = document.getElementById("fecha").value;
    document.getElementById("Resultado").innerHTML = calcularEdad(fecha);
}


function calcularEdad(fecha) {

    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    else
    {
        var resultado = mes + " meses";
        return resultado;
    }

    var resultado = edad + " años";
    return resultado; 
}
