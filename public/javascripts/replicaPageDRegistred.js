// variáveis que assumem os maiores valores dos blocos
var ageId1Replica;
var ageId2Replica;
var ageId3Replica;

var flight = 1;
var numVoo = 2;
var firstclick = 0;//Serve para identificar a primeira vez que um botão for apertado e fazer o set de valores pra o replica


// Variáveis que serão utilizadas para criar os ids específicos de cada voo - início
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
// Variáveis que serão utilizadas para criar os ids específicos de cada voo - fim
// ----------//----------//----------



// Variáveis que salvam o número do maior conjunto já criado, para a partir deles, saber quais devem ser os valores dos próximos blocos - início
//Primeira classe saved ------------------------------------
var savedadtNum1_FirstClass;
var savedadtNum2_FirstClass;
var savedadtNum3_FirstClass;
var savedadtRes_FirstClass;

var savedchdNum1_FirstClass;
var savedchdNum2_FirstClass;
var savedchdNum3_FirstClass;
var savedchdRes_FirstClass;

var savedinfNum1_FirstClass;
var savedinfNum2_FirstClass;
var savedinfNum3_FirstClass;
var savedinfRes_FirstClass;


// Executivo saved
var savedadtNum1_Executive;
var savedadtNum2_Executive;
var savedadtNum3_Executive;
var savedadtRes_Executive;

var savedchdNum1_Executive;
var savedchdNum2_Executive;
var savedchdNum3_Executive;
var savedchdRes_Executive;

var savedinfNum1_Executive;
var savedinfNum2_Executive;
var savedinfNum3_Executive;
var savedinfRes_Executive;


// Econômico saved
var savedadtNum1_Economic;
var savedadtNum2_Economic;
var savedadtNum3_Economic;
var savedadtRes_Economic;

var savedchdNum1_Economic;
var savedchdNum2_Economic;
var savedchdNum3_Economic;
var savedchdRes_Economic;

var savedinfNum1_Economic;
var savedinfNum2_Economic;
var savedinfNum3_Economic;
var savedinfRes_Economic;
// Variáveis que salvam o número do maior conjunto já criado, para a partir deles, saber quais devem ser os valores dos próximos blocos - fim
// ----------//----------//----------

$('#add_country').on('click', function() {
  if (firstclick == 0) {//identifica se foi o primeiro botão clicado desde o carregamento da página e pega os valores necessários para o funcionamneto
    ageId1Replica = parseInt(document.getElementById(`get1`).value);
    ageId2Replica = parseInt(document.getElementById(`get2`).value);
    ageId3Replica = parseInt(document.getElementById(`get3`).value);
    idTableReplica = parseInt(document.getElementById(`get4`).value);
    firstclick++;


    // Atribui os valores dos maiores blocos às variáveis que salvam o maior conjunto criado
    //Primeira classe saved
    savedadtNum1_FirstClass = ageId1Replica;
    savedadtNum2_FirstClass = ageId2Replica;
    savedadtNum3_FirstClass = ageId3Replica;
    savedadtRes_FirstClass = (ageId3Replica/3);

    savedchdNum1_FirstClass = ageId1Replica;
    savedchdNum2_FirstClass = ageId2Replica;
    savedchdNum3_FirstClass = ageId3Replica;
    savedchdRes_FirstClass = (ageId3Replica/3);

    savedinfNum1_FirstClass = ageId1Replica;
    savedinfNum2_FirstClass = ageId2Replica;
    savedinfNum3_FirstClass = ageId3Replica;
    savedinfRes_FirstClass = (ageId3Replica/3) - 1;


    // Executivo saved
    savedadtNum1_Executive = ageId1Replica;
    savedadtNum2_Executive = ageId2Replica;
    savedadtNum3_Executive = ageId3Replica;
    savedadtRes_Executive = (ageId3Replica/3);

    savedchdNum1_Executive = ageId1Replica;
    savedchdNum2_Executive = ageId2Replica;
    savedchdNum3_Executive = ageId3Replica;
    savedchdRes_Executive = (ageId3Replica/3);

    savedinfNum1_Executive = ageId1Replica;
    savedinfNum2_Executive = ageId2Replica;
    savedinfNum3_Executive = ageId3Replica;
    savedinfRes_Executive = (ageId3Replica/3 - 1);

    // Econômico saved
    savedadtNum1_Economic = ageId1Replica;
    savedadtNum2_Economic = ageId2Replica;
    savedadtNum3_Economic = ageId3Replica;
    savedadtRes_Economic = (ageId3Replica/3);

    savedchdNum1_Economic = ageId1Replica;
    savedchdNum2_Economic = ageId2Replica;
    savedchdNum3_Economic = ageId3Replica;
    savedchdRes_Economic = (ageId3Replica/3);

    savedinfNum1_Economic = ageId1Replica;
    savedinfNum2_Economic = ageId2Replica;
    savedinfNum3_Economic = ageId3Replica;
    savedinfRes_Economic = (ageId3Replica/3);

    numVoo = idTableReplica;
  }

  else{//Caso não seja a primeira vez apertando um botão, as atribuições já terão sido feitas, então, devemos tratar os saves de outras maneiras
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

    numVoo++;
  }

  // Os valores slvos são igualados aos serem postos no novo bloco gerado
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

  // <input type="number" name="flight[escalas]" value="0" class="invDiv">

  $("#button_space").append('<div class="dinamic_spec"><h1>Voo '+numVoo+'</h1><div class="header Selected table-responsive" id=flight'+numVoo+'><table class="table table-striped table-hover" id="in_country_days'+numVoo+'"><thead><tr><th colspan="1">Voo</th><th colspan="1">Data</th><th colspan="4">De</th><th colspan="4">Para</th><th colspan="2">Saída</th><th colspan="2">Chegada</th></tr></thead><tbody ><tr><th colspan="1"><input type="text" placeholder="Num voo" name="flight[flightNum]" class="form-control"/></th><th colspan="1"><input type="text" placeholder="dd/mm/aaaa" name="flight[dateFrom]" onblur="addDashesNascimento(this)" maxlength="10" class="form-control"/></th><th colspan="4"><input type="text" placeholder="De" name="flight[from]" class="form-control"/></th><th colspan="4"><input type="text" placeholder="Para" name="flight[destination]" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeOut]" maxlength="6" onblur="addDashesHorario(this)" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeIn]" maxlength="6" onblur="addDashesHorario(this)" class="form-control"/><input type="number" name="flight[escalas]" value="0" class="invDiv"></th></tr></tbody></table><div class="pageDAuto"><table class="pageDAuto"><tr><th colspan="21"><h4>Primeira Classe</h4></th></tr><tr><th colspan="1"></th><th colspan="4">Tarifa</th><th colspan="1"></th><th colspan="4">Embarque</th><th colspan="1"></th><th colspan="4">Emissão</th><th colspan="1"></th><th colspan="4">Total </th><th colspan="1">Número de passagens</th></tr><tr><th colspan="1"><h5>Adulto</h5></th><th colspan="4"><input name="flight[tariffValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" type="text" name="qty" id="adt'+adtNum1_FirstClass+'_FirstClass" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" type="text" name="qty" id="adt'+adtNum2_FirstClass+'_FirstClass" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" type="text" name="qty" id="adt'+adtNum3_FirstClass+'_FirstClass" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueAdult_FirstClass]" onblur="calcularAdt_FirstClass()" input type="text" name="total" id="adtResult'+adtRes_FirstClass+'_FirstClass" placeholder="Total ADT" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numADT_FirstClass]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Criança</h5></th><th colspan="4"><input name="flight[tariffValueCHD_FirstClass]" onblur="calcularChd_FirstClass()" type="text" name="qty" id="chd'+chdNum1_FirstClass+'_FirstClass" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueCHD_FirstClass]" onblur="calcularChd_FirstClass)" type="text" name="qty" id="chd'+chdNum2_FirstClass+'_FirstClass" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueCHD_FirstClass]" onblur="calcularChd_FirstClass()" type="text" name="qty" id="chd'+chdNum3_FirstClass+'_FirstClass" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueCHD_FirstClass]" onblur="calcularChd_FirstClass()" input type="text" name="total" id="chdResult'+chdRes_FirstClass+'_FirstClass" placeholder="Total CHD" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numCHD_FirstClass]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Bebê</h5></th><th colspan="4"><input name="flight[tariffValueInf_FirstClass]" onblur="calcularInf_FirstClass()" type="text" name="qty" id="inf'+infNum1_FirstClass+'_FirstClass" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueInf_FirstClass]" onblur="calcularInf_FirstClass()" type="text" name="qty" id="inf'+infNum2_FirstClass+'_FirstClass" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueInf_FirstClass]" onblur="calcularInf_FirstClass()" type="text" name="qty" id="inf'+infNum3_FirstClass+'_FirstClass" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueInf_FirstClass]" onblur="calcularInf_FirstClass()" sinput type="text" name="total" id="infResult'+infRes_Economic+'_FirstClass" placeholder="Total INF" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numINF_FirstClass]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr></table><br><table class="pageDAuto"><tr><th colspan="21"><h4>Executivo</h4></th></tr><tr><th colspan="1"></th><th colspan="4">Tarifa</th><th colspan="1"></th><th colspan="4">Embarque</th><th colspan="1"></th><th colspan="4">Emissão</th><th colspan="1"></th><th colspan="4">Total</th><th colspan="1">Número de passagens</th></tr><tr><th colspan="1"><h5>Adulto</h5></th><th colspan="4"><input name="flight[tariffValueAdult_Executive]" onblur="calcularAdt_Executive()" type="text" name="qty" id="adt'+adtNum1_Executive+'_Executive" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueAdult_Executive]" onblur="calcularAdt_Executive()" type="text" name="qty" id="adt'+adtNum2_Executive+'_Executive" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueAdult_Executive]" onblur="calcularAdt_Executive()" type="text" name="qty" id="adt'+adtNum3_Executive+'_Executive" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueAdult_Executive]" onblur="calcularAdt_Executive()" input type="text" name="total" id="adtResult'+adtRes_Executive+'_Executive" placeholder="Total ADT" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numADT_Executive]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Criança</h5></th><th colspan="4"><input name="flight[tariffValueCHD_Executive]" onblur="calcularChd_Executive()" type="text" name="qty" id="chd'+chdNum1_Executive+'_Executive" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueCHD_Executive]" onblur="calcularChd_Executive()" type="text" name="qty" id="chd'+chdNum2_Executive+'_Executive" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueCHD_Executive]" onblur="calcularChd_Executive()" type="text" name="qty" id="chd'+chdNum3_Executive+'_Executive" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueCHD_Executive]" onblur="calcularChd_Executive()" input type="text" name="total" id="chdResult'+chdRes_Executive+'_Executive" placeholder="Total CHD" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numCHD_Executive]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Bebê</h5></th><th colspan="4"><input name="flight[tariffValueInf_Executive]" onblur="calcularInf_Executive()" type="text" name="qty" id="inf'+infNum1_Executive+'_Executive" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueInf_Executive]" onblur="calcularInf_Executive()" type="text" name="qty" id="inf'+infNum2_Executive+'_Executive" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueInf_Executive]" onblur="calcularInf_Executive()" type="text" name="qty" id="inf'+infNum3_Executive+'_Executive" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueInf_Executive]" onblur="calcularInf_Executive()" sinput type="text" name="total" id="infResult'+infRes_Economic+'_Executive" placeholder="Total INF" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numINF_Executive]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr></table><br><table class="pageDAuto"><tr><th colspan="21"><h4>Econômico</h4></th></tr><tr><th colspan="1"></th><th colspan="4">Tarifa</th><th colspan="1"></th><th colspan="4">Embarque</th><th colspan="1"></th><th colspan="4">Emissão</th><th colspan="1"></th><th colspan="4">Total</th><th colspan="1">Número de passagens</th></tr><tr><th colspan="1"><h5>Adulto</h5></th><th colspan="4"><input name="flight[tariffValueAdult_Economic]" onblur="calcularAdt_Economic()" type="text" name="qty" id="adt'+adtNum1_Economic+'_Economic" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueAdult_Economic]" onblur="calcularAdt_Economic()" type="text" name="qty" id="adt'+adtNum2_Economic+'_Economic" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueAdult_Economic]" onblur="calcularAdt_Economic()" type="text" name="qty" id="adt'+adtNum3_Economic+'_Economic" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueAdult_Economic]" onblur="calcularAdt_Economic()" input type="text" name="total" id="adtResult'+adtRes_Economic+'_Economic" placeholder="Total ADT" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numADT_Economic]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Criança</h5></th><th colspan="4"><input name="flight[tariffValueCHD_Economic]" onblur="calcularChd_Economic()" type="text" name="qty" id="chd'+chdNum1_Economic+'_Economic" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueCHD_Economic]" onblur="calcularChd_Economic()" type="text" name="qty" id="chd'+chdNum2_Economic+'_Economic" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueCHD_Economic]" onblur="calcularChd_Economic()" type="text" name="qty" id="chd'+chdNum3_Economic+'_Economic" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueCHD_Economic]" onblur="calcularChd_Economic()" input type="text" name="total" id="chdResult'+chdRes_Economic+'_Economic" placeholder="Total CHD" class="valor"/ value="0"></th><th colspan="1"><input name="flight[numCHD_Economic]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr><tr><th colspan="1"><h5>Bebê</h5></th><th colspan="4"><input name="flight[tariffValueInf_Economic]" onblur="calcularInf_Economic()" type="text" name="qty" id="inf'+infNum1_Economic+'_Economic" placeholder="Tarifa" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[taxValueInf_Economic]" onblur="calcularInf_Economic()" type="text" name="qty" id="inf'+infNum2_Economic+'_Economic" placeholder="Embarque" class="valor"/ value="0"></th><th colspan="1">+</th><th colspan="4"><input name="flight[ravValueInf_Economic]" onblur="calcularInf_Economic()" type="text" name="qty" id="inf'+infNum3_Economic+'_Economic" placeholder="Emissão" class="valor"/ value="0"></th><th colspan="1">=</th><th colspan="4"><input name="flight[totalValueInf_Economic]" onblur="calcularInf_Economic()" sinput type="text" name="total" id="infResult'+infRes_Economic+'_Economic" placeholder="Total INF" class="valor"/ value="0"></input></th><th colspan="1"><input name="flight[numINF_Economic]" input type="text" name="total" placeholder="" class="valor"/ value="0"></th></tr></table></div><select placeholder="Selecione" class="form-control" name=flight[coin] required><option style="display:none">Selecione qual moeda:</option><option>USD</option><option>R$</option><option>€</option></select></div><br><div class="rowclass"><label>Apagar?</label><input type="radio" name="flight[deleting] type'+numVoo+'" value="1" onclick="return confirm("Deseja mesmo excluir o voo '+numVoo+' ?")">Sim</input><input type="radio" name="flight[deleting] type'+numVoo+'" value="0" checked>Não</input></div></div>');

  flight = numVoo;

  $(".Selected").removeClass("Selected");
  $(`#flight${flight}`).addClass("Selected");

});


$("#button_day_original").on("click", function(){//Acrescenta mais uma escala
  var newDia = '<tr><th colspan="1"><input type="text" placeholder="Num voo" name="flight[flightNum]" class="form-control"/></th><th colspan="1"><input type="text" placeholder="dd/mm/aaaa" name="flight[dateFrom]" class="form-control" onblur="addDashesNascimento(this)" maxlength="10"/></th><th colspan="4"><input type="text" placeholder="De" name="flight[from]" class="form-control"/></th><th colspan="4"><input type="text" placeholder="Para" name="flight[destination]" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeOut]"  maxlength="6" onblur="addDashesHorario(this)" class="form-control"/></th><th colspan="2"><input type="text" placeholder="00:00" name="flight[timeIn]"  maxlength="6" onblur="addDashesHorario(this)" class="form-control"/><input type="number" name="flight[escalas]" value="1" class="invDiv"></th></tr>';
  $(`#in_country_days${flight}`).append(newDia);
});


$('#increasing').on('click', function() {//Passa pro próximo voo
  if (firstclick == 0) {//identifica se foi o primeiro botão clicado desde o carregamento da página e pega os valores necessários para o funcionamneto
    ageId1Replica = parseInt(document.getElementById(`get1`).value);
    ageId2Replica = parseInt(document.getElementById(`get2`).value);
    ageId3Replica = parseInt(document.getElementById(`get3`).value);
    idTableReplica = parseInt(document.getElementById(`get4`).value);
    firstclick++;

    // Atribui os valores dos maiores blocos às variáveis que salvam o maior conjunto criado
    //Primeira classe saved
    savedadtNum1_FirstClass = ageId1Replica - 3;
    savedadtNum2_FirstClass = ageId2Replica - 3;
    savedadtNum3_FirstClass = ageId3Replica - 3;
    savedadtRes_FirstClass = (ageId3Replica/3) - 1;

    savedchdNum1_FirstClass = ageId1Replica - 3;
    savedchdNum2_FirstClass = ageId2Replica - 3;
    savedchdNum3_FirstClass = ageId3Replica - 3;
    savedchdRes_FirstClass = (ageId3Replica/3) - 1;

    savedinfNum1_FirstClass = ageId1Replica - 3;
    savedinfNum2_FirstClass = ageId2Replica - 3;
    savedinfNum3_FirstClass = ageId3Replica - 3;
    savedinfRes_FirstClass = (ageId3Replica/3) - 1;


    // Executivo saved
    savedadtNum1_Executive = ageId1Replica - 3;
    savedadtNum2_Executive = ageId2Replica - 3;
    savedadtNum3_Executive = ageId3Replica - 3;
    savedadtRes_Executive = (ageId3Replica/3) - 1;

    savedchdNum1_Executive = ageId1Replica - 3;
    savedchdNum2_Executive = ageId2Replica - 3;
    savedchdNum3_Executive = ageId3Replica - 3;
    savedchdRes_Executive = (ageId3Replica/3) - 1;

    savedinfNum1_Executive = ageId1Replica - 3;
    savedinfNum2_Executive = ageId2Replica - 3;
    savedinfNum3_Executive = ageId3Replica - 3;
    savedinfRes_Executive = (ageId3Replica/3 - 1);

    // Econômico saved
    savedadtNum1_Economic = ageId1Replica - 3;
    savedadtNum2_Economic = ageId2Replica - 3;
    savedadtNum3_Economic = ageId3Replica - 3;
    savedadtRes_Economic = (ageId3Replica/3) - 1;

    savedchdNum1_Economic = ageId1Replica - 3;
    savedchdNum2_Economic = ageId2Replica - 3;
    savedchdNum3_Economic = ageId3Replica - 3;
    savedchdRes_Economic = (ageId3Replica/3) - 1;

    savedinfNum1_Economic = ageId1Replica - 3;
    savedinfNum2_Economic = ageId2Replica - 3;
    savedinfNum3_Economic = ageId3Replica - 3;
    savedinfRes_Economic = (ageId3Replica/3) - 1;

    numVoo = idTableReplica - 1;
  }

  if (flight < numVoo) { // Não permite avançar mais blocos do que existem
    flight++;
    $(".Selected").removeClass("Selected");
    $(`#flight${flight}`).addClass("Selected");

  }
});


$('#decreasing').on('click', function() {//volta pro próximo voo
  if (firstclick == 0) {//identifica se foi o primeiro botão clicado desde o carregamento da página e pega os valores necessários para o funcionamneto
    ageId1Replica = parseInt(document.getElementById(`get1`).value);
    ageId2Replica = parseInt(document.getElementById(`get2`).value);
    ageId3Replica = parseInt(document.getElementById(`get3`).value);
    idTableReplica = parseInt(document.getElementById(`get4`).value);
    firstclick++;

    // Atribui os valores dos maiores blocos às variáveis que salvam o maior conjunto criado
    //Primeira classe saved
    savedadtNum1_FirstClass = ageId1Replica - 3;
    savedadtNum2_FirstClass = ageId2Replica - 3;
    savedadtNum3_FirstClass = ageId3Replica - 3;
    savedadtRes_FirstClass = (ageId3Replica/3) - 1;

    savedchdNum1_FirstClass = ageId1Replica - 3;
    savedchdNum2_FirstClass = ageId2Replica - 3;
    savedchdNum3_FirstClass = ageId3Replica - 3;
    savedchdRes_FirstClass = (ageId3Replica/3) - 1;

    savedinfNum1_FirstClass = ageId1Replica - 3;
    savedinfNum2_FirstClass = ageId2Replica - 3;
    savedinfNum3_FirstClass = ageId3Replica - 3;
    savedinfRes_FirstClass = (ageId3Replica/3) - 1;


    // Executivo saved
    savedadtNum1_Executive = ageId1Replica - 3;
    savedadtNum2_Executive = ageId2Replica - 3;
    savedadtNum3_Executive = ageId3Replica - 3;
    savedadtRes_Executive = (ageId3Replica/3) - 1;

    savedchdNum1_Executive = ageId1Replica - 3;
    savedchdNum2_Executive = ageId2Replica - 3;
    savedchdNum3_Executive = ageId3Replica - 3;
    savedchdRes_Executive = (ageId3Replica/3) - 1;

    savedinfNum1_Executive = ageId1Replica - 3;
    savedinfNum2_Executive = ageId2Replica - 3;
    savedinfNum3_Executive = ageId3Replica - 3;
    savedinfRes_Executive = (ageId3Replica/3 - 1);

    // Econômico saved
    savedadtNum1_Economic = ageId1Replica - 3;
    savedadtNum2_Economic = ageId2Replica - 3;
    savedadtNum3_Economic = ageId3Replica - 3;
    savedadtRes_Economic = (ageId3Replica/3) - 1;

    savedchdNum1_Economic = ageId1Replica - 3;
    savedchdNum2_Economic = ageId2Replica - 3;
    savedchdNum3_Economic = ageId3Replica - 3;
    savedchdRes_Economic = (ageId3Replica/3) - 1;

    savedinfNum1_Economic = ageId1Replica - 3;
    savedinfNum2_Economic = ageId2Replica - 3;
    savedinfNum3_Economic = ageId3Replica - 3;
    savedinfRes_Economic = (ageId3Replica/3) - 1;

    numVoo = idTableReplica - 1;
  }

  if (flight > 1) { // Não permite regressar mais blocos do que existem
    flight--;
    $(".Selected").removeClass("Selected");
    $(`#flight${flight}`).addClass("Selected");
  }
});
