$( "#add-campo-acompanhantes" ).click(function() {
  $( "#name_acomp" ).append( '<input class="form-control" type="text" name="budget[companion][name]" placeholder="Nome do acompanhante">' );
  $( "#age_acomp" ).append( '<select class="form-control" name="budget[companion][age]"><option selected>Faixa etária do acompanhante</option><option>Adulto</option><option>CHD</option><option>INF</option></select>' );
});

$( ".add_dias" ).click(function() {
  $( ".tabela_roteiro" ).append( '<tr><th><h2 >Dia</h2></th><th><input type="text" name="" placeholder="Campo livre" class="form-control"></th><th><input type="text" name="" placeholder="Dicas" class="form-control"></th></tr>' );
});

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


// js de replica funcional - início
var num = 2;
var day = 1;

$('#add_country').on('click', function() {
  $("#button_space").append('<div id="in_country_days'+num+'" class="testeReplicaBox"><div class="days_input"><input placeholder="Nome do país" class="form-control" name="budget[location][country]"></input></div>   <div class="days_input"><input placeholder="Aeroporto de ída" class="form-control" name="budget[airportExit]"></input><input placeholder="Aeroporto de chegada" class="form-control" name="budget[airportArrival]"></input></div>   <div class="days_input"><input placeholder="data de ída" class="form-control" name="budget[shipmentDate]"></input><input placeholder="data de chegada" class="form-control" name="budget[returnDate]"></input></div>   <div class="days_input"><input placeholder="Nome da cidade" class="form-control" name="budget[location][cities]"></input></div>   </div>');
  day = num;
  num++;
  $(".testeReplicaBox").removeClass("Selected");
  $(`#in_country_days${day}`).addClass("Selected");ss
});

$("#button_day_original").on("click", function(){
  var newDia = '<div class="days_input"><input placeholder="Nova cidade" class="form-control" name="budget[location][cities]"></input></div>';
  $(`#in_country_days${day}`).append(newDia);
});

$('#increasing').on('click', function() {
  day--;
  console.log(day);
  $(".testeReplicaBox").removeClass("Selected");
  $(`#in_country_days${day}`).addClass("Selected");
});

$('#decreasing').on('click', function() {
  day++;
  console.log(day);
  $(".testeReplicaBox").removeClass("Selected");
  $(`#in_country_days${day}`).addClass("Selected");
});

$('.move').on('click', function() {
  console.log('ta pegando');
});
// js de replica funcional - fim
