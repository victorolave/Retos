var dia;
var mes;
var año;
var meses;

var fechaNumeros = document.getElementById("Fecha");

var boton = document.getElementById("Calcular").addEventListener("click",convFecha,false);

function convFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var año = document.getElementById("año").value;

    for (let index = 1; index < meses.length; index++){
        if (mes == meses[index]){
            fechaNumeros.innerHTML = dia + " / " + index + " / " + año; 
        }
    }
    
}
function OnLoad() {
    mesSelect();
}

function mesSelect() {
  meses = ["Seleciona un mes","Enero", "Febrero", "Marzo","Abril","Mayo","Junio",
               "Julio","Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"];
            
  addOptions("mes", meses);
}

function addOptions(domElement, array) {
  var select = document.getElementsByName(domElement)[0];

  for (value in array) {
    var option = document.createElement("option");
    option.text = array[value];
    select.add(option);
  }
}
