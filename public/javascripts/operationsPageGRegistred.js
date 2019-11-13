
var anumSeguro = 1;
var anumTicket = 1;
var anumOutros = 1;

var asavedNumSeguro = 1;
var asavedNumTicket = 1;
var asavedNumOutros = 1;

// Variáveis que vem dos ids do front
// Adultos
var adtvalSafe;
var adtmultSafe;
var adtvalTicket;
var adtmultTicket;
var adtvalOther;
var adtmultOther;

// Crianças
var chdvalSafe;
var chdmultSafe;
var chdvalTicket;
var chdmultTicket;
var chdvalOther;
var chdmultOther;

// Bebês
var infvalSafe;
var infmultSafe;
var infvalTicket;
var infmultTicket;
var infvalOther;
var infmultOther;

var safeTotal = 0;
var safeTicket = 0;
var safeOther = 0;

var ainsurancefirstclick = 0;
var aticketfirstclick = 0;
var aouotrosfirstclick = 0;

var ainsuranceToReplica;
var aticketToReplica;
var aoutrosToReplica;

// lógica dos bloco de seguros - inicio
$("#add_seguros").click(function() {// Modelo da função de replicar
  if (ainsurancefirstclick == 0) {
    ainsuranceToReplica = parseInt(document.getElementById(`get1`).value);
    ainsurancefirstclick++;

    asavedNumSeguro = ainsuranceToReplica;
    anumSeguro = asavedNumSeguro;

  }
  else {
    asavedNumSeguro++;
    anumSeguro = asavedNumSeguro;
  }
});

$('#prev_seguro').on('click', function() {
  if (ainsurancefirstclick == 0) {
    ainsuranceToReplica = parseInt(document.getElementById(`get1`).value);
    ainsurancefirstclick++;

    asavedNumSeguro = ainsuranceToReplica-1;
  }
  if(anumSeguro > 1){
    anumSeguro--;
  }
});

$('#nxt_seguros').on('click', function() {
  if (ainsurancefirstclick == 0) {
    ainsuranceToReplica = parseInt(document.getElementById(`get1`).value);
    ainsurancefirstclick++;

    asavedNumSeguro = ainsuranceToReplica-1;
  }
  if(anumSeguro < asavedNumSeguro){
    anumSeguro++;
  }
});

function calcSafe(){
  adtvalSafe = parseInt(document.getElementById(`adt${anumSeguro}val`).value);
  adtmultSafe = parseInt(document.getElementById(`adt${anumSeguro}mult`).value);
  chdvalSafe = parseInt(document.getElementById(`chd${anumSeguro}val`).value);
  chdmultSafe = parseInt(document.getElementById(`chd${anumSeguro}mult`).value);
  infvalSafe = parseInt(document.getElementById(`inf${anumSeguro}val`).value);
  infmultSafe = parseInt(document.getElementById(`inf${anumSeguro}mult`).value);
  safeTotal = (adtvalSafe*adtmultSafe)+(chdvalSafe*chdmultSafe)+(infvalSafe*infmultSafe);
  document.getElementById(`total${anumSeguro}`).value = safeTotal;
}
// lógica dos bloco de seguros - fim


// lógica dos bloco de tickets - início
$("#add_tickets").click(function() {// Modelo da função de replicar
  if (aticketfirstclick == 0) {
    aticketToReplica = parseInt(document.getElementById(`get2`).value);
    aticketfirstclick++;

    asavedNumTicket = aticketToReplica;
    anumTicket = asavedNumTicket;

  }
  else {
    asavedNumTicket++;
    anumTicket = asavedNumTicket;
  }
});

$('#prev_ticket').on('click', function() {
  if (aticketfirstclick == 0) {
    aticketToReplica = parseInt(document.getElementById(`get2`).value);
    aticketfirstclick++;

    asavedNumTicket = aticketToReplica-1;
  }
  if(anumTicket > 1){
    anumTicket--;
  }
});

$('#nxt_ticket').on('click', function() {
  if (aticketfirstclick == 0) {
    aticketToReplica = parseInt(document.getElementById(`get2`).value);
    aticketfirstclick++;

    asavedNumTicket = aticketToReplica-1;
  }
  if(anumTicket < asavedNumTicket){
    anumTicket++;
  }
});

function calcTicket(){
  adtvalTicket = parseInt(document.getElementById(`adt${anumTicket}valTicket`).value);
  adtmultTicket = parseInt(document.getElementById(`adt${anumTicket}multTicket`).value);
  chdvalTicket = parseInt(document.getElementById(`chd${anumTicket}valTicket`).value);
  chdmultTicket = parseInt(document.getElementById(`chd${anumTicket}multTicket`).value);
  infvalTicket = parseInt(document.getElementById(`inf${anumTicket}valTicket`).value);
  infmultTicket = parseInt(document.getElementById(`inf${anumTicket}multTicket`).value);
  safeTicket = (adtvalTicket*adtmultTicket)+(chdvalTicket*chdmultTicket)+(infvalTicket*infmultTicket);
  document.getElementById(`totalTicket${anumTicket}`).value = safeTicket;
}
// lógica dos bloco de tickets - fim


// lógica dos bloco de outro - início
$("#add_others").click(function() {// Modelo da função de replicar
  if (aouotrosfirstclick == 0) {
    aoutrosToReplica = parseInt(document.getElementById(`get3`).value);
    aouotrosfirstclick++;

    asavedNumOutros = aoutrosToReplica;
    anumOutros = asavedNumOutros;

  }
  else {
    asavedNumOutros++;
    anumOutros = asavedNumOutros;
  }
});

$('#prev_other').on('click', function() {
  if (aouotrosfirstclick == 0) {
    aoutrosToReplica = parseInt(document.getElementById(`get3`).value);
    aouotrosfirstclick++;

    asavedNumOutros = aoutrosToReplica-1;
  }
  if(anumOutros > 1){
    anumOutros--;
  }
});

$('#nxt_other').on('click', function() {
  if (aouotrosfirstclick == 0) {
    aoutrosToReplica = parseInt(document.getElementById(`get3`).value);
    aouotrosfirstclick++;

    asavedNumOutros = aoutrosToReplica-1;
  }
  if(anumOutros < asavedNumOutros){
    anumOutros++;
  }
});

function calcOther(){
  adtvalOther = parseInt(document.getElementById(`adt${anumOutros}valOther`).value);
  adtmultOther = parseInt(document.getElementById(`adt${anumOutros}multOther`).value);
  chdvalOther = parseInt(document.getElementById(`chd${anumOutros}valOther`).value);
  chdmultOther = parseInt(document.getElementById(`chd${anumOutros}multOther`).value);
  infvalOther = parseInt(document.getElementById(`inf${anumOutros}valOther`).value);
  infmultOther = parseInt(document.getElementById(`inf${anumOutros}multOther`).value);
  safeOther = (adtvalOther*adtmultOther)+(chdvalOther*chdmultOther)+(infvalOther*infmultOther);
  document.getElementById(`totalOther${anumOutros}`).value = safeOther;
}
// lógica dos bloco de outro - fim
