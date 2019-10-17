/*! inicio operations pageD !*/
var aadtNum1 = 1;
var aadtNum2 = 2;
var aadtNum3 = 3;
var aadtRes = 1;
function calcularAdt(){
    var adtVal1 = parseInt(document.getElementById(`adt${aadtNum1}`).value);
    var adtVal2 = parseInt(document.getElementById(`adt${aadtNum2}`).value);
    var adtVal3 = parseInt(document.getElementById(`adt${aadtNum3}`).value);
    document.getElementById(`adtResult${aadtRes}`).value = adtVal1 + adtVal2 + adtVal3;
}

var achdNum1 = 1;
var achdNum2 = 2;
var achdNum3 = 3;
var achdRes = 1;
function calcularChd(){
    var chdVal1 = parseInt(document.getElementById(`chd${achdNum1}`).value);
    var chdVal2 = parseInt(document.getElementById(`chd${achdNum2}`).value);
    var chdVal3 = parseInt(document.getElementById(`chd${achdNum3}`).value);
    document.getElementById(`chdResult${achdRes}`).value = chdVal1 + chdVal2 + chdVal3;
}

var ainfNum1 = 1;
var ainfNum2 = 2;
var ainfNum3 = 3;
var ainfRes = 1;
function calcularInf(){
    var infVal1 = parseInt(document.getElementById(`inf${ainfNum1}`).value);
    var infVal2 = parseInt(document.getElementById(`inf${ainfNum2}`).value);
    var infVal3 = parseInt(document.getElementById(`inf${ainfNum3}`).value);
    document.getElementById(`infResult${ainfRes}`).value = infVal1 + infVal2 + infVal3;
}

var atotalRes = 1;
function total(){
  var total1 = parseInt(document.getElementById(`adtResult${aadtRes}`).value);
  var total2 = parseInt(document.getElementById(`chdResult${achdRes}`).value);
  var total3 = parseInt(document.getElementById(`infResult${ainfRes}`).value);
  document.getElementById(`totalResult${atotalRes}`).value = total1 + total2 + total3;
}

var anum = 2;
var aday = 1;
$('#add_country').on('click', function() {
  aday = anum;
  anum++;

  aadtNum1 = aadtNum1 + 3;
  aadtNum2 = aadtNum2 + 3;
  aadtNum3 = aadtNum3 + 3;
  aadtRes++;

  achdNum1 = achdNum1 + 3;
  achdNum2 = achdNum2 + 3;
  achdNum3 = achdNum3 + 3;
  achdRes++;

  ainfNum1 = ainfNum1 + 3;
  ainfNum2 = ainfNum2 + 3;
  ainfNum3 = ainfNum3 + 3;
  ainfRes++;

  atotalRes++;
});
$('#increasing').on('click', function() {
  if(aday > 1){
    aday--;

    aadtNum1 = aadtNum1 - 3;
    aadtNum2 = aadtNum2 - 3;
    aadtNum3 = aadtNum3 - 3;
    aadtRes--;

    achdNum1 = achdNum1 - 3;
    achdNum2 = achdNum2 - 3;
    achdNum3 = achdNum3 - 3;
    achdRes--;

    ainfNum1 = ainfNum1 - 3;
    ainfNum2 = ainfNum2 - 3;
    ainfNum3 = ainfNum3 - 3;
    ainfRes--;

    atotalRes--;
  }
});

$('#decreasing').on('click', function() {
  if(aday < anum-1){
    aday++;

    aadtNum1 = aadtNum1 + 3;
    aadtNum2 = aadtNum2 + 3;
    aadtNum3 = aadtNum3 + 3;
    aadtRes++;

    achdNum1 = achdNum1 + 3;
    achdNum2 = achdNum2 + 3;
    achdNum3 = achdNum3 + 3;
    achdRes++;

    ainfNum1 = ainfNum1 + 3;
    ainfNum2 = ainfNum2 + 3;
    ainfNum3 = ainfNum3 + 3;
    ainfRes++;

    atotalRes++;
  }
});
/*! fim operations pageD !*/

/*! INICIO OPERATIONS PAGE F !*/


/*! FIM OPERATIONS PAGE F !*/
