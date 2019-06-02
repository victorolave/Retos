var nota1, nota2, nota3, nota4, promedio, rate;

promedio = document.getElementById("promedio");

boton = document.getElementById("Calcular").addEventListener("click", calcPromedio, false);

function calcPromedio(){
    
    var suma;
    var prom;

    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);
    nota4 = parseFloat(document.getElementById("nota4").value);

    suma = nota1 + nota2 + nota3 + nota4;
    prom = suma / 4;
    
    if(prom >= 0 && prom <= 59 ){
        rate = "E"
        promedio.style.color = "red";
    }
    else if(prom >= 60 && prom <= 69){
        rate = "D"
        promedio.style.color = "orange";
    }
    else if(prom >= 70 && prom <= 79){
        rate = "C"
        promedio.style.color = "blue";
    }
    else if(prom >= 80 && prom <= 89){
        rate = "B"
        promedio.style.color = "green";
    }
    else if(prom >= 90 && prom <= 100){
        rate = "A"
        promedio.style.color = "goldenrod";
    }
    promedio.innerHTML = prom+" | "+rate
}