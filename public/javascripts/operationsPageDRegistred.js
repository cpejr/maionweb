var afirstclick = 0;
var ageId1Operation;
var ageId2Operation;
var ageId3Operation;
var aflight = 1;
var anumVoo = 2;

// Variáveis que serão utilizadas para criar os ids específicos de cada voo - início
// Primeira classe
var aadtNum1_FirstClass = 1;
var aadtNum2_FirstClass = 2;
var aadtNum3_FirstClass = 3;
var aadtRes_FirstClass = 1;

var achdNum1_FirstClass = 1;
var achdNum2_FirstClass = 2;
var achdNum3_FirstClass = 3;
var achdRes_FirstClass = 1;

var ainfNum1_FirstClass = 1;
var ainfNum2_FirstClass = 2;
var ainfNum3_FirstClass = 3;
var ainfRes_FirstClass = 1;


// Executivo
var aadtNum1_Executive = 1;
var aadtNum2_Executive = 2;
var aadtNum3_Executive = 3;
var aadtRes_Executive = 1;

var achdNum1_Executive = 1;
var achdNum2_Executive = 2;
var achdNum3_Executive = 3;
var achdRes_Executive = 1;

var ainfNum1_Executive = 1;
var ainfNum2_Executive = 2;
var ainfNum3_Executive = 3;
var ainfRes_Executive = 1;


// Economico
var aadtNum1_Economic = 1;
var aadtNum2_Economic = 2;
var aadtNum3_Economic = 3;
var aadtRes_Economic = 1;

var achdNum1_Economic = 1;
var achdNum2_Economic = 2;
var achdNum3_Economic = 3;
var achdRes_Economic = 1;

var ainfNum1_Economic = 1;
var ainfNum2_Economic = 2;
var ainfNum3_Economic = 3;
var ainfRes_Economic = 1;
// Variáveis que serão utilizadas para criar os ids específicos de cada voo - fim
// ----------//----------//----------



// Variáveis que salvam o número do maior conjunto já criado, para a partir deles, saber quais devem ser os valores dos próximos blocos - início
// Primeira classe saved
var savedAadtNum1_FirstClass;
var savedAadtNum2_FirstClass;
var savedAadtNum3_FirstClass;
var savedAadtRes_FirstClass;

var savedAchdNum1_FirstClass;
var savedAchdNum2_FirstClass;
var savedAchdNum3_FirstClass;
var savedAchdRes_FirstClass;

var savedAinfNum1_FirstClass;
var savedAinfNum2_FirstClass;
var savedAinfNum3_FirstClass;
var savedAinfRes_FirstClass;


// Executivo saved
var savedAadtNum1_Executive;
var savedAadtNum2_Executive;
var savedAadtNum3_Executive;
var savedAadtRes_Executive;

var savedAchdNum1_Executive;
var savedAchdNum2_Executive;
var savedAchdNum3_Executive;
var savedAchdRes_Executive;

var savedAinfNum1_Executive;
var savedAinfNum2_Executive;
var savedAinfNum3_Executive;
var savedAinfRes_Executive;


// Econômico saved
var savedAadtNum1_Economic;
var savedAadtNum2_Economic;
var savedAadtNum3_Economic;
var savedAadtRes_Economic;

var savedAchdNum1_Economic;
var savedAchdNum2_Economic;
var savedAchdNum3_Economic;
var savedAchdRes_Economic;

var savedAinfNum1_Economic;
var savedAinfNum2_Economic;
var savedAinfNum3_Economic;
var savedAinfRes_Economic;
// Variáveis que salvam o número do maior conjunto já criado, para a partir deles, saber quais devem ser os valores dos próximos blocos - fim
// ----------//----------//----------

// Somas da primeira classe
function calcularAdt_FirstClass(){
    var adtVal1_FirstClass = parseInt(document.getElementById(`adt${aadtNum1_FirstClass}_FirstClass`).value);
    var adtVal2_FirstClass = parseInt(document.getElementById(`adt${aadtNum2_FirstClass}_FirstClass`).value);
    var adtVal3_FirstClass = parseInt(document.getElementById(`adt${aadtNum3_FirstClass}_FirstClass`).value);
    document.getElementById(`adtResult${aadtRes_FirstClass}_FirstClass`).value = adtVal1_FirstClass + adtVal2_FirstClass + adtVal3_FirstClass;
}

function calcularChd_FirstClass(){
    var chdVal1_FirstClass = parseInt(document.getElementById(`chd${achdNum1_FirstClass}_FirstClass`).value);
    var chdVal2_FirstClass = parseInt(document.getElementById(`chd${achdNum2_FirstClass}_FirstClass`).value);
    var chdVal3_FirstClass = parseInt(document.getElementById(`chd${achdNum3_FirstClass}_FirstClass`).value);
    document.getElementById(`chdResult${achdRes_FirstClass}_FirstClass`).value = chdVal1_FirstClass + chdVal2_FirstClass + chdVal3_FirstClass;
}

function calcularInf_FirstClass(){
    var infVal1_FirstClass = parseInt(document.getElementById(`inf${ainfNum1_FirstClass}_FirstClass`).value);
    var infVal2_FirstClass = parseInt(document.getElementById(`inf${ainfNum2_FirstClass}_FirstClass`).value);
    var infVal3_FirstClass = parseInt(document.getElementById(`inf${ainfNum3_FirstClass}_FirstClass`).value);
    document.getElementById(`infResult${ainfRes_FirstClass}_FirstClass`).value = infVal1_FirstClass + infVal2_FirstClass + infVal3_FirstClass;
}

var atotalRes = 1;
function total(){
  var total1 = parseInt(document.getElementById(`adtResult${aadtRes}`).value);
  var total2 = parseInt(document.getElementById(`chdResult${achdRes}`).value);
  var total3 = parseInt(document.getElementById(`infResult${ainfRes}`).value);
  document.getElementById(`totalResult${atotalRes}`).value = total1 + total2 + total3;
}


// Soma do executivo
function calcularAdt_Executive(){
    var adtVal1_Executive = parseInt(document.getElementById(`adt${aadtNum1_Executive}_Executive`).value);
    var adtVal2_Executive = parseInt(document.getElementById(`adt${aadtNum2_Executive}_Executive`).value);
    var adtVal3_Executive = parseInt(document.getElementById(`adt${aadtNum3_Executive}_Executive`).value);
    document.getElementById(`adtResult${aadtRes_Executive}_Executive`).value = adtVal1_Executive + adtVal2_Executive + adtVal3_Executive;
}

function calcularChd_Executive(){
    var chdVal1_Executive = parseInt(document.getElementById(`chd${achdNum1_Executive}_Executive`).value);
    var chdVal2_Executive = parseInt(document.getElementById(`chd${achdNum2_Executive}_Executive`).value);
    var chdVal3_Executive = parseInt(document.getElementById(`chd${achdNum3_Executive}_Executive`).value);
    document.getElementById(`chdResult${achdRes_Executive}_Executive`).value = chdVal1_Executive + chdVal2_Executive + chdVal3_Executive;
}

function calcularInf_Executive(){
    var infVal1_Executive = parseInt(document.getElementById(`inf${ainfNum1_Executive}_Executive`).value);
    var infVal2_Executive = parseInt(document.getElementById(`inf${ainfNum2_Executive}_Executive`).value);
    var infVal3_Executive = parseInt(document.getElementById(`inf${ainfNum3_Executive}_Executive`).value);
    document.getElementById(`infResult${ainfRes_Executive}_Executive`).value = infVal1_Executive + infVal2_Executive + infVal3_Executive;
}


// Soma do econômico
function calcularAdt_Economic(){
    var adtVal1_Economic = parseInt(document.getElementById(`adt${aadtNum1_Economic}_Economic`).value);
    var adtVal2_Economic = parseInt(document.getElementById(`adt${aadtNum2_Economic}_Economic`).value);
    var adtVal3_Economic = parseInt(document.getElementById(`adt${aadtNum3_Economic}_Economic`).value);
    document.getElementById(`adtResult${aadtRes_Economic}_Economic`).value = adtVal1_Economic + adtVal2_Economic + adtVal3_Economic;
}

function calcularChd_Economic(){
    var chdVal1_Economic = parseInt(document.getElementById(`chd${achdNum1_Economic}_Economic`).value);
    var chdVal2_Economic = parseInt(document.getElementById(`chd${achdNum2_Economic}_Economic`).value);
    var chdVal3_Economic = parseInt(document.getElementById(`chd${achdNum3_Economic}_Economic`).value);
    document.getElementById(`chdResult${achdRes_Economic}_Economic`).value = chdVal1_Economic + chdVal2_Economic + chdVal3_Economic;
}

function calcularInf_Economic(){
    var infVal1_Economic = parseInt(document.getElementById(`inf${ainfNum1_Economic}_Economic`).value);
    var infVal2_Economic = parseInt(document.getElementById(`inf${ainfNum2_Economic}_Economic`).value);
    var infVal3_Economic = parseInt(document.getElementById(`inf${ainfNum3_Economic}_Economic`).value);
    document.getElementById(`infResult${ainfRes_Economic}_Economic`).value = infVal1_Economic + infVal2_Economic + infVal3_Economic;
}

$('#add_country').on('click', function() {
  if (afirstclick == 0) {
    ageId1Operation = parseInt(document.getElementById(`get1`).value);
    ageId2Operation = parseInt(document.getElementById(`get2`).value);
    ageId3Operation = parseInt(document.getElementById(`get3`).value);
    afirstclick++;

    // Atribui os valores dos maiores blocos às variáveis que salvam o maior conjunto criado
    //Primeira classe saved
    savedAadtNum1_FirstClass = ageId1Operation;
    savedAadtNum2_FirstClass = ageId2Operation;
    savedAadtNum3_FirstClass = ageId3Operation;
    savedAadtRes_FirstClass = (ageId3Operation/3);

    savedAchdNum1_FirstClass = ageId1Operation;
    savedAchdNum2_FirstClass = ageId2Operation;
    savedAchdNum3_FirstClass = ageId3Operation;
    savedAchdRes_FirstClass = (ageId3Operation/3);

    savedAinfNum1_FirstClass = ageId1Operation;
    savedAinfNum2_FirstClass = ageId2Operation;
    savedAinfNum3_FirstClass = ageId3Operation;
    savedAinfRes_FirstClass = (ageId3Operation/3);


    // Executivo saved
    savedAadtNum1_Executive = ageId1Operation;
    savedAadtNum2_Executive = ageId2Operation;
    savedAadtNum3_Executive = ageId3Operation;
    savedAadtRes_Executive = (ageId3Operation/3);

    savedAchdNum1_Executive = ageId1Operation;
    savedAchdNum2_Executive = ageId2Operation;
    savedAchdNum3_Executive = ageId3Operation;
    savedAchdRes_Executive = (ageId3Operation/3);

    savedAinfNum1_Executive = ageId1Operation;
    savedAinfNum2_Executive = ageId2Operation;
    savedAinfNum3_Executive = ageId3Operation;
    savedAinfRes_Executive = (ageId3Operation/3);

    // Econômico saved
    savedAadtNum1_Economic = ageId1Operation;
    savedAadtNum2_Economic = ageId2Operation;
    savedAadtNum3_Economic = ageId3Operation;
    savedAadtRes_Economic = (ageId3Operation/3);

    savedAchdNum1_Economic = ageId1Operation;
    savedAchdNum2_Economic = ageId2Operation;
    savedAchdNum3_Economic = ageId3Operation;
    savedAchdRes_Economic = (ageId3Operation/3);

    savedAinfNum1_Economic = ageId1Operation;
    savedAinfNum2_Economic = ageId2Operation;
    savedAinfNum3_Economic = ageId3Operation;
    savedAinfRes_Economic = (ageId3Operation/3);
  }

  else {//Caso não seja a primeira vez apertando um botão, as atribuições já terão sido feitas, então, devemos tratar os saves de outras maneiras
    savedAadtNum1_FirstClass = savedAadtNum1_FirstClass + 3;
    savedAadtNum2_FirstClass = savedAadtNum2_FirstClass + 3;
    savedAadtNum3_FirstClass = savedAadtNum3_FirstClass + 3;
    savedAadtRes_FirstClass++;

    savedAchdNum1_FirstClass = savedAchdNum1_FirstClass + 3;
    savedAchdNum2_FirstClass = savedAchdNum2_FirstClass + 3;
    savedAchdNum3_FirstClass = savedAchdNum3_FirstClass + 3;
    savedAchdRes_FirstClass++;

    savedAinfNum1_FirstClass = savedAinfNum1_FirstClass + 3;
    savedAinfNum2_FirstClass = savedAinfNum2_FirstClass + 3;
    savedAinfNum3_FirstClass = savedAinfNum3_FirstClass + 3;
    savedAinfRes_FirstClass++;


    // Executivo saved
    savedAadtNum1_Executive = savedAadtNum1_Executive + 3;
    savedAadtNum2_Executive = savedAadtNum2_Executive + 3;
    savedAadtNum3_Executive = savedAadtNum3_Executive + 3;
    savedAadtRes_Executive++;

    savedAchdNum1_Executive = savedAchdNum1_Executive + 3;
    savedAchdNum2_Executive = savedAchdNum2_Executive + 3;
    savedAchdNum3_Executive = savedAchdNum3_Executive + 3;
    savedAchdRes_Executive++;

    savedAinfNum1_Executive = savedAinfNum1_Executive + 3;
    savedAinfNum2_Executive = savedAinfNum2_Executive + 3;
    savedAinfNum3_Executive = savedAinfNum3_Executive + 3;
    savedAinfRes_Executive++;


    // Econômico saved
    savedAadtNum1_Economic = savedAadtNum1_Economic + 3;
    savedAadtNum2_Economic = savedAadtNum2_Economic + 3;
    savedAadtNum3_Economic = savedAadtNum3_Economic + 3;
    savedAadtRes_Economic++;

    savedAchdNum1_Economic = savedAchdNum1_Economic + 3;
    savedAchdNum2_Economic = savedAchdNum2_Economic + 3;
    savedAchdNum3_Economic = savedAchdNum3_Economic + 3;
    savedAchdRes_Economic++;

    savedAinfNum1_Economic = savedAinfNum1_Economic + 3;
    savedAinfNum2_Economic = savedAinfNum2_Economic + 3;
    savedAinfNum3_Economic = savedAinfNum3_Economic + 3;
    savedAinfRes_Economic++;
  }

  // Os valores slvos são igualados aos serem postos no novo bloco gerado
  // Primeira classe
  aadtNum1_FirstClass = savedAadtNum1_FirstClass;
  aadtNum2_FirstClass = savedAadtNum2_FirstClass;
  aadtNum3_FirstClass = savedAadtNum3_FirstClass;
  aadtRes_FirstClass = savedAadtRes_FirstClass;

  achdNum1_FirstClass = savedAchdNum1_FirstClass;
  achdNum2_FirstClass = savedAchdNum2_FirstClass;
  achdNum3_FirstClass = savedAchdNum3_FirstClass;
  achdRes_FirstClass = savedAchdRes_FirstClass;

  ainfNum1_FirstClass = savedAinfNum1_FirstClass;
  ainfNum2_FirstClass = savedAinfNum2_FirstClass;
  ainfNum3_FirstClass = savedAinfNum3_FirstClass;
  ainfRes_FirstClass = savedAinfRes_FirstClass;


  // Executivo
  aadtNum1_Executive = savedAadtNum1_Executive;
  aadtNum2_Executive = savedAadtNum2_Executive;
  aadtNum3_Executive = savedAadtNum3_Executive;
  aadtRes_Executive = savedAadtRes_Executive;

  achdNum1_Executive = savedAchdNum1_Executive;
  achdNum2_Executive = savedAchdNum2_Executive;
  achdNum3_Executive = savedAchdNum3_Executive;
  achdRes_Executive = savedAchdRes_Executive;

  ainfNum1_Executive = savedAinfNum1_Executive;
  ainfNum2_Executive = savedAinfNum2_Executive;
  ainfNum3_Executive = savedAinfNum3_Executive;
  ainfRes_Executive = savedAinfRes_Executive;


  // Econômico
  aadtNum1_Economic = savedAadtNum1_Economic;
  aadtNum2_Economic = savedAadtNum2_Economic;
  aadtNum3_Economic = savedAadtNum3_Economic;
  aadtRes_Economic = savedAadtRes_Economic;

  achdNum1_Economic = savedAchdNum1_Economic;
  achdNum2_Economic = savedAchdNum2_Economic;
  achdNum3_Economic = savedAchdNum3_Economic;
  achdRes_Economic = savedAchdRes_Economic;

  ainfNum1_Economic = savedAinfNum1_Economic;
  ainfNum2_Economic = savedAinfNum2_Economic;
  ainfNum3_Economic = savedAinfNum3_Economic;
  ainfRes_Economic = savedAinfRes_Economic;
  anumVoo++;
  aflight = anumVoo;
});

$('#decreasing').on('click', function() {
  if (afirstclick == 0) {
    ageId1Operation = parseInt(document.getElementById(`get1`).value);
    ageId2Operation = parseInt(document.getElementById(`get2`).value);
    ageId3Operation = parseInt(document.getElementById(`get3`).value);
    afirstclick++;

    console.log('=--------------');
    console.log(ageId1Operation);
    console.log(ageId2Operation);
    console.log(ageId3Operation);

    // Atribui os valores dos maiores blocos às variáveis que salvam o maior conjunto criado
    // Primeira classe saved
    savedAadtNum1_FirstClass = ageId1Operation - 3;
    savedAadtNum2_FirstClass = ageId2Operation - 3;
    savedAadtNum3_FirstClass = ageId3Operation - 3;
    savedAadtRes_FirstClass = (ageId3Operation/3) - 1;

    savedAchdNum1_FirstClass = ageId1Operation - 3;
    savedAchdNum2_FirstClass = ageId2Operation - 3;
    savedAchdNum3_FirstClass = ageId3Operation - 3;
    savedAchdRes_FirstClass = (ageId3Operation/3) - 1;

    savedAinfNum1_FirstClass = ageId1Operation - 3;
    savedAinfNum2_FirstClass = ageId2Operation - 3;
    savedAinfNum3_FirstClass = ageId3Operation - 3;
    savedAinfRes_FirstClass = (ageId3Operation/3) - 1;


    // Executivo saved
    savedAadtNum1_Executive = ageId1Operation - 3;
    savedAadtNum2_Executive = ageId2Operation - 3;
    savedAadtNum3_Executive = ageId3Operation - 3;
    savedAadtRes_Executive = (ageId3Operation/3) - 1;

    savedAchdNum1_Executive = ageId1Operation - 3;
    savedAchdNum2_Executive = ageId2Operation - 3;
    savedAchdNum3_Executive = ageId3Operation - 3;
    savedAchdRes_Executive = (ageId3Operation/3) - 1;

    savedAinfNum1_Executive = ageId1Operation - 3;
    savedAinfNum2_Executive = ageId2Operation - 3;
    savedAinfNum3_Executive = ageId3Operation - 3;
    savedAinfRes_Executive = (ageId3Operation/3) - 1;

    // Econômico saved
    savedAadtNum1_Economic = ageId1Operation - 3;
    savedAadtNum2_Economic = ageId2Operation - 3;
    savedAadtNum3_Economic = ageId3Operation - 3;
    savedAadtRes_Economic = (ageId3Operation/3) - 1;

    savedAchdNum1_Economic = ageId1Operation - 3;
    savedAchdNum2_Economic = ageId2Operation - 3;
    savedAchdNum3_Economic = ageId3Operation - 3;
    savedAchdRes_Economic = (ageId3Operation/3) - 1;

    savedAinfNum1_Economic = ageId1Operation - 3;
    savedAinfNum2_Economic = ageId2Operation - 3;
    savedAinfNum3_Economic = ageId3Operation - 3;
    savedAinfRes_Economic = (ageId3Operation/3) - 1;
  }
  if (aflight > 1) {
    aflight--;
    aadtNum1_FirstClass = aadtNum1_FirstClass - 3;
    aadtNum2_FirstClass = aadtNum2_FirstClass - 3;
    aadtNum3_FirstClass = aadtNum3_FirstClass - 3;
    aadtRes_FirstClass--;

    achdNum1_FirstClass = achdNum1_FirstClass - 3;
    achdNum2_FirstClass = achdNum2_FirstClass - 3;
    achdNum3_FirstClass = achdNum3_FirstClass - 3;
    achdRes_FirstClass--;

    ainfNum1_FirstClass = ainfNum1_FirstClass - 3;
    ainfNum2_FirstClass = ainfNum2_FirstClass - 3;
    ainfNum3_FirstClass = ainfNum3_FirstClass - 3;
    ainfRes_FirstClass--;

    // Executivo
    aadtNum1_Executive = aadtNum1_Executive - 3;
    aadtNum2_Executive = aadtNum2_Executive - 3;
    aadtNum3_Executive = aadtNum3_Executive - 3;
    aadtRes_Executive--;

    achdNum1_Executive = achdNum1_Executive - 3;
    achdNum2_Executive = achdNum2_Executive - 3;
    achdNum3_Executive = achdNum3_Executive - 3;
    achdRes_Executive--;

    ainfNum1_Executive = ainfNum1_Executive - 3;
    ainfNum2_Executive = ainfNum2_Executive - 3;
    ainfNum3_Executive = ainfNum3_Executive - 3;
    ainfRes_Executive--;

    // Econômico
    aadtNum1_Economic = aadtNum1_Economic - 3;
    aadtNum2_Economic = aadtNum2_Economic - 3;
    aadtNum3_Economic = aadtNum3_Economic - 3;
    aadtRes_Economic--;

    achdNum1_Economic = achdNum1_Economic - 3;
    achdNum2_Economic = achdNum2_Economic - 3;
    achdNum3_Economic = achdNum3_Economic - 3;
    achdRes_Economic--;

    ainfNum1_Economic = ainfNum1_Economic - 3;
    ainfNum2_Economic = ainfNum2_Economic - 3;
    ainfNum3_Economic = ainfNum3_Economic - 3;
    ainfRes_Economic--;
  }
});

$('#increasing').on('click', function(){
  if (afirstclick == 0) {
    ageId1Operation = parseInt(document.getElementById(`get1`).value);
    ageId2Operation = parseInt(document.getElementById(`get2`).value);
    ageId3Operation = parseInt(document.getElementById(`get3`).value);
    afirstclick++;

    console.log('=--------------');
    console.log(ageId1Operation);
    console.log(ageId2Operation);
    console.log(ageId3Operation);

    // Atribui os valores dos maiores blocos às variáveis que salvam o maior conjunto criado
    // Primeira classe saved
    savedAadtNum1_FirstClass = ageId1Operation - 3;
    savedAadtNum2_FirstClass = ageId2Operation - 3;
    savedAadtNum3_FirstClass = ageId3Operation - 3;
    savedAadtRes_FirstClass = (ageId3Operation/3) - 1;

    savedAchdNum1_FirstClass = ageId1Operation - 3;
    savedAchdNum2_FirstClass = ageId2Operation - 3;
    savedAchdNum3_FirstClass = ageId3Operation - 3;
    savedAchdRes_FirstClass = (ageId3Operation/3) - 1;

    savedAinfNum1_FirstClass = ageId1Operation - 3;
    savedAinfNum2_FirstClass = ageId2Operation - 3;
    savedAinfNum3_FirstClass = ageId3Operation - 3;
    savedAinfRes_FirstClass = (ageId3Operation/3) - 1;


    // Executivo saved
    savedAadtNum1_Executive = ageId1Operation - 3;
    savedAadtNum2_Executive = ageId2Operation - 3;
    savedAadtNum3_Executive = ageId3Operation - 3;
    savedAadtRes_Executive = (ageId3Operation/3) - 1;

    savedAchdNum1_Executive = ageId1Operation - 3;
    savedAchdNum2_Executive = ageId2Operation - 3;
    savedAchdNum3_Executive = ageId3Operation - 3;
    savedAchdRes_Executive = (ageId3Operation/3) - 1;

    savedAinfNum1_Executive = ageId1Operation - 3;
    savedAinfNum2_Executive = ageId2Operation - 3;
    savedAinfNum3_Executive = ageId3Operation - 3;
    savedAinfRes_Executive = (ageId3Operation/3) - 1;

    // Econômico saved
    savedAadtNum1_Economic = ageId1Operation - 3;
    savedAadtNum2_Economic = ageId2Operation - 3;
    savedAadtNum3_Economic = ageId3Operation - 3;
    savedAadtRes_Economic = (ageId3Operation/3) - 1;

    savedAchdNum1_Economic = ageId1Operation - 3;
    savedAchdNum2_Economic = ageId2Operation - 3;
    savedAchdNum3_Economic = ageId3Operation - 3;
    savedAchdRes_Economic = (ageId3Operation/3) - 1;

    savedAinfNum1_Economic = ageId1Operation - 3;
    savedAinfNum2_Economic = ageId2Operation - 3;
    savedAinfNum3_Economic = ageId3Operation - 3;
    savedAinfRes_Economic = (ageId3Operation/3) - 1;
  }
  if (aflight < anumVoo) {
    aflight++;
    aadtNum1_FirstClass = aadtNum1_FirstClass + 3;
    aadtNum2_FirstClass = aadtNum2_FirstClass + 3;
    aadtNum3_FirstClass = aadtNum3_FirstClass + 3;
    aadtRes_FirstClass++;

    achdNum1_FirstClass = achdNum1_FirstClass + 3;
    achdNum2_FirstClass = achdNum2_FirstClass + 3;
    achdNum3_FirstClass = achdNum3_FirstClass + 3;
    achdRes_FirstClass++;

    ainfNum1_FirstClass = ainfNum1_FirstClass + 3;
    ainfNum2_FirstClass = ainfNum2_FirstClass + 3;
    ainfNum3_FirstClass = ainfNum3_FirstClass + 3;
    ainfRes_FirstClass++;

    // Executivo
    aadtNum1_Executive = aadtNum1_Executive + 3;
    aadtNum2_Executive = aadtNum2_Executive + 3;
    aadtNum3_Executive = aadtNum3_Executive + 3;
    aadtRes_Executive++;

    achdNum1_Executive = achdNum1_Executive + 3;
    achdNum2_Executive = achdNum2_Executive + 3;
    achdNum3_Executive = achdNum3_Executive + 3;
    achdRes_Executive++;

    ainfNum1_Executive = ainfNum1_Executive + 3;
    ainfNum2_Executive = ainfNum2_Executive + 3;
    ainfNum3_Executive = ainfNum3_Executive + 3;
    ainfRes_Executive++;

    // Econômico
    aadtNum1_Economic = aadtNum1_Economic + 3;
    aadtNum2_Economic = aadtNum2_Economic + 3;
    aadtNum3_Economic = aadtNum3_Economic + 3;
    aadtRes_Economic++;

    achdNum1_Economic = achdNum1_Economic + 3;
    achdNum2_Economic = achdNum2_Economic + 3;
    achdNum3_Economic = achdNum3_Economic + 3;
    achdRes_Economic++;

    ainfNum1_Economic = ainfNum1_Economic + 3;
    ainfNum2_Economic = ainfNum2_Economic + 3;
    ainfNum3_Economic = ainfNum3_Economic + 3;
    ainfRes_Economic++;
  }
});
/*! fim operations pageD !*/
