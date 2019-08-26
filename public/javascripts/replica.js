// Page A - INÍCIO
$( "#add-filhos" ).click(function() {
  $( "#familypageA" ).append('<br><br><div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="sondaughter" name = "client[sondaughter]" class="form-control" id="sondaughter" placeholder="Filho/a"  required="required"></div><br><div class="classa"><input type="fullname" name = "client[birthday]" class="form-control" id="birthday" placeholder="Data de Nascimento"  required="required"></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[passport1]" class="form-control" id="passport1" placeholder="Passaporte"  required="required"></div><br><div class="classa"><input type="fullname" name = "client[passportvalidation2]" class="form-control" id="passportvalidation2" placeholder="Validade Passaporte"  required="required"></div><br></div></div></div>');
});

$( "#add-companion" ).click(function(){
  $( "#acompanhantespageA").append('<div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[fullname1]" class="form-control" id="fullname" placeholder="Nome Completo"  required="required"></div><br><div class="classa"><input type="fullname" name = "client[email3]" class="form-control" id="email3" placeholder="Email"  required="required"></div><br><div class="classa"><input type="fullname" name = "client[cellph2]" class="form-control" id="cellph2" placeholder="Celular"  required="required"></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[birthday1]" class="form-control" id="birthday1" placeholder="Data de Nascimento"  required="required"></div><br><div class="classa"><input type="fullname" name = "client[passport3]" class="form-control" id="passport3" placeholder="Passaporte"  required="required"></div><br><div class="classa"><input type="fullname" name = "client[passportvalidation3]" class="form-control" id="passportvalidation3" placeholder="Validade Passaporte"  required="required"></div><br></div></div></div>');

});
// Page A - FIM


// page c - início
var planned_day = 2;
$( ".add_dias" ).click(function() {
  $( ".tabela_roteiro" ).append( '<tr><th><h2 >Dia '+planned_day+'</h2></th><th><input type="text" name="budget[freeField]" placeholder="Campo livre" class="form-control"></th><th><input type="text" name="budget[tips]" placeholder="Dicas" class="form-control"></th></tr>' );
  planned_day ++;
});

// $( "#add-campo-acompanhantes" ).click(function() {
  //   $( "#name_acomp" ).append( '<input class="form-control" type="text" name="budget[companion][name]" placeholder="Nome do acompanhante">' );
  //   $( "#age_acomp" ).append( '<select class="form-control" name="budget[companion][age]"><option selected>Faixa etária do acompanhante</option><option>Adulto</option><option>CHD</option><option>INF</option></select>' );
  // });

var num = 2;
var day = 1;
$('#add_country').on('click', function() {
  $("#button_space").append('<div id="in_country_days'+num+'" class="testeReplicaBox"><div class="days_input"><input placeholder="Nome do país" class="form-control" name="budget[country][]"></input></div>   <div class="days_input"><input placeholder="Aeroporto de ída" class="form-control" name="budget[airportGo][]"></input><input placeholder="Aeroporto de chegada" class="form-control" name="budget[airportReturn][]"></input></div>   <div class="days_input"><input placeholder="data de ída" class="form-control" name="budget[goDate][]"></input><input placeholder="data de chegada" class="form-control" name="budget[returnDate][]"></input></div>   <div class="days_input"><input placeholder="Nome da cidade" class="form-control" name="budget[cities][]"></input></div>   </div>');
  day = num;
  num++;
  $(".testeReplicaBox").removeClass("Selected");
  $(`#in_country_days${day}`).addClass("Selected");ss
});

$("#button_day_original").on("click", function(){
  var newDia = '<div class="days_input"><input placeholder="Nova cidade" class="form-control" name="budget[cities][]"></input></div>';
  $(`#in_country_days${day}`).append(newDia);
});

$('#increasing').on('click', function() {
  day--;
  $(".testeReplicaBox").removeClass("Selected");
  $(`#in_country_days${day}`).addClass("Selected");
});

$('#decreasing').on('click', function() {
  day++;
  $(".testeReplicaBox").removeClass("Selected");
  $(`#in_country_days${day}`).addClass("Selected");
});

$('.move').on('click', function() {
});

// page c - fim

// Page D - inicio
var numVoo = 2;

$( "#add-voo" ).click(function() {
  $("#PageD_Col1").append('<div class="PageDColLeft"><label> Passageiros </label><br><br><input class="date start-date" placeholder="Responsável" value="{{budget.file.responsibleTravel}}"><br><br><input class="date start-date" placeholder="Acompanhante" ><br><br></div>');
  $("#PageD_Col2").append('<div class="PageDColMidle"><label> Voo '+numVoo+'</label><br><br><input type="text" placeholder="Origem" name="flight[from]" class="date start-date"/><i class="fa fa-plane"></i><input type="text" placeholder="Destino" name="flight[destination]" class="date start-date"/><br><br><input type="date" placeholder="dd/mm/aa" name="flight[dateFrom]" class="date start-date"/><i class="fa fa-calendar"></i><input type="date" placeholder="dd/mm/aa" name="flight[dateDestination]" class="date start-date"/><br><br></div>');
  $("#PageD_Col3").append('<div class="PageDColRight"><label> Valores '+numVoo+'</label><br><br>Adulto:<input name="flight[tariffValueAdult]" type="text" id="num1" onblur="calcular1()" placeholder="Tarifa" class="valor"/><i class="fa fa-money"></i><input name="flight[taxValueAdult]" type="text" id="num2" onblur="calcular1()" placeholder="Tx Embarque" class="valor"/><i class="fa fa-money"></i><input name="flight[ravValueAdult]" type="text" id="num3" onblur="calcular1()" placeholder="Valor RAV" class="valor"/><span>&#61;</span><input name="flight[totalValueAdult]" type="text" id="result1" onblur="calcular1()" placeholder="Total" class="valor"/><span id="result"></span><br><br>CHD  :<input name="flight[tariffValueCHD]" type="text" id="num4" onblur="calcular2()" placeholder="Tarifa" class="valor"/><i class="fa fa-money"></i><input name="flight[taxValueCHD]" type="text" id="num5" onblur="calcular2()" placeholder="Tx Embarque" class="valor"/><i class="fa fa-money"></i><input name="flight[ravValueCHD]" type="text" id="num6" onblur="calcular2()" placeholder="Valor RAV" class="valor"/><span>&#61;</span><input name="flight[totalValueCHD]" type="text" id="result2" onblur="calcular2()" placeholder="Total" class="valor"/><span id="result"></span><br><br>INF   :<input name="flight[tariffValueInf]" type="text" id="num7" onblur="calcular3()" placeholder="Tarifa" class="valor"/><i class="fa fa-money"></i><input name="flight[taxValueInf]" type="text" id="num8" onblur="calcular3()" placeholder="Tx Embarque" class="valor"/><i class="fa fa-money"></i><input name="flight[ravValueInf]" type="text" id="num9" onblur="calcular3()" placeholder="Valor RAV" class="valor"/><span>&#61;</span><input name="flight[totalValueInf]" type="text" id="result3" onblur="calcular3()" placeholder="Total" class="valor"/><span id="result"></span><br><br>Total:<i class="fa fa-group" style="font-size:20px;color:grey"></i><input name="flight[finalValueInf]" type="text" id="result4" onblur="calcular4()" placeholder="Total" class="valor"/><br></div>');
  numVoo++;
});

// Page D - fim


// page E - INICIO
var numhotel = 2;
var numcity = 2;
$("#add-hotel").click(function() {
  $("#landing-hotel-col1").append('<div class="box_hotel_left"><div id="companion_camp"></div><br><div class="classa"><input class="form-control" placeholder="Cidade '+numcity+'" name="hotel[city]"></div><br><br><br><br><div class="classa"><input class="form-control" placeholder="Hotel 1" name="hotel[hotel1]"></div><br><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt1]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total1]"></div><br></div>');
  $("#landing-hotel-col2").append('<div class="box_hotel_midle"><div id="companion_camp"><label> Passageiros </label><br><input class="form-check-input" type="checkbox"><input placeholder="Responsável" value="{{budget.file.responsibleTravel}}"><br><br><input class="form-check-input" type="checkbox"><input placeholder="Acompanhante"></div><br><div class="classa"><select required="required" placeholder="Selecione" class="form-control" name=hotel[food]><option style="display:none">Regime de Alimentação</option><option>Café</option><option>Meia pensão</option><option>All inclusive</option><option>Outros</option></select></div><br><br><br><br><div class="classa"><input class="form-control" placeholder="Hotel 2" name="hotel[hotel2]"></div><br><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt2]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total2]"></div><br></div>');
  $("#landing-hotel-col3").append('<div class="box_hotel_right"><div id="companion_camp"></div><br><div class="classa"><select required="required" class="form-control" name="hotel[cancellationPeriod]"><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div><br><br><br><br><div class="classa"><input class="form-control" placeholder="Hotel 3" name="hotel[hotel3]"></div><br><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt3]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total3]"></div><br></div>');
  numcity++;
  numhotel++;
});
// page E - FIM


// Page F - INÍCIO
var pageFNumCar = 2;
var pageFNumTranslado = 2;
// '+pageFNum+'
$("#add_translado").click(function(){
  console.log('olha o translado');
  $("#PageF_Col2").append('<div class="dinamic_spec"><div><label> Translado '+pageFNumTranslado+'</label><br><input name="car[from]" type="text" placeholder="De" class="date start-date"/><i class="fa fa-plane"></i><input name="car[to]" type="text" placeholder="Para" class="date start-date"/><br><br><input name="car[dateFrom]" type="date" placeholder="dd/mm/aa" class="date start-date"/><i class="fa fa-calendar"></i><input name="car[timeFrom]" type="text" placeholder="Horário" class="date start-date"/><br><br><input name="car[dateTo]" type="date" placeholder="dd/mm/aa" class="date start-date"/><i class="fa fa-calendar"></i><input name="car[timeTo]" type="text" placeholder="Horário" class="date start-date"/></div><label>Informações</label><br><div class="container rowclass classF-input"><div class="row rowclass"><div class="col-sm rowclass"><div class="classa rowclass col-lg-11"><input name="car[valueADT]" class="form-control" placeholder="Val ADT"></div></div><div class="col-sm rowclass"><div class="classa rowclass col-lg-11"><input name="car[valueCHD]" class="form-control" placeholder="Val CHD"></div></div><div class="col-sm rowclass"><div class="classa rowclass col-lg-11"><input name="car[valueINF]" class="form-control" placeholder="Val INF"></div><br></div><div class="col-sm rowclass"><input name="car[totalTranslado]" class="form-control" placeholder="Val Total"></div></div></div></div>');
  pageFNumTranslado++;
});
$("#add_car").click(function(){
  $("#PageF_Col3").append('<div class="dinamic_spec"><br><br><label> Carros '+pageFNumCar+' </label><br><div class="classa"><input class="form-control" placeholder="Retirada" name="car[withdrawal]"></div><br><div class="classa"><input class="form-control" placeholder="Outros" name="car[others]"></div><br><div class="classa"><input class="form-control" placeholder="Entrega" name="car[delivery]"></div><br><div class="classa"><input class="form-control" placeholder="Valor carro '+pageFNumCar+'" name="car[totalCar]"></div><br><div class="classa"><input class="form-control" placeholder="Cidade" name="car[city]"></div><br><div class="classa"><input class="form-control" placeholder="Tipo" name="car[typeCar]"></div><br><div class="classa"><input class="form-control" placeholder="Transmissão" name="car[shift]"></div><br><div class="classa"><input class="form-control" placeholder="Seguros" name="car[safe]"></div><br></div>');
  pageFNumCar++;
});
// Page F - FIM

// Page G - INÍCIO
var numSeguro = 2;
var numTicket = 2;
var numOutros = 2;

$("#add_seguros").click(function() {// Modelo da função de replicar
  $("#landing-seguro-col1").append('<div class="boxLeftPageG"><div class="form-group"><label id="titleG" for="exampleInputPassword1">Seguro '+numSeguro+':</label><input name="safe[insuranceName]" type="text" placeholder= "Qual seguro será utilizado?" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[insuranceADT]" type="text" placeholder= "Preço por adulto" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[insuranceCHD]" type="text" placeholder= "Preço por criança" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[insuranceINF]" type="text" placeholder= "Preço por infatos" required="required" class="form-control"></div></div>');
  $("#landing-seguro-col2").append('<div class="boxRightPageG"><div class="form-group"><label for="exampleInputPassword1">Nome do responsável:</label><input type="text" placeholder= "" required="required" class="form-control"></div><label for="exampleInputPassword1">Selecione os acompanhantes</label><div class="form-check"><input class="form-check-input" type="checkbox"   id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">Acompanhante 1</label></div><div class="form-group col-md-3 valor"><label class="value1" for="exampleInputPassword1">Valor total de seguro:</label><input name="safe[insuranceTOT]" type="text" class="form-control value1" placeholder="Valor (R$)"></div></div>');
  numSeguro++;
});

$("#add_ticket").click(function() {// Modelo da função de replicar
  $("#landing-ticket-col1").append('<div class="boxLeftPageG"><div class="form-group"><label id="titleG" for="exampleInputPassword1">Tickets/Ingressos '+numTicket+':</label><input name="safe[ticketsName]" type="text" placeholder= "" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[ticketsADT]" type="text" placeholder= "Preço por adulto" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[ticketsCHD]" type="text" placeholder= "Preço por criança" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[ticketsINF]" type="text" placeholder= "Preço por infatos" required="required" class="form-control"></div></div>');
  $("#landing-ticket-col2").append('<div class="boxRightPageG"><div class="form-group"><label for="exampleInputPassword1">Nome do responsável:</label><input type="text" placeholder= "" required="required" class="form-control"></div><label for="exampleInputPassword1">Selecione os acompanhantes</label><div class="form-check"><input class="form-check-input" type="checkbox"   id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">Acompanhante 1</label></div><div class="form-group col-md-3 valor"><label class="value1" for="exampleInputPassword1">Valor total de Ingressos:</label><input name="safe[ticketsTOT]" type="text" class="form-control value1" placeholder="Valor (R$)"></div></div>');
  numTicket++;
});

$("#add_outros").click(function() {// Modelo da função de replicar
  $("#landing-outros-col1").append('<div class="boxLeftPageG"><div class="form-group"><label id="titleG" for="exampleInputPassword1">Outros '+numOutros+':</label><input name="safe[otherName]" type="text" placeholder= "" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[otherADT]" type="text" placeholder= "Preço por adulto" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[otherCHD]" type="text" placeholder= "Preço por criança" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[otherINF]" type="text" placeholder= "Preço por infatos" required="required" class="form-control"></div></div>');
  $("#landing-outros-col2").append('<div class="boxRightPageG"><div class="form-group"><label for="exampleInputPassword1">Nome do responsável:</label><input type="text" placeholder= "" required="required" class="form-control"></div><label for="exampleInputPassword1">Selecione os acompanhantes</label><div class="form-check"><input class="form-check-input" type="checkbox" id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">Acompanhante 1 </label></div><div class="form-group col-md-3 valor"><label class="value1" for="exampleInputPassword1">Valor total de outros:</label><input name="safe[otherTOT]" type="text" class="form-control value1" placeholder="Valor (R$)"></div></div>');
  numOutros++;
});

$("#add_outros").click(function() {
  $("#add_outros1").append('<div class="form-group"><label id="titleG" for="exampleInputPassword1">Outros:</label><input name="safe[otherName]" type="text" placeholder= "" required="required" class="form-control"></di<div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[otherADT]" type="text" placeholder= "Preço por adulto" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[otherCHD]" type="text" placeholder= "Preço por criança" required="required" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[otherINF]" type="text" placeholder= "Preço por infatos" required="required" class="form-control"></div>');
});
// Page G - FIM
