function addDashes(f) //adicinar parenteses e barra no telefone fixo
{
f.value = f.value.slice(0,0)+"("+f.value.slice(0,2)+")"+f.value.slice(2,6)+"-"+f.value.slice(6,10);
}
