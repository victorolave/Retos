var boton = document.getElementById("Convertir").addEventListener("click",redondear,false);

function redondear() {
  var N = document.getElementById("numero").value;
  var resultado = "";

  if (N.length == 4) 
  {
    var A = N[0];
    var B = N[1];
    var C = N[2];
    var D = N[3];
    
    var array = [A,B,C,D];

    if ( C > 5)
    {
        B = parseInt(B) + 1;
 
        array[1] = ""+B;
        array[2] = "0";
        array[3] = "0";        
    }

    if ( C <= 5)
    {
        array[2] = "0";
        array[3] = "0";        
    }

    for (let i = 0; i < array.length ; i++)
    {
      resultado += array[i];
    }

    document.getElementById("Resultado").innerHTML = resultado;
  } 
  else 
  {
    if(N.length < 4)
    {
      document.getElementById("Resultado").innerHTML = "Numero de menos de cuatro cifras";
    }
    else
    {
      document.getElementById("Resultado").innerHTML = "Numero de mas de cuatro cifras";
    }
    
  }
}
