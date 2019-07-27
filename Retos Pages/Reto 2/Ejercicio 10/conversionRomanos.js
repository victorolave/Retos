var letras = ["I", "V", "X", "L", "C", "D", "M"];
var _regexp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

var boton = document.getElementById("Convertir").addEventListener("click", ejecucion, false);

function ejecucion() {
    
    var numero = parseInt(document.getElementById("arabigo").value);
    
    if (numero >= 1000 && numero <= 2000) 
    {
        document.getElementById("Resultado").innerHTML = obtenerRomano(numero);
    }
    else 
    {
        document.getElementById("Resultado").innerHTML = "Numero Fuera de Rango";
    }
    
}

function testRoman(roman) {
    return roman;
}

function obtenerRomano(numero) 
{
    var roman = "";
    var cant = String(numero).length;
    var narray = String(numero).split("").reverse();

    var parser = function (item, index, a) {
        switch (item) {
            case "0":
            case "1":
            case "2":
            case "3":
                roman = new Array(Number(item) + 1).join(letras[index * 2]) + roman;
                break;

            case "4":
                roman = letras[index * 2] + letras[index * 2 + 1] + roman;
                break;

            case "5":
            case "6":
            case "7":
            case "8":
                roman = letras[index * 2 + 1] + new Array(Number(item) - 4).join(letras[index * 2]) + roman;
                break;

            case "9":
                roman = letras[index * 2] + letras[index * 2 + 2] + roman;
                break;
        }
    }

    narray.forEach(parser);
    return roman;

}
