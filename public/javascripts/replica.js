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
$( "#add-acompanhantes-voo" ).click(function() {
  $( "#add_acompanhantesvoo" ).append('<br>');
  $( "#add_acompanhantesvoo" ).append('<input class="form-check-input" type="checkbox">');
  $( "#add_acompanhantesvoo" ).append('<input placeholder="Acompanhante">');
  $( "#add_acompanhantesvoo" ).append('<br>');
});

$( "#add-voo" ).click(function() {
  $( "#add_voo" ).append('<br><br><br>');
  $( "#add_voo" ).append('<input class="form-check-input" type="checkbox">');
  $( "#add_voo").append('<input placeholder="Acompanhante">');
  $( "#add_voo" ).append('<br><br><br>');
  $( "#add_voo" ).append('<input type="text" placeholder="Origem" class="date start-date"/>');
  $( "#add_voo" ).append('<i class="fa fa-plane"></i>');
  $( "#add_voo" ).append('<input type="text" placeholder="Destino" class="date start-date"/><br><br>');
  $( "#add_voo" ).append('<input type="date" placeholder="dd/mm/aa" class="date start-date"/>');
  $( "#add_voo" ).append('<i class="fa fa-calendar"></i>');
  $( "#add_voo" ).append('   <input type="date" placeholder="dd/mm/aa" class="date start-date"/><br><br><br>');
  $( "#add_voo" ).append('Adulto: <input type="text" id="num1" onblur="calcular()" placeholder="Valor ida" class="valor"/><i class="fa fa-money"></i><input type="text" id="num2" onblur="calcular()" placeholder="Valor Volta" class="valor"/><span>&#61;</span><input type="text" id="result" onblur="calcular()" placeholder="Valor Total" class="valor"/><span id="result"></span><br><br>');
  $( "#add_voo" ).append('CHD :<input type="text" id="num1" onblur="calcular()" placeholder="Valor ida" class="valor"/>  <i class="fa fa-money"></i><input type="text" id="num2" onblur="calcular()" placeholder="Valor Volta" class="valor"/><span>&#61;</span><input type="text" id="result" onblur="calcular()" placeholder="Valor Total" class="valor"/><span id="result"></span><br><br>');
  $( "#add_voo" ).append('INF :<input type="text" id="num1" onblur="calcular()" placeholder="Valor ida" class="valor"/>  <i class="fa fa-money"></i><input type="text" id="num2" onblur="calcular()" placeholder="Valor Volta" class="valor"/><span>&#61;</span><input type="text" id="result" onblur="calcular()" placeholder="Valor Total" class="valor"/><span id="result"></span><br><br>');
});

// Page D - fim


// page E - INICIO
var numhotel = 2;
var numcity = 2;
$("#add-hotel").click(function() {
  $("#landing-hotel-col1").append('<div class="box_hotel_left"><div class="classa"><input class="form-control" placeholder="Cidade '+numcity+'" name="hotel[city]"></div><br><div class="classa"><select required="required" placeholder="Selecione" class="form-control" name=hotel[food]><option style="display:none">Selecione: Regime de Alimentação</option><option>Café</option><option>Meia pensão</option><option>All inclusive</option><option>Outros</option></select></div><br><div class="classa"><select required="required" class="form-control" name="hotel[cancellationPeriod]"><option style="display:none">Selecione: Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div><br><div class="classa"><input class="form-control" placeholder="Hotel '+numcity+'" name="hotel[hotel]"></div><br></div>');
  $("#landing-hotel-col2").append('<div class="box_hotel_right"><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total]"></div><br></div></div>');
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

// Page G - INIÍCIO
$("#").click(function() {// Modelo da função de replicar
  $("#").append('');
});
// Page G - FIM
