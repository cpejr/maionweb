var numFamily = 1;
var numCompanions = 1;
var firstclick = 0;
var familyToReplica;
var companionsToReplica;
const sep = "'";


$( "#add-filhos" ).click(function() {
  if (firstclick == 0) {
    familyToReplica = parseInt(document.getElementById(`get1`).value);
    companionsToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    numFamily = familyToReplica;
    numCompanions = companionsToReplica;
  }
  $( "#familypageA" ).append('<br><br><div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><h6>Nome do/a filho/a</h6><input type="sondaughter" name = "client[children]" class="form-control" id="sondaughter" placeholder="Filho/a"></div><br><label for="">Data de nascimento</label><div class="classa"><input type="date" name = "client[birthDateChildren]" class="form-control" id="birthday" placeholder="Data de Nascimento" maxlength="10" ></div><br></div><div class="col-sm pageA-padding"><div class="classa"><label>Nome do/a filho/a</label> <label>Passaporte do/a filho/a</label> <input type="fullname" name = "client[childrenPassport]" class="form-control" id="passport1" placeholder="Passaporte"></div><br><label for="">Validade do passaporte</label><div class="classa"><input type="date" name = "client[childrenPassportValidation]" class="form-control" id="passportvalidation2"  maxlength="10" placeholder="Validade Passaporte"></div><br></div></div><label>Apagar?</label> <input type="radio" name="client[deleting_chd] type_chd'+numFamily+'" value="1" onclick="return confirm('+sep+'Deseja mesmo excluir o/a {{children}} ?'+sep+')">Sim</input> <input type="radio" name="client[deleting_chd] type_chd'+numFamily+'" value="0" checked>Não</input></div>');

  numFamily++;

});


$( "#add-companion" ).click(function(){
  if (firstclick == 0) {
    familyToReplica = parseInt(document.getElementById(`get1`).value);
    companionsToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    numFamily = familyToReplica;
    numCompanions = companionsToReplica;
  }
  $( "#acompanhantespageA").append('<div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"> <label>Nome do/a acompanhante</label> <input type="fullname" name = "client[companionFullname]" class="form-control" id="fullname" placeholder="Nome Completo"></div><br><div class="classa"> <label>Email do/a acompanhante</label> <input type="fullname"  name = "client[companionEmail]" class="form-control" id="email3" placeholder="Email"><br><label for="">Data de nascimento</label><div class="classa"><input type="date" name = "client[birthDateCompanion]" class="form-control" id="birthday1" placeholder="Data de Nascimento" maxlength="10"></div><br></div><br></div><div class="col-sm pageA-padding"><div class="classa"> <label>Celular do/a acompanhante</label> <input type="fullname" name = "client[companionCellphone]" class="form-control" id="cellph2" placeholder="Celular" onblur="addDashesCel(this)" maxlength="13" ></div><br><div class="classa"> <label>Passaporte do/a acompanhante</label> <input type="fullname" class="form-control" id="passport3" placeholder="Passaporte" name="client[companionPassport]"></div><br><label for="">Validade do passaporte</label><div class="classa"><input type="date" name = "client[companionPassportValidation]" class="form-control" id="passportvalidation3" maxlength="10" placeholder="Validade Passaporte"></div><br></div></div><label>Apagar?</label> <input type="radio" name="client[deleting_comp] type_comp'+numCompanions+'" value="1" onclick="return confirm('+sep+'Deseja mesmo excluir ?'+sep+')">Sim</input> <input type="radio" name="client[deleting_comp] type_comp'+numCompanions+'" value="0" checked>Não</input></div>');

  numCompanions++;

});
