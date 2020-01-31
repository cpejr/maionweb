var numhotel = 1;
var savednumhotel = 1;
var firstclick = 0;
var hotelsToReplica;
const sep = "'";

$("#add-hotel").click(function() {
  if (firstclick == 0) {
    hotelsToReplica = parseInt(document.getElementById(`get1`).value);
    firstclick++;

    savednumhotel = hotelsToReplica;
    numhotel = savednumhotel;
  }
  else {
    savednumhotel++;
    numhotel = savednumhotel;
  }
  $("#landing-hotel-col1").append('<div class="box_hotel_left box_hotel_left_selected" id="col-left'+numhotel+'"><div class="rowclass"><br><br><br><br><br><br><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType1]" ></div><br><div class="classa"><input class="form-control" placeholder="Hotel 1" name="hotel[hotel1]" ></div><br><div class="classa"><label>Número de pessoas</label><input class="form-control" placeholder="N. de Pessoas" name="hotel[qntd1]" value="0"></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category1]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food1] ><option style="display:none">Regime de Alimentação</option><option>Com Café da Manhã</option><option>Sem Café da Manhã</option><option>Pensão Completa</option><option>Outros</option></select></div><br><div class="classa"><label>Valor apto.</label><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt1]" id="vApto1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de diárias</label><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily1]" id="nDiarias1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de apartamentos</label><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt1]" id="nAptos1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Total Hotel 1</label><input class="form-control" placeholder="Total" name="hotel[total1]" id="vTotal1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod]" ><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div></div>');
  $("#landing-hotel-col2").append('<div class="box_hotel_midle box_hotel_midle_selected" id="col-middle'+numhotel+'"><div class="rowclass"><h1>Cidade '+numhotel+'</h1><div class="classa"><input class="form-control" placeholder="Cidade '+numhotel+'" name="hotel[city]" ></div><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType2]" ></div><br><div class="classa"><input class="form-control" placeholder="Hotel 2" name="hotel[hotel2]" ></div><br><div class="classa"><label>Número de pessoas</label><input class="form-control" placeholder="N. de Pessoas" name="hotel[qntd2]" value="0"></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category2]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food2] ><option style="display:none">Regime de Alimentação</option><option>Com Café da Manhã</option><option>Sem Café da Manhã</option><option>Pensão Completa</option><option>Outros</option></select></div><br><div class="classa"><label>Valor apto.</label><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt2]" id="vApto2'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de diárias</label><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily2]" id="nDiarias2'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de apartamentos</label><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt2]" id="nAptos2'+numhotel+'" onblur="vHoteis2()" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Total Hotel 2</label><input class="form-control" placeholder="Total" name="hotel[total2]" id="vTotal2'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod2]" ><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div><label>Moeda utilizada:</label><div id="companion_camp" ><select placeholder="Selecione" class="form-control" name=hotel[coin] ><option style="display:none">Selecione qual moeda:</option><option>$</option><option>R$</option><option>€</option></select></div><br><br><div class="rowclass"><label>Apagar?</label><input type="radio" name="hotel[deleting] type'+numhotel+'" value="1" onclick="return confirm('+sep+'Deseja mesmo excluir a cidade'+numhotel+'?'+sep+')">Sim</input><input type="radio" name="hotel[deleting] type'+numhotel+'" value="0" checked>Não</input></div></div></div>');
  $("#landing-hotel-col3").append('<div class="box_hotel_right box_hotel_right_selected" id="col-right'+numhotel+'"><div class="rowclass"><br><br><br><br><br><br><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType3]" ></div><br><div class="classa"><input class="form-control" placeholder="Hotel 3" name="hotel[hotel3]" ></div><br><div class="classa"><label>Número de pessoas</label><input class="form-control" placeholder="N. de Pessoas" name="hotel[qntd3]" value="0"></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category3]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food3] ><option style="display:none">Regime de Alimentação</option><option>Com Café da Manhã</option><option>Sem Café da Manhã</option><option>Pensão Completa</option><option>Outros</option></select></div><br><div class="classa"><label>Valor apto.</label><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt3]" id="vApto3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de diárias</label><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily3]" id="nDiarias3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de apartamentos</label><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt3]" id="nAptos3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Total Hotel 3</label><input class="form-control" placeholder="Total" name="hotel[total3]" id="vTotal3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod3]" ><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div></div>');

  $(".box_hotel_left_selected").removeClass("box_hotel_left_selected");
  $(`#col-left${numhotel}`).addClass("box_hotel_left_selected");
  $(".box_hotel_midle_selected").removeClass("box_hotel_midle_selected");
  $(`#col-middle${numhotel}`).addClass("box_hotel_midle_selected");
  $(".box_hotel_right_selected").removeClass("box_hotel_right_selected");
  $(`#col-right${numhotel}`).addClass("box_hotel_right_selected");
});

$('#prev_hotel').on('click', function() {
  if (firstclick == 0) {
    hotelsToReplica = parseInt(document.getElementById(`get1`).value);
    firstclick++;

    savednumhotel = hotelsToReplica;-1
  }

  if (numhotel > 1) {
    numhotel--;
    $(".box_hotel_left_selected").removeClass("box_hotel_left_selected");
    $(`#col-left${numhotel}`).addClass("box_hotel_left_selected");
    $(".box_hotel_midle_selected").removeClass("box_hotel_midle_selected");
    $(`#col-middle${numhotel}`).addClass("box_hotel_midle_selected");
    $(".box_hotel_right_selected").removeClass("box_hotel_right_selected");
    $(`#col-right${numhotel}`).addClass("box_hotel_right_selected");
  }
});

$('#nxt_hotel').on('click', function() {
  if (firstclick == 0) {
    hotelsToReplica = parseInt(document.getElementById(`get1`).value);
    firstclick++;

    savednumhotel = hotelsToReplica-1;
  }

  if (numhotel < savednumhotel) {
    numhotel++;
    $(".box_hotel_left_selected").removeClass("box_hotel_left_selected");
    $(`#col-left${numhotel}`).addClass("box_hotel_left_selected");
    $(".box_hotel_midle_selected").removeClass("box_hotel_midle_selected");
    $(`#col-middle${numhotel}`).addClass("box_hotel_midle_selected");
    $(".box_hotel_right_selected").removeClass("box_hotel_right_selected");
    $(`#col-right${numhotel}`).addClass("box_hotel_right_selected");
  }
});
