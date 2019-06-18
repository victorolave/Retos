var boton = document.getElementById("Calcular").addEventListener("click", ejecutar, false);

function ejecutar()
{
    var numero = parseInt(document.getElementById("numero").value);

    if (primo(numero) == true)
    {
        document.getElementById("Resultado").innerHTML = "Es primo!"
    }
    else
    {
        document.getElementById("Resultado").innerHTML = "No es primo!"
    }

}

function primo(numero)
{
    if (numero === 0) return false;
    
    var limit = Math.round(Math.sqrt(numero));

    for (let i = 0; i <= limit; i++) 
    {
        if (numero % i === 0) return false;   
    }
    return true;
}