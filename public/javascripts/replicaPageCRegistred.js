var planned_day = 1;
var saved_day = 1;
var firstClick = 0;
var dayToReplica;

$( "#add_dias" ).click(function() {
  if (firstClick == 0) {
    dayToReplica = parseInt(document.getElementById(`get1`).value);
    firstClick++;

    saved_day = dayToReplica;
    planned_day = saved_day;
  }
  else {
    saved_day++;
    planned_day = saved_day;
  }
  $( "#testedacamila" ).append( '<div class="dinamic_spec_pagec"><h1>Roteiro:</h1><div class="container rowclass"><div class="row rowclass marginPageC"><div class="col-sm-auto-pageC rowclass">Dia'+planned_day+' </div><div class="col-sm-auto-pageC rowclass"><input type="birth" name="budget[planDate]" class="form-control classCinput2" placeholder="Data do dia" maxlength="10" onblur="addDashesNascimento(this)"></div><div class="col-sm-auto-pageC rowclass"><input placeholder="Cidade" name="budget[planCity]" class= "form-control classCinput2"></div><div class="col-sm-auto-pageC rowclass"><input placeholder="País" name="budget[planCountry]" class="form-control classCinput2"></div></div><br><div class="form-group "><textarea class="form-control" name="budget[planFreeField]" placeholder="Campo Livre" rows="3"></textarea></div><div class=""><label>Apagar?</label><input type="radio" name="budget[deleting] type'+planned_day+'" value="1" onclick="return confirm("Deseja mesmo excluir o dia '+planned_day+' ?")">Sim</input><input type="radio" name="budget[deleting] type'+planned_day+'" value="0" checked>Não</input></div></div></div>' );
});
