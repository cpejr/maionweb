$( "#add-campo-acompanhantes" ).click(function() {
  $( "#add_acompanhantes" ).append( '<select class="form-control" id="select_da_idade"><option selected>Selecione a faixa etária</option><option>Adulto<option/><option>CHD<option/><option>INF<option/><select/>' );
});

$( ".add-campo-paises" ).click(function() {
  $( ".location" ).append( '<div class="dinamic_spec"><label>País</label><input type="text" name="budget[location][country]" placeholder="Nome do país" class="form-control"><button type="button" class="add_buttons add-campo-paises"> + Países</button><div class="form-group"><label>Cidade</label><input type="text" name="budget[location][cities]" placeholder="Nome da cidade da viagem" class="form-control"></div><button type="button" class="add_buttons add-campo-cidades"> + Cidades</button></div>' );
});

$( ".add-campo-cidades" ).click(function() {
  $( ".dinamic_spec" ).append( '<input type="text" name="budget[location][cities]" placeholder="Nome da cidade da viagem" class="form-control">' );
});

$( ".add_dias" ).click(function() {
  $( ".tabela_roteiro" ).append( '<tr><th><h2 >Dia</h2></th><th><input type="text" name="" placeholder="Campo livre" class="form-control"></th><th><input type="text" name="" placeholder="Dicas" class="form-control"></th></tr>' );
});
