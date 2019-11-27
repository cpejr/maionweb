var numTraslado = 1;
var savedNumTraslado = 1;
var numCar = 1;
var firstclick = 0;
var carsToReplica;
var trasladoToReplica;

// Lógica do traslado - início
$("#add-traslado").click(function(){
  if (firstclick == 0) {
    carsToReplica = parseInt(document.getElementById(`get1`).value);
    trasladoToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    savedNumTraslado = trasladoToReplica;
    numTraslado = savedNumTraslado;
    numCar = carsToReplica-1;
  }
  else {
    savedNumTraslado++;
    numTraslado = savedNumTraslado;
  }
  $("#landing_Traslado").append('<div class="boxPageF" id="box'+numTraslado+'"><div><h3> Traslado '+numTraslado+'</h3><br><input name="car[from]" type="text" placeholder="De" class="date start-date" /><i class="fa fa-car" aria-hidden="true"></i><input name="car[to]" type="text" placeholder="Para" class="date start-date" /><br><br><input name="car[dateFrom]" type="date" placeholder="dd/mm/aa" class="date start-date" /><i class="fa fa-calendar"></i><input name="car[timeFrom]" type="text" placeholder="Horário" class="date start-date" /><br><br><input name="car[timeFrom]" type="text" placeholder="N. de Pessoas" class="date start-date" /></div><h3>Informações/ Valores</h3><br><div class="container rowclass classF-input"><table class="rowclass autorow"><thead><tr><th colspan="2"><label>Valor por ADT</label></th><th colspan="2"><label>Valor por CHD</label></th><th colspan="2"><label>Valor por INF</label></th></tr></thead><tbody><tr><th colspan="2"><input name="car[valueADT]" onblur="calcTraslado()" value="0"  id="valueADT'+numTraslado+'" class="form-control" placeholder="ADT" ></th><th colspan="2"><input name="car[valueCHD]" onblur="calcTraslado()" value="0"  id="valueCHD'+numTraslado+'" class="form-control" placeholder="CHD" ></th><th colspan="2"><input name="car[valueINF]" onblur="calcTraslado()" value="0"  id="valueINF'+numTraslado+'" class="form-control" placeholder="INF" ></th></tr><tr><th colspan="2"><label>Número de ADTs</label></th><th colspan="2"><label>Número de CHDs</label></th><th colspan="2"><label>Número de INFs</label></th></tr><tr><th colspan="2"><input name="car[numADT]" onblur="calcTraslado()" value="0"  id="numADT'+numTraslado+'" class="form-control" placeholder="numADT" ></th><th colspan="2"><input name="car[numCHD]" onblur="calcTraslado()" value="0"  id="numCHD'+numTraslado+'" class="form-control" placeholder="numCHD" ></th><th colspan="2"><input name="car[numINF]" onblur="calcTraslado()" value="0"  id="numINF'+numTraslado+'" class="form-control" placeholder="numINF" ></th></tr><tr><th colspan="3"><br><div class="rowclass autorow"><select placeholder="Selecione" class="form-control" name=car[coinT] ><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></div></th><th colspan="3"><br><input name="car[totalTranslado]" onblur="calcTraslado()" value="0"  id="totalTranslado'+numTraslado+'" class="form-control" placeholder="Total" ></th></tr></tbody></table><br><div class="rowclass"><label>Apagar?</label><input type="radio" name="car[deletingCar] typeTraslado'+numTraslado+'" value="1" onclick="return confirm("Deseja mesmo excluir o traslado '+numTraslado+' ?")">Sim</input><input type="radio" name="car[deletingCar] typeTraslado'+numTraslado+'" value="0" checked>Não</input></div></div></div>');

  $(".boxPageF_Selected").removeClass("boxPageF_Selected");
  $(`#box${numTraslado}`).addClass("boxPageF_Selected");
});

$('#prev_traslado').on('click', function() {
  if (firstclick == 0) {
    carsToReplica = parseInt(document.getElementById(`get1`).value);
    trasladoToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    savedNumTraslado = trasladoToReplica-1;
    numCar = carsToReplica-1;
  }

  if (numTraslado > 1) {
    numTraslado--;

    $(".boxPageF_Selected").removeClass("boxPageF_Selected");
    $(`#box${numTraslado}`).addClass("boxPageF_Selected");
  }
});

$('#nxt_traslado').on('click', function() {
  if (firstclick == 0) {
    carsToReplica = parseInt(document.getElementById(`get1`).value);
    trasladoToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    savedNumTraslado = trasladoToReplica-1;
    numCar = carsToReplica-1;
  }

  if (numTraslado < savedNumTraslado) {
    numTraslado++;

    $(".boxPageF_Selected").removeClass("boxPageF_Selected");
    $(`#box${numTraslado}`).addClass("boxPageF_Selected");
  }

});
// Lógica do traslado - fim


// Lógica de carros - início
$("#add_car").click(function(){
  if (firstclick == 0) {
    carsToReplica = parseInt(document.getElementById(`get1`).value);
    trasladoToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    savedNumTraslado = trasladoToReplica-1;
    numCar = carsToReplica-1;
  }
  numCar++;
  $("#landing_car").append('<div class="boxCarsPageF"><br><br><h3> Carros '+numCar+' </h3><br><div class="classa"><input class="form-control" placeholder="Categoria" name="car[typeCar]" ></div><br><div class="classa"><input class="form-control" placeholder="Cidade de Retirada" name="car[withdrawal]" ></div><br><div class="classa"><input class="form-control" placeholder="Cidade de Devolução" name="car[delivery]" ></div><br><div class="classa"><input class="form-control" placeholder="Valor carro '+numCar+'" name="car[totalCar]" ></div><br><div class="classa"><input class="form-control" placeholder="Cidade" name="car[city]" ></div><br><div class="classa"><input class="form-control" placeholder="Características" name="car[shift]" ></div><br><div class="classa"><input class="form-control" placeholder="Seguros" name="car[safe]" ></div><br><div class="classa"><input class="form-control" placeholder="Outros" name="car[others]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=car[coinC] ><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></div><br><div class="rowclass"><label>Apagar?</label><input type="radio" name="car[deletingTraslado] type'+numCar+'" value="1" onclick="return confirm("Deseja mesmo excluir o traslado '+numCar+' ?")">Sim</input><input type="radio" name="car[deletingTraslado] type'+numCar+'" value="0" checked>Não</input></div></div>');
});
// Lógica de carros - fim
