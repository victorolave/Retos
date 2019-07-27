var hipotenusa = document.getElementById("Hipotenusa");

boton = document.getElementById("Calcular").addEventListener("click", calcHipotenusa, false);

function calcHipotenusa(){

    var catetoA = document.getElementById("catetoA").value;
    var catetoB = document.getElementById("catetoB").value;

    var h = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB,2)).toFixed(2);
    
    hipotenusa.innerHTML = h.toString() + "  Centimetros";
}