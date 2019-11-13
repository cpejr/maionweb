function addDashesFixo(f) //adicinar parenteses e barra no telefone fixo
{
    f.value = f.value.replace(/\D/g, '');

    f.value = f.value.slice(0,0)+"("+f.value.slice(0,2)+")"+f.value.slice(2,6)+"-"+f.value.slice(6,10);
}


function addDashesCel(f) //adicionar parenteses e barra em celular
{
    f.value = f.value.replace(/\D/g, '');

    f.value = f.value.slice(0,0)+"("+f.value.slice(0,2)+")"+f.value.slice(2,7)+"-"+f.value.slice(7,11);
}


function addDashesCPF(f) //adicionar pontos no cpf
{
    f.value = f.value.replace(/\D/g, '');

    f.value = f.value.slice(0,3)+"."+f.value.slice(3,6)+"."+f.value.slice(6,9)+"-"+f.value.slice(9,11);
}


function addDashesCep(f) //adicionar pontos no cep
{
    f.value = f.value.replace(/\D/g, '');

    f.value = f.value.slice(0,2)+"."+f.value.slice(2,5)+"-"+f.value.slice(5,8);
}


function addDashesNascimento(f) //adicionar barras na data de nascimento
{
    f.value = f.value.replace(/\D/g, '');

    f.value = f.value.slice(0,2)+"/"+f.value.slice(2,4)+"/"+f.value.slice(4,8);
}


function addDashesPassport(f) //adicionar barras na data de nascimento
{
    f.value = f.value.replace(/\D/g, '');

    f.value = f.value.slice(0,2)+"/"+f.value.slice(2,4)+"/"+f.value.slice(4,8);
}
