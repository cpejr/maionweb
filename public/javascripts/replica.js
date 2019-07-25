$( "#add-campo-acompanhantes" ).click(function() {
  $( "#add_acompanhantes" ).append( '<select class="form-control" id="select_da_idade"><option selected>Selecione a faixa etária</option><option>Adulto<option/><option>CHD<option/><option>INF<option/><select/>' );
});

$( "#add-campo-paises" ).click(function() {
  $( "#location" ).append( '<input type="text" name="" placeholder="Nome do país" class="form-control">' );
});

$( "#add-campo-cidades" ).click(function() {
  $( "#location" ).append( '<input type="text" name="" placeholder="Nome da cidade da viagem" class="form-control">' );
});
