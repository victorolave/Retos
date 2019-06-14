var boton = document.getElementById("Calcular").addEventListener("click",ejecutar,false);

function ejecutar()
{
    var decimales = parseFloat(document.getElementById("decimales").value);
    var pi = calcPi(decimales);

    document.getElementById("Resultado").innerHTML = pi;
}

function calcPi(decimales){
   var index = 1;
   var pi = 0;

   while (index < 50000000){
       pi += 1/index - 1/(index + 2);
       index += 4;
   }
   return +(4*pi).toFixed(decimales);
}