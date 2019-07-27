var units = {
    "centenas": ["novecientos", "ochocientos", "setecientos", "seiscientos", "quinientos",
        "cuatrocientos", "trescientos", "doscientos", "ciento"],

    "decenas": ["noventai", "ochentai", "setentai", "sesentai", "cincuentai", "cuarentai",
        "treintai", "veinti", "dieci"],

    "unidades": ["nueve", "ocho", "siete", "seis", "cinco", "cuatro", "tres", "dos", "uno"],

    "exaDec": ["noventa", "ochenta", "setenta", "sesenta", "cincuenta", "cuarenta",
        "treinta", "veinte", "diez"],

    "exaCen": ["cien"],

    "cenNum": [900, 800, 700, 600, 500, 400, 300, 200, 100],

    "decNum": [90, 80, 70, 60, 50, 40, 30, 20, 10],

    "uniNum": [9, 8, 7, 6, 5, 4, 3, 2, 1],

    "decEsp": ["once", "doce", "trece", "catorce", "quince"],

    "decEsp": [11,12,13,14,15]
};

var boton = document.getElementById("Calcular").addEventListener("click", convNumero, false);

function convNumero() {
    var numero = document.getElementById("numero").value;
    var num = 0;

    for (let i = 0; i < units.centenas.length; i++) {

        if (numero.includes(units.centenas[i]) || numero == "cien") {

            if (numero == units.centenas[i]) {
                num = units.cenNum[i];
                return document.getElementById("number").innerHTML = num;
            }

            if (numero == units.exaCen[0]) {
                num = 100;
                return document.getElementById("number").innerHTML = num;
            }

            num = units.cenNum[i];
            break;
        }
    }

    for (let i = 0; i < units.decenas.length; i++) {

        if (numero.includes(units.decenas[8])) {
            num += 10;
            break;
        }

        if (numero.includes(units.decenas[7])) {
            num += 20;
            break;
        }

        if (numero.includes(units.exaDec[i]) || numero == "diez" || numero == "veinte") {

            if (numero == "diez") {
                num += 10;
                return document.getElementById("number").innerHTML = num;
            }

            if (numero == "veinte") {
                num += 20;
                return document.getElementById("number").innerHTML = num;
            }

            if (numero == units.exaDec[i]) {
                num += units.decNum[i];
                return document.getElementById("number").innerHTML = num;
            }

            num += units.decNum[i];
            break;
        }
    }

    if (numero == units.centenas[1] || numero == units.centenas[3] || numero == units.centenas[5] || numero == units.centenas[6] || numero == units.centenas[7]) {
        return document.getElementById("number").innerHTML = num;
    }
    else if(numero.includes(units.centenas[1]) || numero.includes(units.centenas[3]) || numero.includes(units.centenas[5]) || numero.includes(units.centenas[6]) || numero.includes(units.centenas[7]))
    {
        for (let i = 0; i < units.unidades.length; i++) {
            if (numero.includes(units.unidades[i])) {
                if (numero == units.unidades[i]) {
                    num = units.uniNum[i];
                    return document.getElementById("number").innerHTML = num;
                }

                num += units.uniNum[i];
                break;
            }
        }
    }
    else {
        for (let i = 0; i < units.unidades.length; i++) {
            if (numero.includes(units.unidades[i])) {
                if (numero == units.unidades[i]) {
                    num = units.uniNum[i];
                    return document.getElementById("number").innerHTML = num;
                }

                num += units.uniNum[i];
                break;
            }
        }
    }

    document.getElementById("number").innerHTML = num;
}
