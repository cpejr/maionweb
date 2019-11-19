// Page A - INÍCIO
$( "#add-filhos" ).click(function() {
  $( "#familypageA" ).append('<br><br><div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="sondaughter" name = "client[children]" class="form-control" id="sondaughter" placeholder="Filho/a"></div><br><div class="classa"><input type="text" name = "client[birthDateChildren]" class="form-control" id="birthday" placeholder="Data de Nascimento"  onblur="addDashesNascimento(this)" maxlength="10" ></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[childrenPassport]" class="form-control" id="passport1" placeholder="Passaporte"></div><br><div class="classa"><input type="fullname" name = "client[childrenPassportValidation]" class="form-control" id="passportvalidation2"  onblur="addDashesNascimento(this)" maxlength="10" placeholder="Validade Passaporte"></div><br></div></div></div>');
});


$( "#add-companion" ).click(function(){
  $( "#acompanhantespageA").append('<div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[companionFullname]" class="form-control" id="fullname" placeholder="Nome Completo"></div><br><div class="classa"><input type="fullname"  name = "client[companionEmail]" class="form-control" id="email3" placeholder="Email"></div><br><div class="classa"><input type="fullname" name = "client[companionCellphone]" class="form-control" id="cellph2" placeholder="Celular" onblur="addDashesCel(this)" maxlength="11" onkeypress="return //d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));"></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[birthDateCompanion]" class="form-control" id="birthday1" placeholder="Data de Nascimento" onblur="addDashesNascimento(this)" maxlength="8"  onkeypress="return / / d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" ></div><br><div class="classa"><input type="fullname" name = "client[passport3]" class="form-control" id="passport3" placeholder="Passaporte"></div><br><div class="classa"><input type="fullname" name = "client[companionPassportValidation]" class="form-control" id="passportvalidation3" placeholder="Validade Passaporte"></div><br></div></div></div>');

});
// Page A - FIM


// page c - início
var planned_day = 2;
$( "#add_dias" ).click(function() {
  $( "#testedacamila" ).append( '<div class="dinamic_spec_pagec"><h1>Roteiro:</h1><div class="container rowclass"><div class="row rowclass marginPageC"><div class="col-sm-auto-pageC rowclass">Dia'+planned_day+' </div><div class="col-sm-auto-pageC rowclass"><input type="date" placeholder="dd/mm/aa" name="budget[planDate]" class= "form-control classCinput2"></div><div class="col-sm-auto-pageC rowclass"><input placeholder="Cidade" name="budget[planCity]" class= "form-control classCinput2"></div><div class="col-sm-auto-pageC rowclass"><input placeholder="País" name="budget[planCountry]" class="form-control classCinput2"></div></div><br><div class="form-group "><textarea class="form-control" name="budget[planFreeField]" placeholder="Campo Livre" rows="3"></textarea></div></div></div>' );
  planned_day ++;
});

// page c - fim

// Page D - inicio
var numVoo = 2;

var num = 2;
var day = 1;

// Primera classe
var adtNum1_FirstClass = 1;
var adtNum2_FirstClass = 2;
var adtNum3_FirstClass = 3;
var adtRes_FirstClass = 1;

var chdNum1_FirstClass = 1;
var chdNum2_FirstClass = 2;
var chdNum3_FirstClass = 3;
var chdRes_FirstClass = 1;

var infNum1_FirstClass = 1;
var infNum2_FirstClass = 2;
var infNum3_FirstClass = 3;
var infRes_FirstClass = 1;

// Executivo
var adtNum1_Executive = 1;
var adtNum2_Executive = 2;
var adtNum3_Executive = 3;
var adtRes_Executive = 1;

var chdNum1_Executive = 1;
var chdNum2_Executive = 2;
var chdNum3_Executive = 3;
var chdRes_Executive = 1;

var infNum1_Executive = 1;
var infNum2_Executive = 2;
var infNum3_Executive = 3;
var infRes_Executive = 1;

// Economico
var adtNum1_Economic = 1;
var adtNum2_Economic = 2;
var adtNum3_Economic = 3;
var adtRes_Economic = 1;

var chdNum1_Economic = 1;
var chdNum2_Economic = 2;
var chdNum3_Economic = 3;
var chdRes_Economic = 1;

var infNum1_Economic = 1;
var infNum2_Economic = 2;
var infNum3_Economic = 3;
var infRes_Economic = 1;

//Primeira classe saved ------------------------------------
var savedadtNum1_FirstClass=1;
var savedadtNum2_FirstClass=2;
var savedadtNum3_FirstClass=3;
var savedadtRes_FirstClass=1;

var savedchdNum1_FirstClass=1;
var savedchdNum2_FirstClass=2;
var savedchdNum3_FirstClass=3;
var savedchdRes_FirstClass=1;

var savedinfNum1_FirstClass=1;
var savedinfNum2_FirstClass=2;
var savedinfNum3_FirstClass=3;
var savedinfRes_FirstClass=1;

// Executivo saved
var savedadtNum1_Executive=1;
var savedadtNum2_Executive=2;
var savedadtNum3_Executive=3;
var savedadtRes_Executive=1;

var savedchdNum1_Executive=1;
var savedchdNum2_Executive=2;
var savedchdNum3_Executive=3;
var savedchdRes_Executive=1;

var savedinfNum1_Executive=1;
var savedinfNum2_Executive=2;
var savedinfNum3_Executive=3;
var savedinfRes_Executive=1;

// Econômico saved
var savedadtNum1_Economic=1;
var savedadtNum2_Economic=2;
var savedadtNum3_Economic=3;
var savedadtRes_Economic=1;

var savedchdNum1_Economic=1;
var savedchdNum2_Economic=2;
var savedchdNum3_Economic=3;
var savedchdRes_Economic=1;

var savedinfNum1_Economic=1;
var savedinfNum2_Economic=2;
var savedinfNum3_Economic=3;
var savedinfRes_Economic=1;

$('#add_country').on('click', function() {

  //Primeira classe saved
  savedadtNum1_FirstClass = savedadtNum1_FirstClass + 3;
  savedadtNum2_FirstClass = savedadtNum2_FirstClass + 3;
  savedadtNum3_FirstClass = savedadtNum3_FirstClass + 3;
  savedadtRes_FirstClass++;

  savedchdNum1_FirstClass = savedchdNum1_FirstClass + 3;
  savedchdNum2_FirstClass = savedchdNum2_FirstClass + 3;
  savedchdNum3_FirstClass = savedchdNum3_FirstClass + 3;
  savedchdRes_FirstClass++;

  savedinfNum1_FirstClass = savedinfNum1_FirstClass + 3;
  savedinfNum2_FirstClass = savedinfNum2_FirstClass + 3;
  savedinfNum3_FirstClass = savedinfNum3_FirstClass + 3;
  savedinfRes_FirstClass++;

  // Executivo saved
  savedadtNum1_Executive = savedadtNum1_Executive + 3;
  savedadtNum2_Executive = savedadtNum2_Executive + 3;
  savedadtNum3_Executive = savedadtNum3_Executive + 3;
  savedadtRes_Executive++;

  savedchdNum1_Executive = savedchdNum1_Executive + 3;
  savedchdNum2_Executive = savedchdNum2_Executive + 3;
  savedchdNum3_Executive = savedchdNum3_Executive + 3;
  savedchdRes_Executive++;

  savedinfNum1_Executive = savedinfNum1_Executive + 3;
  savedinfNum2_Executive = savedinfNum2_Executive + 3;
  savedinfNum3_Executive = savedinfNum3_Executive + 3;
  savedinfRes_Executive++;

  // Econômico saved
  savedadtNum1_Economic = savedadtNum1_Economic + 3;
  savedadtNum2_Economic = savedadtNum2_Economic + 3;
  savedadtNum3_Economic = savedadtNum3_Economic + 3;
  savedadtRes_Economic++;

  savedchdNum1_Economic = savedchdNum1_Economic + 3;
  savedchdNum2_Economic = savedchdNum2_Economic + 3;
  savedchdNum3_Economic = savedchdNum3_Economic + 3;
  savedchdRes_Economic++;

  savedinfNum1_Economic = savedinfNum1_Economic + 3;
  savedinfNum2_Economic = savedinfNum2_Economic + 3;
  savedinfNum3_Economic = savedinfNum3_Economic + 3;
  savedinfRes_Economic++;

  //Primeira classe
  adtNum1_FirstClass = savedadtNum1_FirstClass;
  adtNum2_FirstClass = savedadtNum2_FirstClass;
  adtNum3_FirstClass = savedadtNum3_FirstClass;
  adtRes_FirstClass = savedadtRes_FirstClass;

  chdNum1_FirstClass = savedchdNum1_FirstClass;
  chdNum2_FirstClass = savedchdNum2_FirstClass;
  chdNum3_FirstClass = savedchdNum3_FirstClass;
  chdRes_FirstClass = savedchdRes_FirstClass;

  infNum1_FirstClass = savedinfNum1_FirstClass;
  infNum2_FirstClass = savedinfNum2_FirstClass;
  infNum3_FirstClass = savedinfNum3_FirstClass;
  infRes_FirstClass = savedinfRes_FirstClass;

  // Executivo
  adtNum1_Executive = savedadtNum1_Executive;
  adtNum2_Executive = savedadtNum2_Executive;
  adtNum3_Executive = savedadtNum3_Executive;
  adtRes_Executive = savedadtRes_Executive;

  chdNum1_Executive = savedchdNum1_Executive;
  chdNum2_Executive = savedchdNum2_Executive;
  chdNum3_Executive = savedchdNum3_Executive;
  chdRes_Executive = savedchdRes_Executive;

  infNum1_Executive = savedinfNum1_Executive;
  infNum2_Executive = savedinfNum2_Executive;
  infNum3_Executive = savedinfNum3_Executive;
  infRes_Executive = savedinfRes_Executive;

  // Econômic
  adtNum1_Economic = savedadtNum1_Economic;
  adtNum2_Economic = savedadtNum2_Economic;
  adtNum3_Economic = savedadtNum3_Economic;
  adtRes_Economic = savedadtRes_Economic;

  chdNum1_Economic = savedchdNum1_Economic;
  chdNum2_Economic = savedchdNum2_Economic;
  chdNum3_Economic = savedchdNum3_Economic;
  chdRes_Economic = savedchdRes_Economic;

  infNum1_Economic = savedinfNum1_Economic;
  infNum2_Economic = savedinfNum2_Economic;
  infNum3_Economic = savedinfNum3_Economic;
  infRes_Economic = savedinfRes_Economic;



  // $.post('/registred/Replica', {totalRes, infRes}, das => {
  //   result = das;
  // });

  $("#button_space").append('<div class="dinamic_spec"><h1>Voo '+numVoo+'</h1><div class="header Selected table-responsive" id=flight'+numVoo+'><table class="table table-striped table-hover" id="in_country_days'+numVoo+'"><thead><tr><th colspan="1">Voo</th><th colspan="1">Data</th><th colspan="4">De</th><th colspan="4">Para</th><th colspan="2">Saída</th><th colspan="2">Chegada</th></tr></thead><tbody ><tr><th colspan="1"><input type="text" placeholder="Num voo" name="flight[flightNum]" class="form-control"/></th><th colspan="1"><input type="text" placeholder="dd/mm/aaaa" name="flight[dateFlight]" class="form-control"/></th><th colspan="4"><input type="text" placeholder="De" name="flight[from]" class="form-control"/></th><th colspan="4"><input type="text" placeholder="Para" name="flight[destination]" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeOut]" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeIn]" class="form-control"/></th><input type="number" name="flight[escalas]" value="0" class="invDiv"></tr></tbody></table><div class="pageDAuto"><table class="pageDAuto"><tr><th colspan="21"><h4>Primeira Classe</h4></th></tr><tr><th colspan="1"></th><th colspan="4">Tarifa</th><th colspan="1"></th><th colspan="4">Embarque</th><th colspan="1"></th><th colspan="4">Emissão</th><th colspan="1"></th><th colspan="4">Total </th><th colspan="1">Número de passagens</th></tr><tr><th colspan="1"><h5>Adulto</h5></th><th colspan="4"><input name="flight[tariffValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" type="text" name="qty" id="adt'+adtNum1_FirstClass+'_FirstClass" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" type="text" name="qty" id="adt'+adtNum2_FirstClass+'_FirstClass" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" type="text" name="qty" id="adt'+adtNum3_FirstClass+'_FirstClass" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" input type="text" name="total" id="adtResult'+adtRes_FirstClass+'_FirstClass" placeholder="Total ADT" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numADT_FirstClass]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Criança</h5></th><th colspan="4"><input name="flight[tariffValueCHD_FirstClass]" onblur="calcularChd_FirstClass()" type="text" name="qty" id="chd'+chdNum1_FirstClass+'_FirstClass" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueCHD_FirstClass]" onblur="calcularChd_FirstClass)" type="text" name="qty" id="chd'+chdNum2_FirstClass+'_FirstClass" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueCHD_FirstClass]" onblur="calcularChd_FirstClass()" type="text" name="qty" id="chd'+chdNum3_FirstClass+'_FirstClass" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueCHD_FirstClass]" onblur="calcularChd_FirstClass()" input type="text" name="total" id="chdResult'+chdRes_FirstClass+'_FirstClass" placeholder="Total CHD" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numCHD_FirstClass]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Bebê</h5></th><th colspan="4"><input name="flight[tariffValueInf_FirstClass]" onblur="calcularInf_FirstClass()" type="text" name="qty" id="inf'+infNum1_FirstClass+'_FirstClass" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueInf_FirstClass]" onblur="calcularInf_FirstClass()" type="text" name="qty" id="inf'+infNum2_FirstClass+'_FirstClass" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueInf_FirstClass]" onblur="calcularInf_FirstClass()" type="text" name="qty" id="inf'+infNum3_FirstClass+'_FirstClass" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueInf_FirstClass]" onblur="calcularInf_FirstClass()" sinput type="text" name="total" id="infResult'+infRes_FirstClass+'_FirstClass" placeholder="Total INF" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numINF_FirstClass]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr></table><br><table class="pageDAuto"><tr><th colspan="21"><h4>Executivo</h4></th></tr><tr><th colspan="1"></th><th colspan="4">Tarifa</th><th colspan="1"></th><th colspan="4">Embarque</th><th colspan="1"></th><th colspan="4">Emissão</th><th colspan="1"></th><th colspan="4">Total</th><th colspan="1">Número de passagens</th></tr><tr><th colspan="1"><h5>Adulto</h5></th><th colspan="4"><input name="flight[tariffValueAdult_Executive]" onblur="calcularAdt_Executive()" type="text" name="qty" id="adt'+adtNum1_Executive+'_Executive" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueAdult_Executive]" onblur="calcularAdt_Executive()" type="text" name="qty" id="adt'+adtNum2_Executive+'_Executive" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueAdult_Executive]" onblur="calcularAdt_Executive()" type="text" name="qty" id="adt'+adtNum3_Executive+'_Executive" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueAdult_Executive]" onblur="calcularAdt_Executive()" input type="text" name="total" id="adtResult'+adtRes_Executive+'_Executive" placeholder="Total ADT" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numADT_Executive]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Criança</h5></th><th colspan="4"><input name="flight[tariffValueCHD_Executive]" onblur="calcularChd_Executive()" type="text" name="qty" id="chd'+chdNum1_Executive+'_Executive" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueCHD_Executive]" onblur="calcularChd_Executive()" type="text" name="qty" id="chd'+chdNum2_Executive+'_Executive" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueCHD_Executive]" onblur="calcularChd_Executive()" type="text" name="qty" id="chd'+chdNum3_Executive+'_Executive" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueCHD_Executive]" onblur="calcularChd_Executive()" input type="text" name="total" id="chdResult'+chdRes_Executive+'_Executive" placeholder="Total CHD" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numCHD_Executive]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Bebê</h5></th><th colspan="4"><input name="flight[tariffValueInf_Executive]" onblur="calcularInf_Executive()" type="text" name="qty" id="inf'+infNum1_Executive+'_Executive" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueInf_Executive]" onblur="calcularInf_Executive()" type="text" name="qty" id="inf'+infNum2_Executive+'_Executive" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueInf_Executive]" onblur="calcularInf_Executive()" type="text" name="qty" id="inf'+infNum3_Executive+'_Executive" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueInf_Executive]" onblur="calcularInf_Executive()" sinput type="text" name="total" id="infResult'+infRes_Executive+'_Executive" placeholder="Total INF" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numINF_Executive]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr></table><br><table class="pageDAuto"><tr><th colspan="21"><h4>Econômico</h4></th></tr><tr><th colspan="1"></th><th colspan="4">Tarifa</th><th colspan="1"></th><th colspan="4">Embarque</th><th colspan="1"></th><th colspan="4">Emissão</th><th colspan="1"></th><th colspan="4">Total</th><th colspan="1">Número de passagens</th></tr><tr><th colspan="1"><h5>Adulto</h5></th><th colspan="4"><input name="flight[tariffValueAdult_Economic]" onblur="calcularAdt_Economic()" type="text" name="qty" id="adt'+adtNum1_Economic+'_Economic" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueAdult_Economic]" onblur="calcularAdt_Economic()" type="text" name="qty" id="adt'+adtNum2_Economic+'_Economic" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueAdult_Economic]" onblur="calcularAdt_Economic()" type="text" name="qty" id="adt'+adtNum3_Economic+'_Economic" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueAdult_Economic]" onblur="calcularAdt_Economic()" input type="text" name="total" id="adtResult'+adtRes_Economic+'_Economic" placeholder="Total ADT" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numADT_Economic]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Criança</h5></th><th colspan="4"><input name="flight[tariffValueCHD_Economic]" onblur="calcularChd_Economic()" type="text" name="qty" id="chd'+chdNum1_Economic+'_Economic" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueCHD_Economic]" onblur="calcularChd_Economic()" type="text" name="qty" id="chd'+chdNum2_Economic+'_Economic" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueCHD_Economic]" onblur="calcularChd_Economic()" type="text" name="qty" id="chd'+chdNum3_Economic+'_Economic" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueCHD_Economic]" onblur="calcularChd_Economic()" input type="text" name="total" id="chdResult'+chdRes_Economic+'_Economic" placeholder="Total CHD" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numCHD_Economic]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Bebê</h5></th><th colspan="4"><input name="flight[tariffValueInf_Economic]" onblur="calcularInf_Economic()" type="text" name="qty" id="inf'+infNum1_Economic+'_Economic" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueInf_Economic]" onblur="calcularInf_Economic()" type="text" name="qty" id="inf'+infNum2_Economic+'_Economic" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueInf_Economic]" onblur="calcularInf_Economic()" type="text" name="qty" id="inf'+infNum3_Economic+'_Economic" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueInf_Economic]" onblur="calcularInf_Economic()" sinput type="text" name="total" id="infResult'+infRes_Economic+'_Economic" placeholder="Total INF" class="valor"/ value="0"></input></th><th colspan="1"><input name="flight[numINF_Economic]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr></table></div><select placeholder="Selecione" class="form-control" name=flight[coin] required><option style="display:none">Selecione qual moeda:</option><option>$</option><option>R$</option><option>€</option></select></div></div>');

  day = num;
  num++;
  numVoo++;
  console.log(adtNum1_Executive);
  console.log(chdNum2_Executive);
  console.log(infNum3_Executive);

  console.log(adtNum1_Economic);
  console.log(chdNum2_Economic);
  console.log(infNum3_Economic);
  $(".Selected").removeClass("Selected");
  $(`#flight${day}`).addClass("Selected");
});

$("#button_day_original").on("click", function(){
  var newDia = '<tr><th colspan="1"><input type="text" placeholder="Num voo" name="flight[flightNum]" class="form-control"/></th><th colspan="1"><input type="text" placeholder="dd/mm/aaaa" name="flight[dateFlight]" class="form-control"/></th><th colspan="4"><input type="text" placeholder="De" name="flight[from]" class="form-control"/></th><th colspan="4"><input type="text" placeholder="Para" name="flight[destination]" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeOut]" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeIn]" class="form-control"/><input type="number" name="flight[escalas]" value="1" class="invDiv"></th></tr>';
  $(`#in_country_days${day}`).append(newDia);
});

$('#decreasing').on('click', function() {
  if(day > 1){
    day--;

    $(".Selected").removeClass("Selected");
    $(`#flight${day}`).addClass("Selected");
  }
});

$('#increasing').on('click', function() {
  if(day < num-1){
    day++;

    $(".Selected").removeClass("Selected");
    $(`#flight${day}`).addClass("Selected");
  }
});

// Page D - fim


// page E - INICIO
var numhotel = 1;
var savednumhotel = 1;
$("#add-hotel").click(function() {
  savednumhotel++;
  numhotel = savednumhotel;
  $("#landing-hotel-col1").append('<div class="box_hotel_left box_hotel_left_selected" id="col-left'+numhotel+'"><div class="rowclass"><br><br><br><br><br><br><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType1]" ></div><br><div class="classa"><input class="form-control" placeholder="Hotel 1" name="hotel[hotel1]" ></div><br><div class="classa"><label>Número de pessoas</label><input class="form-control" placeholder="N. de Pessoas" name="hotel[qntd1]" value="0"></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category1]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food1] ><option style="display:none">Regime de Alimentação</option><option>Com Café da Manhã</option><option>Sem Café da Manhã</option><option>Pensão Completa</option><option>Outros</option></select></div><br><div class="classa"><label>Valor apto.</label><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt1]" id="vApto1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de diárias</label><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily1]" id="nDiarias1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de apartamentos</label><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt1]" id="nAptos1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Total Hotel 1</label><input class="form-control" placeholder="Total" name="hotel[total1]" id="vTotal1'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod]" ><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div></div>');
  $("#landing-hotel-col2").append('<div class="box_hotel_midle box_hotel_midle_selected" id="col-middle'+numhotel+'"><div class="rowclass"><h1>Cidade '+numhotel+'</h1><div class="classa"><input class="form-control" placeholder="Cidade '+numhotel+'" name="hotel[city]" ></div><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType2]" ></div><br><div class="classa"><input class="form-control" placeholder="Hotel 2" name="hotel[hotel2]" ></div><br><div class="classa"><label>Número de pessoas</label><input class="form-control" placeholder="N. de Pessoas" name="hotel[qntd2]" value="0"></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category2]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food2] ><option style="display:none">Regime de Alimentação</option><option>Com Café da Manhã</option><option>Sem Café da Manhã</option><option>Pensão Completa</option><option>Outros</option></select></div><br><div class="classa"><label>Valor apto.</label><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt2]" id="vApto2'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de diárias</label><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily2]" id="nDiarias2'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de apartamentos</label><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt2]" id="nAptos2'+numhotel+'" onblur="vHoteis2()" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Total Hotel 2</label><input class="form-control" placeholder="Total" name="hotel[total2]" id="vTotal2'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod2]" ><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div><label>Moeda utilizada:</label><div id="companion_camp" ><select placeholder="Selecione" class="form-control" name=hotel[coin] ><option style="display:none">Selecione qual moeda:</option><option>$</option><option>R$</option><option>€</option></select></div><br><br></div></div>');
  $("#landing-hotel-col3").append('<div class="box_hotel_right box_hotel_right_selected" id="col-right'+numhotel+'"><div class="rowclass"><br><br><br><br><br><br><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType3]" ></div><br><div class="classa"><input class="form-control" placeholder="Hotel 3" name="hotel[hotel3]" ></div><br><div class="classa"><label>Número de pessoas</label><input class="form-control" placeholder="N. de Pessoas" name="hotel[qntd3]" value="0"></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category3]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food3] ><option style="display:none">Regime de Alimentação</option><option>Com Café da Manhã</option><option>Sem Café da Manhã</option><option>Pensão Completa</option><option>Outros</option></select></div><br><div class="classa"><label>Valor apto.</label><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt3]" id="vApto3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de diárias</label><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily3]" id="nDiarias3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Número de apartamentos</label><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt3]" id="nAptos3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><label>Total Hotel 3</label><input class="form-control" placeholder="Total" name="hotel[total3]" id="vTotal3'+numhotel+'" onblur="calcHotel()" value="0"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod3]" ><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div></div>');

  $(".box_hotel_left_selected").removeClass("box_hotel_left_selected");
  $(`#col-left${numhotel}`).addClass("box_hotel_left_selected");
  $(".box_hotel_midle_selected").removeClass("box_hotel_midle_selected");
  $(`#col-middle${numhotel}`).addClass("box_hotel_midle_selected");
  $(".box_hotel_right_selected").removeClass("box_hotel_right_selected");
  $(`#col-right${numhotel}`).addClass("box_hotel_right_selected");
});

$('#prev_hotel').on('click', function() {
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

// page E - FIM



// Page F - INÍCIO
var numTraslado = 1;
var savedNumTraslado = 1;
var numCar = 1;

// Lógica do traslado - início
$("#add-traslado").click(function(){
  savedNumTraslado++;
  numTraslado = savedNumTraslado;
  $("#landing_Traslado").append('<div class="boxPageF" id="box'+numTraslado+'"><div><h3> Traslado '+numTraslado+'</h3><br><input name="car[from]" type="text" placeholder="De" class="date start-date" /><i class="fa fa-car" aria-hidden="true"></i><input name="car[to]" type="text" placeholder="Para" class="date start-date" /><br><br><input name="car[dateFrom]" type="date" placeholder="dd/mm/aa" class="date start-date" /><i class="fa fa-calendar"></i><input name="car[timeFrom]" type="text" placeholder="Horário" class="date start-date" /><br><br><input name="car[timeFrom]" type="text" placeholder="N. de Pessoas" class="date start-date" /></div><h3>Informações/ Valores</h3><br><div class="container rowclass classF-input"><table class="rowclass autorow"><thead><tr><th colspan="2"><label>Valor por ADT</label></th><th colspan="2"><label>Valor por CHD</label></th><th colspan="2"><label>Valor por INF</label></th></tr></thead><tbody><tr><th colspan="2"><input name="car[valueADT]" onblur="calcTraslado()" value="0"  id="valueADT'+numTraslado+'" class="form-control" placeholder="ADT" ></th><th colspan="2"><input name="car[valueCHD]" onblur="calcTraslado()" value="0"  id="valueCHD'+numTraslado+'" class="form-control" placeholder="CHD" ></th><th colspan="2"><input name="car[valueINF]" onblur="calcTraslado()" value="0"  id="valueINF'+numTraslado+'" class="form-control" placeholder="INF" ></th></tr><tr><th colspan="2"><label>Número de ADTs</label></th><th colspan="2"><label>Número de CHDs</label></th><th colspan="2"><label>Número de INFs</label></th></tr><tr><th colspan="2"><input name="car[numADT]" onblur="calcTraslado()" value="0"  id="numADT'+numTraslado+'" class="form-control" placeholder="numADT" ></th><th colspan="2"><input name="car[numCHD]" onblur="calcTraslado()" value="0"  id="numCHD'+numTraslado+'" class="form-control" placeholder="numCHD" ></th><th colspan="2"><input name="car[numINF]" onblur="calcTraslado()" value="0"  id="numINF'+numTraslado+'" class="form-control" placeholder="numINF" ></th></tr><tr><th colspan="3"><br><div class="rowclass autorow"><select placeholder="Selecione" class="form-control" name=car[coinT] ><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></div></th><th colspan="3"><br><input name="car[totalTranslado]" onblur="calcTraslado()" value="0"  id="totalTranslado'+numTraslado+'" class="form-control" placeholder="Total" ></th></tr></tbody></table><br></div></div>');

  $(".boxPageF_Selected").removeClass("boxPageF_Selected");
  $(`#box${numTraslado}`).addClass("boxPageF_Selected");
});

$('#prev_traslado').on('click', function() {
  if (numTraslado > 1) {
    numTraslado--;

    $(".boxPageF_Selected").removeClass("boxPageF_Selected");
    $(`#box${numTraslado}`).addClass("boxPageF_Selected");
  }
});

$('#nxt_traslado').on('click', function() {
  if (numTraslado < savedNumTraslado) {
    numTraslado++;

    $(".boxPageF_Selected").removeClass("boxPageF_Selected");
    $(`#box${numTraslado}`).addClass("boxPageF_Selected");
  }

});
// Lógica do traslado - fim


// Lógica de carros - início
$("#add_car").click(function(){
  numCar++;
  $("#landing_car").append('<div class="boxCarsPageF"><br><br><h3> Carros '+numCar+' </h3><br><div class="classa"><input class="form-control" placeholder="Categoria" name="car[typeCar]" ></div><br><div class="classa"><input class="form-control" placeholder="Cidade de Retirada" name="car[withdrawal]" ></div><br><div class="classa"><input class="form-control" placeholder="Cidade de Devolução" name="car[delivery]" ></div><br><div class="classa"><input class="form-control" placeholder="Valor carro '+numCar+'" name="car[totalCar]" ></div><br><div class="classa"><input class="form-control" placeholder="Cidade" name="car[city]" ></div><br><div class="classa"><input class="form-control" placeholder="Características" name="car[shift]" ></div><br><div class="classa"><input class="form-control" placeholder="Seguros" name="car[safe]" ></div><br><div class="classa"><input class="form-control" placeholder="Outros" name="car[others]" ></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=car[coinC] ><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></div><br></div>');
});
// Lógica de carros - fim


// Page F - FIM



// Page G - INÍCIO
var numSeguro = 1;
var numTicket = 1;
var numOutros = 1;

var savedNumSeguro = 1;
var savedNumTicket = 1;
var savedNumOutros = 1;

// lógica dos bloco de seguros - início
$("#add_seguros").click(function() {// Modelo da função de replicar
  savedNumSeguro++;
  numSeguro = savedNumSeguro;
  $("#landing-seguro-col1").append('<div class="boxPageG"><div class="" id="boxSafe'+numSeguro+'"><div class="autorow rowclass"><h1 id="titleG" for="exampleInputPassword1">Seguro '+numSeguro+':</h1></div><div class="form-group"><input name="safe[insuranceName]" type="text" placeholder= "Qual seguro será utilizado?" class="form-control"></div><div class="form-group"><input name="safe[insuranceCoverage]" type="text" placeholder= "Cobertura do seguro" class="form-control"></div><div class="rowclass autorow"><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por adulto</th><th colspan="1">Número de adultos</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[insuranceADT]" type="text" id="adt'+numSeguro+'val" onblur="calcSafe()" class="form-control" value="0"></th><th colspan="1"><input name="safe[SafenumADT]" type="text" id="adt'+numSeguro+'mult" onblur="calcSafe()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por criança</th><th colspan="1">Número de crianças</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[insuranceCHD]" type="text" id="chd'+numSeguro+'val" onblur="calcSafe()" class="form-control" value="0"></th><th colspan="1"><input name="safe[SafenumCHD]" type="text" id="chd'+numSeguro+'mult" onblur="calcSafe()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="8">Valor por bebê</th><th colspan="1">Número de bebês</th></tr></thead><tbody><tr><th colspan="8"><input name="safe[insuranceINF]" type="text" id="inf'+numSeguro+'val" onblur="calcSafe()" class="form-control" value="0"></th><th colspan="1"><input name="safe[SafenumINF]" type="text" id="inf'+numSeguro+'mult" onblur="calcSafe()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div></div><div class="rowclass"><table class="autorow"><thead><tr><th><label class="form-control--width autorow">Qual Moeda Utilizada:</label></th><th><label class="form-control--width autorow" for="exampleInputPassword1">Valor total de seguro:</label></th></tr></thead><tbody><tr><th><select placeholder="Selecione" class="form-control form-control--width" name=safe[insuranceCoin] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></th><th><input name="safe[insuranceTOT]" type="text" id="total'+numSeguro+'" onblur="calcSafe()" class="form-control form-control--width" placeholder="Valor" value="0"></th></tr></tbody></table></div></div></div><br><br>');

  $(".Selected").removeClass("Selected");
  $(`#boxSafe${numSeguro}`).addClass("Selected");
});

$('#prev_seguro').on('click', function() {
  if(numSeguro > 1){
    numSeguro--;

    $(".Selected").removeClass("Selected");
    $(`#boxSafe${numSeguro}`).addClass("Selected");
  }
});

$('#nxt_seguros').on('click', function() {
  if(numSeguro < savedNumSeguro){
    numSeguro++;

    $(".Selected").removeClass("Selected");
    $(`#boxSafe${numSeguro}`).addClass("Selected");
  }
});

// lógica dos bloco de seguros - fim


// lógica dos bloco de tickets - início
$("#add_tickets").click(function() {// Modelo da função de replicar
  savedNumTicket++;
  numTicket = savedNumTicket;
  $("#landing-ticket").append('<div class="boxPageG"><div class="Selected" id="boxTicket'+numTicket+'"><div class="autorow rowclass"><h1 id="titleG" for="exampleInputPassword1">Ticket '+numTicket+':</h1></div><div class="form-group"><input name="safe[ticketsName]" type="text" placeholder= "Qual é o ticket a ser comprado?" class="form-control"></div><div class="rowclass autorow"><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por adulto</th><th colspan="1">Número de adultos</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[ticketsADT]" placeholder="Valor por adulto" type="text" id="adt'+numTicket+'valTicket" onblur="calcTicket()" class="form-control" value="0"></th><th colspan="1"><input name="safe[TicketnumADT]" placeholder="Número de adultos" type="text" id="adt'+numTicket+'multTicket" onblur="calcTicket()"class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por criança</th><th colspan="1">Número de crianças</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[ticketsCHD]" placeholder="Valor por criança" type="text" id="chd'+numTicket+'valTicket" onblur="calcTicket()" class="form-control" value="0"></th><th colspan="1"><input name="safe[TicketnumCHD]" placeholder="Número de crianças" type="text" id="chd'+numTicket+'multTicket" onblur="calcTicket()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="8">Valor por bebê</th><th colspan="1">Número de bebês</th></tr></thead><tbody><tr><th colspan="8"><input name="safe[ticketsINF]" placeholder="Valor por bebê" type="text" id="inf'+numTicket+'valTicket" onblur="calcTicket()" class="form-control" value="0"></th><th colspan="1"><input name="safe[TicketnumINF]" placeholder="Número de bebês" type="text" id="inf'+numTicket+'multTicket" onblur="calcTicket()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div></div><div class="rowclass"><table class="autorow"><thead><th><label class="form-control--width autorow">Qual Moeda Utilizada:</label></th><th><label class="form-control--width autorow" for="exampleInputPassword1">Valor total dos tickets:</label></th></tr></thead><tbody><tr><th><select placeholder="Selecione" class="form-control form-control--width" name=safe[ticketsCoin] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></th><th><input name="safe[ticketsTOT]" type="text" id="totalTicket'+numTicket+'" onblur="calcTicket()" class="form-control form-control--width" placeholder="Valor" value="0"></th></tr></tbody></table></div></div></div><br><br>');

  $(".Selected").removeClass("Selected");
  $(`#boxTicket${numTicket}`).addClass("Selected");
});

$('#prev_ticket').on('click', function() {
  if(numTicket > 1){
    numTicket--;

    $(".Selected").removeClass("Selected");
    $(`#boxTicket${numTicket}`).addClass("Selected");
  }
});

$('#nxt_ticket').on('click', function() {
  if(numTicket < savedNumTicket){
    numTicket++;

    $(".Selected").removeClass("Selected");
    $(`#boxTicket${numTicket}`).addClass("Selected");
  }
});
// lógica dos bloco de tickets - fim



// lógica dos bloco de outros - início
$("#add_others").click(function() {// Modelo da função de replicar
  savedNumOutros++;
  numOutros = savedNumOutros;
  $("#landing-other").append('  <div class="boxPageG"><div class="Selected" id="boxOther'+numOutros+'"><div class="autorow rowclass"><h1 id="titleG" for="exampleInputPassword1">Outro '+numOutros+':</h1></div><div class="form-group"><input name="safe[otherName]" type="text" placeholder= "Qual outro item deseja adicionar?" class="form-control"></div><div class="rowclass autorow"><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por adulto</th><th colspan="1">Número de adultos</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[otherADT]" placeholder="Valor por adulto" type="text" id="adt'+numOutros+'valOther" onblur="calcOther()" class="form-control" value="0"></th><th colspan="1"><input name="safe[OthernumADT]" placeholder="Número de adultos" type="text" id="adt'+numOutros+'multOther" onblur="calcOther()"class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="4">Valor por criança</th><th colspan="1">Número de crianças</th></tr></thead><tbody><tr><th colspan="4"><input name="safe[otherCHD]" placeholder="Valor por criança" type="text" id="chd'+numOutros+'valOther" onblur="calcOther()" class="form-control" value="0"></th><th colspan="1"><input name="safe[OthernumCHD]" placeholder="Número de crianças" type="text" id="chd'+numOutros+'multOther" onblur="calcOther()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div><div class="form-group"><table class="autorow"><thead><tr><th colspan="8">Valor por bebê</th><th colspan="1">Número de bebês</th></tr></thead><tbody><tr><th colspan="8"><input name="safe[otherINF]" placeholder="Valor por bebê" type="text" id="inf'+numOutros+'valOther" onblur="calcOther()" class="form-control" value="0"></th><th colspan="1"><input name="safe[OthernumINF]" placeholder="Número de bebês" type="text" id="inf'+numOutros+'multOther" onblur="calcOther()" class="form-control form-control--width autorow" value="0"></th></tr></tbody></table></div></div><div class="rowclass"><table class="autorow"><thead><tr><th><label class="form-control--width autorow">Qual Moeda Utilizada:</label></th><th><label class="form-control--width autorow" for="exampleInputPassword1">Valor total:</label></th></tr></thead><tbody><tr><th><select placeholder="Selecione" class="form-control form-control--width" name=safe[otherCoin] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></th><th><input name="safe[otherTOT]" type="text" id="totalOther'+numOutros+'" onblur="calcOther()" class="form-control form-control--width" placeholder="Valor" value="0"></th></tr></tbody></table></div></div></div><br><br>');

  $(".Selected").removeClass("Selected");
  $(`#boxOther${numOutros}`).addClass("Selected");
});

$('#prev_other').on('click', function() {
  if(numOutros > 1){
    numOutros--;

    $(".Selected").removeClass("Selected");
    $(`#boxOther${numOutros}`).addClass("Selected");
  }
});

$('#nxt_other').on('click', function() {
  if(numOutros < savedNumOutros){
    numOutros++;

    $(".Selected").removeClass("Selected");
    $(`#boxOther${numOutros}`).addClass("Selected");
  }
});
// lógica dos bloco de outros - fim
// Page G - FIM
