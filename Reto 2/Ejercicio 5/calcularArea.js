var area = document.getElementById("Area");

boton = document.getElementById("Calcular").addEventListener("click", calcArea, false);

function calcArea(){

    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);

    var p = (ladoA + ladoB + ladoC)/2;
    var a = Math.sqrt(p*(p-ladoA)*(p-ladoB)*(p-ladoC)).toFixed(2);
    
    area.innerHTML = a.toString() + "  Centimetros";
}