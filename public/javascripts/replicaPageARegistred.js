var numFamily = 1;
var numCompanions = 1;
var firstclick = 0;
var familyToReplica;
var companionsToReplica;


$( "#add-filhos" ).click(function() {
  if (firstclick == 0) {
    familyToReplica = parseInt(document.getElementById(`get1`).value);
    companionsToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    numFamily = familyToReplica-1;
    numCompanions = companionsToReplica-1;
  }
  $( "#familypageA" ).append('<br><br><div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="sondaughter" name = "client[children]" class="form-control" id="sondaughter" placeholder="Filho/a"></div><br><div class="classa"><input type="text" name = "client[birthDateChildren]" class="form-control" id="birthday" placeholder="Data de Nascimento"  onblur="addDashesNascimento(this)" maxlength="10" ></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[childrenPassport]" class="form-control" id="passport1" placeholder="Passaporte"></div><br><div class="classa"><input type="fullname" name = "client[childrenPassportValidation]" class="form-control" id="passportvalidation2"  onblur="addDashesNascimento(this)" maxlength="10" placeholder="Validade Passaporte"></div><br></div></div></div>');
});


$( "#add-companion" ).click(function(){
  if (firstclick == 0) {
    familyToReplica = parseInt(document.getElementById(`get1`).value);
    companionsToReplica = parseInt(document.getElementById(`get2`).value);
    firstclick++;

    numFamily = familyToReplica-1;
    numCompanions = companionsToReplica-1;
  }
  $( "#acompanhantespageA").append('<div class="container rowclass"><div class="row rowclass"><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[companionFullname]" class="form-control" id="fullname" placeholder="Nome Completo"></div><br><div class="classa"><input type="fullname"  name = "client[companionEmail]" class="form-control" id="email3" placeholder="Email"></div><br><div class="classa"><input type="fullname" name = "client[companionCellphone]" class="form-control" id="cellph2" placeholder="Celular" onblur="addDashesCel(this)" maxlength="13" ></div><br></div><div class="col-sm pageA-padding"><div class="classa"><input type="fullname" name = "client[birthDateCompanion]" class="form-control" id="birthday1" placeholder="Data de Nascimento" onblur="addDashesNascimento(this)" maxlength="10"></div><br><div class="classa"><input type="fullname" class="form-control" id="passport3" placeholder="Passaporte" name="client[companionPassport]"></div><br><div class="classa"><input type="fullname" name = "client[companionPassportValidation]" class="form-control" id="passportvalidation3" onblur="addDashesNascimento(this)" maxlength="10" placeholder="Validade Passaporte"></div><br></div></div></div>');

});
