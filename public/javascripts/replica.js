// Page A - INÍCIO
$( "#add-filhos" ).click(function() {
  $( "#familypageA" ).append('<br><br><div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="sondaughter" name = "client[children]" class="form-control" id="sondaughter" placeholder="Filho/a"></div><br><div class="classa"><input type="text" name = "client[birthDateChildren]" onfocus="(this.type= "date")" onblur="(this.type= "text")" class="form-control" id="birthday" placeholder="Data de Nascimento"  onblur="addDashesNascimento(this)" maxlength="8"  onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" ></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[childrenPassport]" class="form-control" id="passport1" placeholder="Passaporte"></div><br><div class="classa"><input type="fullname" name = "client[childrenPassportValidation]" class="form-control" id="passportvalidation2" placeholder="Validade Passaporte"></div><br></div></div></div>');
});


$( "#add-companion" ).click(function(){
  $( "#acompanhantespageA").append('<div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[companionFullname]" class="form-control" id="fullname" placeholder="Nome Completo"></div><br><div class="classa"><input type="fullname"  name = "client[companionEmail]" class="form-control" id="email3" placeholder="Email"></div><br><div class="classa"><input type="fullname" name = "client[companionCellphone]" class="form-control" id="cellph2" placeholder="Celular" onblur="addDashesCel(this)" maxlength="11" onkeypress="return //d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));"></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[birthDateCompanion]" class="form-control" id="birthday1" placeholder="Data de Nascimento" onblur="addDashesNascimento(this)" maxlength="8"  onkeypress="return / / d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" ></div><br><div class="classa"><input type="fullname" name = "client[passport3]" class="form-control" id="passport3" placeholder="Passaporte"></div><br><div class="classa"><input type="fullname" name = "client[companionPassportValidation]" class="form-control" id="passportvalidation3" placeholder="Validade Passaporte"></div><br></div></div></div>');

});
// Page A - FIM


// page c - início
var planned_day = 2;
$( "#add_dias" ).click(function() {
  $( "#testedacamila" ).append( '<div id="testedacamila" class="rowclass"><div class="container rowclass"><div class="row rowclass marginPageC"><div class="col-sm-auto-pageC rowclass">Dia '+planned_day+'</div><div class="col-sm-auto-pageC rowclass"><input type="date" placeholder="dd/mm/aa" name="budget[planDate]" class= "form-control classCinput2"></div><div class="col-sm-auto-pageC rowclass"><input placeholder="País" name="budget[planCountry]" class= "form-control classCinput2"></div><div class="col-sm-auto-pageC rowclass"><input placeholder="Cidade" name="budget[planCity]"class= "form-control classCinput2"></div></div><br><div class="form-group"><textarea class="form-control" name="budget[planFreeField]" placeholder="Campo Livre" rows="3"></textarea></div></div></div>' );
  planned_day ++;
  console.log('add dias ta pegando');
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
var numhotel = 2;
var numcity = 2;
$("#add-hotel").click(function() {
  $("#landing-hotel-col1").append(' <div class="box_hotel_left"><br><br><br><br><select placeholder="Selecione" class="form-control" name=hotel[coin] required><div id="companion_camp"><option style="display:none">Selecione qual moeda:</option><option>$</option><option>R$</option><option>€</option></select></div></div><br><br><br><div class="classa"><input class="form-control" placeholder="Hotel 1" name="hotel[hotel1]"></div><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType1]" required></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category1]"></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food]><option style="display:none">Regime de Alimentação</option><option>Café</option><option>Meia pensão</option><option>All inclusive</option><option>Outros</option></select></div><br><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt1]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total1]"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod2]"><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div>');
  $("#landing-hotel-col2").append('<div class="box_hotel_midle"><div id="companion_camp"><br><br><br><div class="classa"><input class="form-control" placeholder="Cidade " name="hotel[city]"></div><br><div class="classa"><input class="form-control" placeholder="Hotel 2" name="hotel[hotel2]"></div><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType2]" required></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category2]"></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food]><option style="display:none">Regime de Alimentação</option><option>Café</option><option>Meia pensão</option><option>All inclusive</option><option>Outros</option></select></div><br><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt2]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total2]"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod3]"><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div>');
  $("#landing-hotel-col3").append('<div class="box_hotel_right"><div id="companion_camp"></div><br><br><br><br><br><br><div id="companion_camp"></div><br><br><br><div class="classa"><input class="form-control" placeholder="Hotel 3" name="hotel[hotel3]"></div><br><div class="classa"><input class="form-control" placeholder="Tipo de acomodação" name="hotel[acomodationType3]" required></div><br><div class="classa"><input class="form-control" placeholder="Categoria do Apartamento" name="hotel[category3]"></div><br><div class="classa"><select placeholder="Selecione" class="form-control" name=hotel[food]><option style="display:none">Regime de Alimentação</option><option>Café</option><option>Meia pensão</option><option>All inclusive</option><option>Outros</option></select></div><br><div class="classa"><input class="form-control" placeholder="Valor Apto" name="hotel[valueApt3]"></div><br><div class="classa"><input class="form-control" placeholder="Número de diárias" name="hotel[numberDaily]"></div><br><div class="classa"><input class="form-control" placeholder="Número de Apartamentos" name="hotel[numberApt]"></div><br><div class="classa"><input class="form-control" placeholder="Total" name="hotel[total3]"></div><br><div class="classa"><select class="form-control" name="hotel[cancellationPeriod1]"><option style="display:none">Prazo de Cancelamento</option><option>Sem prazo</option><option>Com prazo</option><option>Outro</option></select></div></div>');
  numcity++;
  numhotel++;
});
// page E - FIM


// Page F - INÍCIO
var pageFNumCar = 2;
var pageFNumTranslado = 2;
// '+pageFNum+'
$("#add_translado").click(function(){
  $("#PageF_Col1").append('<div class="boxLeftPageF"><br><br><br>  <h3> Passageiros </h3><br><input class="form-check-input" type="checkbox"><input placeholder="Responsável"><br><br><input class="form-check-input" type="checkbox"><input placeholder="Acompanhante"><div id="add_acompanhantesvoo"></div><br></div>');
  $("#PageF_Col2").append('<div class="boxRightPageF"><div><h3> Translado '+pageFNumTranslado+'</h3><br><input name="car[from]" type="text" placeholder="De" class="date start-date"/><i class="fa fa-plane"></i><input name="car[to]" type="text" placeholder="Para" class="date start-date"/><br><br><input name="car[dateFrom]" type="date" placeholder="dd/mm/aa" class="date start-date"/><i class="fa fa-calendar"></i><input name="car[timeFrom]" type="text" placeholder="Horário" class="date start-date"/><br><br><input name="car[dateTo]" type="date" placeholder="dd/mm/aa" class="date start-date"/><i class="fa fa-calendar"></i><input name="car[timeTo]" type="text" placeholder="Horário" class="date start-date"/></div><h3>Informações</h3><br><div class="container rowclass classF-input"><div class="row rowclass"><div class="col-sm rowclass"><div class="classa rowclass col-lg-11"><input name="car[valueADT]" class="form-control" placeholder="Val ADT"></div></div><div class="col-sm rowclass"><div class="classa rowclass col-lg-11"><input name="car[valueCHD]" class="form-control" placeholder="Val CHD"></div></div><div class="col-sm rowclass"><div class="classa rowclass col-lg-11"><input name="car[valueINF]" class="form-control" placeholder="Val INF"></div><br></div><div class="col-sm rowclass"><input name="car[totalTranslado]" class="form-control" placeholder="Val Total"></div><div class="col-sm rowclass"><select placeholder="Selecione" class="form-control form-control--espacoesq" name=car[coinT] required><option style="display:none">Moeda:</option><option>$</option><option>R$</option><option>€</option></select></div></div></div>');
  pageFNumTranslado++;
});
$("#add_car").click(function(){
  $("#PageF_Col3").append('<div class="boxCarsPageF"> <br><br><h3> Carros 1 </h3><br> <div class="classa classa--margin"> <select placeholder="Selecione" class="form-control form-control--espacoesq" name=car[coinC] required> <option style="display:none">Moeda:</option> <option>$</option> <option>R$</option> <option>€</option> </select> </div> <div class="classa"> <input class="form-control" placeholder="Categoria" name="car[typeCar]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Cidade de Retirada" name="car[withdrawal]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Cidade de Devolução" name="car[delivery]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Valor carro 1" name="car[totalCar]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Cidade" name="car[city]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Transmissão" name="car[shift]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Seguros" name="car[safe]" required> </div><br> <div class="classa"> <input class="form-control" placeholder="Outros" name="car[others]" required> </div><br> </div>');
  pageFNumCar++;
});
// Page F - FIM

// Page G - INÍCIO
var numSeguro = 2;
var numTicket = 2;
var numOutros = 2;

$("#add_seguros").click(function() {// Modelo da função de replicar
  $("#landing-seguro-col1").append('<div class="boxLeftPageG"><div class="form-group"><label id="titleG" for="exampleInputPassword1">Seguro '+numSeguro+':</label><input name="safe[insuranceName]" type="text" placeholder= "Qual seguro será utilizado?" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Cobertura</label><input name="safe[insuranceCoverage]" type="text" placeholder= "Cobertura do seguro" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[insuranceADT]" type="text" placeholder= "Preço por adulto" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[insuranceCHD]" type="text" placeholder= "Preço por criança" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[insuranceINF]" type="text" placeholder= "Preço por infatos" class="form-control"></div></div>');
  $("#landing-seguro-col2").append('<div class="boxRightPageG"><div class="form-group"><label for="exampleInputPassword1">Nome do responsável:</label><input type="text" placeholder= "" class="form-control"></div><label for="exampleInputPassword1">Selecione os acompanhantes</label><div class="form-check"><input class="form-check-input" type="checkbox"   id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">Acompanhante 1</label></div><div class="form-group col-md-3 valor"><label class="value1" for="exampleInputPassword1">Valor total de seguro:</label><input name="safe[insuranceTOT]" type="text" class="form-control value1" placeholder="Valor (R$)"></div></div>');
  numSeguro++;
});

$("#add_ticket").click(function() {// Modelo da função de replicar
  $("#landing-ticket-col1").append('<div class="boxLeftPageG"><div class="form-group"><label id="titleG" for="exampleInputPassword1">Tickets/Ingressos '+numTicket+':</label><input name="safe[ticketsName]" type="text" placeholder= "" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[ticketsADT]" type="text" placeholder= "Preço por adulto" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[ticketsCHD]" type="text" placeholder= "Preço por criança" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[ticketsINF]" type="text" placeholder= "Preço por infatos" class="form-control"></div></div>');
  $("#landing-ticket-col2").append('<div class="boxRightPageG"><div class="form-group"><label for="exampleInputPassword1">Nome do responsável:</label><input type="text" placeholder= "" class="form-control"></div><label for="exampleInputPassword1">Selecione os acompanhantes</label><div class="form-check"><input class="form-check-input" type="checkbox"   id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">Acompanhante 1</label></div><div class="form-group col-md-3 valor"><label class="value1" for="exampleInputPassword1">Valor total de Ingressos:</label><input name="safe[ticketsTOT]" type="text" class="form-control value1" placeholder="Valor (R$)"></div></div>');
  numTicket++;
});

$("#add_outros").click(function() {// Modelo da função de replicar
  $("#landing-outros-col1").append('<div class="boxLeftPageG"><div class="form-group"><label id="titleG" for="exampleInputPassword1">Outros '+numOutros+':</label><input name="safe[otherName]" type="text" placeholder= "" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[otherADT]" type="text" placeholder= "Preço por adulto" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[otherCHD]" type="text" placeholder= "Preço por criança" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[otherINF]" type="text" placeholder= "Preço por infatos" class="form-control"></div></div>');
  $("#landing-outros-col2").append('<div class="boxRightPageG"><div class="form-group"><label for="exampleInputPassword1">Nome do responsável:</label><input type="text" placeholder= "" class="form-control"></div><label for="exampleInputPassword1">Selecione os acompanhantes</label><div class="form-check"><input class="form-check-input" type="checkbox" id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">Acompanhante 1 </label></div><div class="form-group col-md-3 valor"><label class="value1" for="exampleInputPassword1">Valor total de outros:</label><input name="safe[otherTOT]" type="text" class="form-control value1" placeholder="Valor (R$)"></div></div>');
  numOutros++;
});

$("#add_outros").click(function() {
  $("#add_outros1").append('<div class="form-group"><label id="titleG" for="exampleInputPassword1">Outros:</label><input name="safe[otherName]" type="text" placeholder= "" class="form-control"></di<div class="form-group"><label for="exampleInputPassword1">Adultos:</label><input name="safe[otherADT]" type="text" placeholder= "Preço por adulto" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Crianças:</label><input name="safe[otherCHD]" type="text" placeholder= "Preço por criança" class="form-control"></div><div class="form-group"><label for="exampleInputPassword1">Infantos:</label><input name="safe[otherINF]" type="text" placeholder= "Preço por infatos" class="form-control"></div>');
});
// Page G - FIM
