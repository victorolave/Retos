var Input = document.getElementById("definir").addEventListener("click",generarInputs);


function calcular()
{
    document.getElementById("mayor").innerHTML = "Mayor : "+ mayor();
    document.getElementById("media").innerHTML = "Media : "+ media();
    document.getElementById("menor").innerHTML = "Menor : "+ menor();
}

function mayor()
{
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var numeros = [];

    for(let i = 1 ; i <= cantidad ; i++)
    {
        numeros.push(parseFloat(document.getElementById("numero"+i).value));
    }

    var max =  Math.max.apply(null, numeros);
    return max;
}

function menor()
{
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var numeros = [];

    for(let i = 1 ; i <= cantidad ; i++)
    {
        numeros.push(parseFloat(document.getElementById("numero"+i).value));
    }

    var min = Math.min.apply(null, numeros);
    return min;
}

function media()
{
    var cantidad = parseInt(document.getElementById("cantidad").value); 
    var suma = 0;

    for(let i = 1 ; i <= cantidad ; i++)
    {
        var num = parseFloat(document.getElementById("numero"+i).value);
        suma += num;
    }

    var promedio = suma / cantidad;
    return promedio.toFixed(2);

}

function generarInputs(){
    
    var cantidad = document.getElementById("cantidad").value; 

    var inputs = "";
    var inputContainer = document.getElementById("inputs");
    
    for (let i = 1; i <= cantidad ; i++)
    {
        inputs += `<input id="numero`+i+`" type="number" class="form-control text-center" placeholder="Numero `+i+`">`;
    }

    inputContainer.innerHTML = inputs;

    document.getElementById("boton").innerHTML = '<a id="calcular" style="color:white;border-top-width: 1px;margin-top: 10px;"class="form-control btn btn-lg btn-primary">Calcular</a>';
    var calc = document.getElementById("calcular").addEventListener("click", calcular,false);
}