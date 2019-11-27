var numSeguro = 1;
var numTicket = 1;
var numOutros = 1;

var savedNumSeguro = 1;
var savedNumTicket = 1;
var savedNumOutros = 1;

var insurancefirstclick = 0;
var ticketfirstclick = 0;
var ouotrosfirstclick = 0;

var insuranceToReplica;
var ticketToReplica;
var outrosToReplica;

// lógica dos bloco de seguros - início
$("#add_seguros").click(function() {// Modelo da função de replicar
  if (insurancefirstclick == 0) {
    insuranceToReplica = parseInt(document.getElementById(`get1`).value);
    insurancefirstclick++;

    savedNumSeguro = insuranceToReplica;
    numSeguro = savedNumSeguro;
  }
  else {
    savedNumSeguro++;
    numSeguro = savedNumSeguro;
  }
  $("#landing-seguro-col1").append('<div class="boxPageG"><div class="" id="boxSafe'+numSeguro+'"><div class="autorow rowclass"><h1 id="titleG" for="exampleInputPassword1">Seguro '+numSeguro+':</h1></div><div class="form-group"><input name="safe[insuranceName]" type="text" placeholder= "Qual seguro será utilizado?" class="form-control"></div><div class="form-group"><input name="safe[insuranceCoverage]" type="text" placeholder= "Cobertura do seguro" class="form-control"></div><div class="rowclass autorow"><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por adulto</th><th colspan="1">Número de adultos</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[insuranceADT]" type="text" id="adt'+numSeguro+'val" onblur="calcSafe()" class="form-control" value="0"></th><th colspan="1"><input name="safe[SafenumADT]" type="text" id="adt'+numSeguro+'mult" onblur="calcSafe()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por criança</th><th colspan="1">Número de crianças</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[insuranceCHD]" type="text" id="chd'+numSeguro+'val" onblur="calcSafe()" class="form-control" value="0"></th><th colspan="1"><input name="safe[SafenumCHD]" type="text" id="chd'+numSeguro+'mult" onblur="calcSafe()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="8">Valor por bebê</th><th colspan="1">Número de bebês</th></tr></thead><tbody><tr><th colspan="8"><input name="safe[insuranceINF]" type="text" id="inf'+numSeguro+'val" onblur="calcSafe()" class="form-control" value="0"></th><th colspan="1"><input name="safe[SafenumINF]" type="text" id="inf'+numSeguro+'mult" onblur="calcSafe()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div></div><div class="rowclass"><table class="autorow"><thead><tr><th><label class="form-control--width autorow">Qual Moeda Utilizada:</label></th><th><label class="form-control--width autorow" for="exampleInputPassword1">Valor total de seguro:</label></th></tr></thead><tbody><tr><th><select placeholder="Selecione" class="form-control form-control--width" name=safe[insuranceCoin] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></th><th><input name="safe[insuranceTOT]" type="text" id="total'+numSeguro+'" onblur="calcSafe()" class="form-control form-control--width" placeholder="Valor" value="0"></th></tr></tbody></table></div></div></div><div class="rowclass"><label>Apagar?</label><input type="radio" name="safe[deletingSafes] typeTraslado'+numSeguro+'" value="1" onclick="return confirm("Deseja mesmo excluir o traslado '+numSeguro+' ?")">Sim</input><input type="radio" name="safe[deletingSafes] typeTraslado'+numSeguro+'" value="0" checked>Não</input></div><br><br>');

  $(".insurance_selected").removeClass("insurance_selected");
  $(`#boxSafe${numSeguro}`).addClass("insurance_selected");
});

$('#prev_seguro').on('click', function() {
  if (insurancefirstclick == 0) {
    insuranceToReplica = parseInt(document.getElementById(`get1`).value);
    insurancefirstclick++;

    savedNumSeguro = insuranceToReplica-1;
  }
  if(numSeguro > 1){
    numSeguro--;

    $(".insurance_selected").removeClass("insurance_selected");
    $(`#boxSafe${numSeguro}`).addClass("insurance_selected");
  }
});

$('#nxt_seguros').on('click', function() {
  if (insurancefirstclick == 0) {
    insuranceToReplica = parseInt(document.getElementById(`get1`).value);
    insurancefirstclick++;

    savedNumSeguro = insuranceToReplica-1;
  }
  if(numSeguro < savedNumSeguro){
    numSeguro++;

    $(".insurance_selected").removeClass("insurance_selected");
    $(`#boxSafe${numSeguro}`).addClass("insurance_selected");
  }
});

// lógica dos bloco de seguros - fim






// lógica dos bloco de tickets - início
$("#add_tickets").click(function() {// Modelo da função de replicar
  if (ticketfirstclick == 0) {
    ticketToReplica = parseInt(document.getElementById(`get2`).value);
    ticketfirstclick++;

    savedNumTicket = ticketToReplica;
    numTicket = savedNumTicket;
  }
  else {
    savedNumTicket++;
    numTicket = savedNumTicket;
  }
  $("#landing-ticket").append('<div class="boxPageG"><div class="" id="boxTicket'+numTicket+'"><div class="autorow rowclass"><h1 id="titleG" for="exampleInputPassword1">Ticket '+numTicket+':</h1></div><div class="form-group"><input name="safe[ticketsName]" type="text" placeholder= "Qual é o ticket a ser comprado?" class="form-control"></div><div class="rowclass autorow"><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por adulto</th><th colspan="1">Número de adultos</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[ticketsADT]" placeholder="Valor por adulto" type="text" id="adt'+numTicket+'valTicket" onblur="calcTicket()" class="form-control" value="0"></th><th colspan="1"><input name="safe[TicketnumADT]" placeholder="Número de adultos" type="text" id="adt'+numTicket+'multTicket" onblur="calcTicket()"class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por criança</th><th colspan="1">Número de crianças</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[ticketsCHD]" placeholder="Valor por criança" type="text" id="chd'+numTicket+'valTicket" onblur="calcTicket()" class="form-control" value="0"></th><th colspan="1"><input name="safe[TicketnumCHD]" placeholder="Número de crianças" type="text" id="chd'+numTicket+'multTicket" onblur="calcTicket()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="8">Valor por bebê</th><th colspan="1">Número de bebês</th></tr></thead><tbody><tr><th colspan="8"><input name="safe[ticketsINF]" placeholder="Valor por bebê" type="text" id="inf'+numTicket+'valTicket" onblur="calcTicket()" class="form-control" value="0"></th><th colspan="1"><input name="safe[TicketnumINF]" placeholder="Número de bebês" type="text" id="inf'+numTicket+'multTicket" onblur="calcTicket()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div></div><div class="rowclass"><table class="autorow"><thead><th><label class="form-control--width autorow">Qual Moeda Utilizada:</label></th><th><label class="form-control--width autorow" for="exampleInputPassword1">Valor total dos tickets:</label></th></tr></thead><tbody><tr><th><select placeholder="Selecione" class="form-control form-control--width" name=safe[ticketsCoin] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></th><th><input name="safe[ticketsTOT]" type="text" id="totalTicket'+numTicket+'" onblur="calcTicket()" class="form-control form-control--width" placeholder="Valor" value="0"></th></tr></tbody></table></div></div></div><div class="rowclass"><label>Apagar?</label><input type="radio" name="safe[deletingTickets] typeTraslado'+numTicket+'" value="1" onclick="return confirm("Deseja mesmo excluir o traslado '+numTicket+' ?")">Sim</input><input type="radio" name="safe[deletingTickets] typeTraslado'+numTicket+'" value="0" checked>Não</input></div><br><br>');

  $(".ticket_selected").removeClass("ticket_selected");
  $(`#boxTicket${numTicket}`).addClass("ticket_selected");
});

$('#prev_ticket').on('click', function() {
  if (ticketfirstclick == 0) {
    ticketToReplica = parseInt(document.getElementById(`get2`).value);
    ticketfirstclick++;

    savedNumTicket = ticketToReplica-1;
  }
  if(numTicket > 1){
    numTicket--;

    $(".ticket_selected").removeClass("ticket_selected");
    $(`#boxTicket${numTicket}`).addClass("ticket_selected");
  }
});

$('#nxt_ticket').on('click', function() {
  if (ticketfirstclick == 0) {
    ticketToReplica = parseInt(document.getElementById(`get2`).value);
    ticketfirstclick++;

    savedNumTicket = ticketToReplica-1;
  }
  if(numTicket < savedNumTicket){
    numTicket++;

    $(".ticket_selected").removeClass("ticket_selected");
    $(`#boxTicket${numTicket}`).addClass("ticket_selected");
  }
});
// lógica dos bloco de tickets - fim





// lógica dos bloco de outros - início
$("#add_others").click(function() {// Modelo da função de replicar
  if (ouotrosfirstclick == 0) {
    outrosToReplica = parseInt(document.getElementById(`get3`).value);
    ouotrosfirstclick++;

    savedNumOutros = outrosToReplica;
    numOutros = savedNumOutros;
  }
  else {
    savedNumOutros++;
    numOutros = savedNumOutros;
  }
  $("#landing-other").append('  <div class="boxPageG"><div class="" id="boxOther'+numOutros+'"><div class="autorow rowclass"><h1 id="titleG" for="exampleInputPassword1">Outro '+numOutros+':</h1></div><div class="form-group"><input name="safe[otherName]" type="text" placeholder= "Qual outro item deseja adicionar?" class="form-control"></div><div class="rowclass autorow"><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por adulto</th><th colspan="1">Número de adultos</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[otherADT]" placeholder="Valor por adulto" type="text" id="adt'+numOutros+'valOther" onblur="calcOther()" class="form-control" value="0"></th><th colspan="1"><input name="safe[OthernumADT]" placeholder="Número de adultos" type="text" id="adt'+numOutros+'multOther" onblur="calcOther()"class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por criança</th><th colspan="1">Número de crianças</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[otherCHD]" placeholder="Valor por criança" type="text" id="chd'+numOutros+'valOther" onblur="calcOther()" class="form-control" value="0"></th><th colspan="1"><input name="safe[OthernumCHD]" placeholder="Número de crianças" type="text" id="chd'+numOutros+'multOther" onblur="calcOther()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="8">Valor por bebê</th><th colspan="1">Número de bebês</th></tr></thead><tbody><tr><th colspan="8"><input name="safe[otherINF]" placeholder="Valor por bebê" type="text" id="inf'+numOutros+'valOther" onblur="calcOther()" class="form-control" value="0"></th><th colspan="1"><input name="safe[OthernumINF]" placeholder="Número de bebês" type="text" id="inf'+numOutros+'multOther" onblur="calcOther()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div></div><div class="rowclass"><table class="autorow"><thead><tr><th><label class="form-control--width autorow">Qual Moeda Utilizada:</label></th><th><label class="form-control--width autorow" for="exampleInputPassword1">Valor total:</label></th></tr></thead><tbody><tr><th><select placeholder="Selecione" class="form-control form-control--width" name=safe[otherCoin] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></th><th><input name="safe[otherTOT]" type="text" id="totalOther'+numOutros+'" onblur="calcOther()" class="form-control form-control--width" placeholder="Valor" value="0"></th></tr></tbody></table></div></div></div><div class="rowclass"><label>Apagar?</label><input type="radio" name="safe[deletingOthers] typeTraslado'+numOutros+'" value="1" onclick="return confirm("Deseja mesmo excluir o traslado '+numOutros+' ?")">Sim</input><input type="radio" name="safe[deletingOthers] typeTraslado'+numOutros+'" value="0" checked>Não</input></div><br><br>');

  $(".outros_selected").removeClass("outros_selected");
  $(`#boxOther${numOutros}`).addClass("outros_selected");
});

$('#prev_other').on('click', function() {
  if (ouotrosfirstclick == 0) {
    outrosToReplica = parseInt(document.getElementById(`get3`).value);
    ouotrosfirstclick++;

    savedNumOutros = outrosToReplica - 1;
  }
  if(numOutros > 1){
    numOutros--;

    $(".outros_selected").removeClass("outros_selected");
    $(`#boxOther${numOutros}`).addClass("outros_selected");
  }
});

$('#nxt_other').on('click', function() {
  if (ouotrosfirstclick == 0) {
    outrosToReplica = parseInt(document.getElementById(`get3`).value);
    ouotrosfirstclick++;

    savedNumOutros = outrosToReplica - 1;
  }
  if(numOutros < savedNumOutros){
    numOutros++;

    $(".outros_selected").removeClass("outros_selected");
    $(`#boxOther${numOutros}`).addClass("outros_selected");
  }
});
// lógica dos bloco de outros - fim
