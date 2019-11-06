var anumTraslado = 1;
var asavedNumTraslado = 1;
var afirstclick = 0;
var acarsToReplica;

var valueADT;
var valueCHD;
var valueINF;
var numADT;
var numCHD;
var numINF;
var totalTranslado;

// Lógica do traslado - início

$('#add-traslado').on('click', function() {
  if (afirstclick == 0) {
    atrasladoToReplica = parseInt(document.getElementById(`get2`).value);
    afirstclick++;

    asavedNumTraslado = atrasladoToReplica;
    anumTraslado = asavedNumTraslado;

  }
  else {
    asavedNumTraslado++;
    anumTraslado = asavedNumTraslado;
  }
});

$('#prev_traslado').on('click', function() {
  if (afirstclick == 0) {
    atrasladoToReplica = parseInt(document.getElementById(`get2`).value);
    afirstclick++;

    asavedNumTraslado = atrasladoToReplica-1;
  }
  if (anumTraslado > 1) {
    anumTraslado--;
  }
});

$('#nxt_traslado').on('click', function() {
  if (afirstclick == 0) {
    atrasladoToReplica = parseInt(document.getElementById(`get2`).value);
    afirstclick++;

    asavedNumTraslado = atrasladoToReplica-1;
  }
  if (anumTraslado < asavedNumTraslado) {
    anumTraslado++;
  }
});

function calcTraslado(){
  valueADT = parseInt(document.getElementById(`valueADT${anumTraslado}`).value);
  numADT = parseInt(document.getElementById(`numADT${anumTraslado}`).value);
  valueCHD = parseInt(document.getElementById(`valueCHD${anumTraslado}`).value);
  numCHD = parseInt(document.getElementById(`numCHD${anumTraslado}`).value);
  valueINF = parseInt(document.getElementById(`valueINF${anumTraslado}`).value);
  numINF = parseInt(document.getElementById(`numINF${anumTraslado}`).value);
  totalTranslado = (valueADT*numADT)+(valueCHD*numCHD)+(valueINF*numINF);
  document.getElementById(`totalTranslado${anumTraslado}`).value = totalTranslado;
}
