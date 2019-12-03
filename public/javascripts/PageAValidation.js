var current_cpf;

window.onload = function getInfo(){
  const current_cpf_onload = document.getElementById(`register`).value;
  current_cpf = current_cpf_onload;
}

$("#validation").click(async function(){
  const cpf_from_user = document.getElementById(`register`).value;
  const email = document.getElementById(`email`).value;
  const email_confirmation = document.getElementById(`email_confirmation`).value;

  var const1 = 1;
  var const2 = 1;

  if(email != email_confirmation){
    alert('Emails diferentes');
    const2 = 0;
  }


  let cpfs = await $.get('/registred/validation');
  console.log(cpfs);
    for (var i = 0; i < cpfs.length; i++) {
      if (cpfs[i] == cpf_from_user && cpfs[i] != current_cpf) {
        alert('CPF já existente!');
        const1 = 0;
        break;
      }
    }

  if (const2 == 1 && const1 == 1) {
    alert('Dados conferidos e corretos!')
    $("#post_button").removeClass("invDiv");
    $('#validation').addClass("invDiv");
  }
});
