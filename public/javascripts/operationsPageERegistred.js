var anumhotel = 1;
var savedanumhotel = 1;
var afirstClick = 0;
var ahotelToReplica;

var vApto1;
var nDiarias1;
var nAptos1;
var somaHotel1 = 0;

var vApto2;
var nDiarias2;
var nAptos2;
var somaHotel2 = 0;

var vApto3;
var nDiarias3;
var nAptos3;
var somaHotel3 = 0;

$("#add-hotel").click(function() {
  if (afirstClick == 0) {
    ahotelToReplica = parseInt(document.getElementById(`get1`).value);
    afirstClick++;
    console.log(ahotelToReplica);
    savedanumhotel = ahotelToReplica;
    anumhotel = savedanumhotel;
  }
  else {
    savedanumhotel++;
    anumhotel = savedanumhotel;
  }
});

$('#prev_hotel').on('click', function() {
  if (afirstClick == 0) {
    ahotelToReplica = parseInt(document.getElementById(`get1`).value);
    afirstClick++;
    savedanumhotel = ahotelToReplica-1;
  }
  if (anumhotel > 1) {
    anumhotel--;
  }
});

$('#nxt_hotel').on('click', function() {
  if (afirstClick == 0) {
    ahotelToReplica = parseInt(document.getElementById(`get1`).value);
    afirstClick++;
    savedanumhotel = ahotelToReplica-1;
  }
  if (anumhotel < savedanumhotel) {
    anumhotel++;
  }
});

function calcHotel(){

        vApto1 = document.getElementById(`vApto1${anumhotel}`).value;
        nDiarias1 = document.getElementById(`nDiarias1${anumhotel}`).value;
        nAptos1 = document.getElementById(`nAptos1${anumhotel}`).value;
        somaHotel1 = vApto1 * nDiarias1 * nAptos1;
        document.getElementById(`vTotal1${anumhotel}`).value = somaHotel1;

        vApto2 = document.getElementById(`vApto2${anumhotel}`).value;
        nDiarias2 = document.getElementById(`nDiarias2${anumhotel}`).value;
        nAptos2 = document.getElementById(`nAptos2${anumhotel}`).value;
        somaHotel2 = vApto2 * nDiarias2 * nAptos2;
        document.getElementById(`vTotal2${anumhotel}`).value = somaHotel2;

        vApto3 = document.getElementById(`vApto3${anumhotel}`).value;
        nDiarias3 = document.getElementById(`nDiarias3${anumhotel}`).value;
        nAptos3 = document.getElementById(`nAptos3${anumhotel}`).value;
        somaHotel3 = vApto3 * nDiarias3 * nAptos3;
        document.getElementById(`vTotal3${anumhotel}`).value = somaHotel3;
}
