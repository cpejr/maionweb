$( "#add-campo-acompanhantes" ).click(function() {
  $( "#add_acompanhantes" ).append( '<select class="form-control" id="select_da_idade"><option selected>Selecione a faixa etária</option><option>Adulto<option/><option>CHD<option/><option>INF<option/><select/>' );
});

$( ".add-campo-paises" ).click(function() {
  $( ".location" ).append( '<div class="dinamic_spec"><label>País</label><input type="text" name="budget[location][country]" placeholder="Nome do país" class="form-control"><button type="button" class="add_buttons add-campo-paises"> + Países</button><div class="form-group"><label>Cidade</label><input type="text" name="budget[location][cities]" placeholder="Nome da cidade da viagem" class="form-control"></div><button type="button" class="add_buttons add-campo-cidades"> + Cidades</button></div>' );
});

$( ".add-campo-cidades" ).click(function() {
  $( ".location_cidades" ).append( '<input type="text" name="budget[location][cities]" placeholder="Nome da cidade da viagem" class="form-control">' );
});

$( ".add_dias" ).click(function() {
  $( ".tabela_roteiro" ).append( '<tr><th><h2 >Dia</h2></th><th><input type="text" name="" placeholder="Campo livre" class="form-control"></th><th><input type="text" name="" placeholder="Dicas" class="form-control"></th></tr>' );
});

$( "#add-acompanhantes-voo" ).click(function() {
  $( "#add_acompanhantesvoo" ).append('<br>');
  $( "#add_acompanhantesvoo" ).append('<input class="form-check-input" type="checkbox">');
  $( "#add_acompanhantesvoo" ).append('<input placeholder="Acompanhante">');
  $( "#add_acompanhantesvoo" ).append('<br>');
});

$( "#add-voo" ).click(function() {
  $( "#add_voo" ).append('<div class="col-2">');
  $( "#add_voo" ).append('<input class="form-check-input" type="checkbox">');
  $( "#add_voo").append('<input placeholder="Acompanhante">');
  $( "#add_voo" ).append('<div class="col-5">');
  $( "#add_voo" ).append('<input type="text" placeholder="Origem" name="flight[from]" class="date start-date"/>');
  $( "#add_voo" ).append('<i class="fa fa-plane"></i>');
  $( "#add_voo" ).append('<input type="text" placeholder="Destino" class="date start-date"/><br><br>');
  $( "#add_voo" ).append('<input type="date" placeholder="dd/mm/aa" class="date start-date"/>');
  $( "#add_voo" ).append('<i class="fa fa-calendar"></i>');
  $( "#add_voo" ).append('<input type="date" placeholder="dd/mm/aa" class="date start-date"/>');
  $( "#add_voo" ).append('<div class="col-5">');
  $( "#add_voo" ).append('Adulto: <input type="text" id="num1" onblur="calcular()" placeholder="Valor ida" class="valor"/><i class="fa fa-money"></i><input type="text" id="num2" onblur="calcular()" placeholder="Valor Volta" class="valor"/><span>&#61;</span><input type="text" id="result" onblur="calcular()" placeholder="Valor Total" class="valor"/><span id="result"></span><br><br>');
  $( "#add_voo" ).append('CHD :<input type="text" id="num1" onblur="calcular()" placeholder="Valor ida" class="valor"/>  <i class="fa fa-money"></i><input type="text" id="num2" onblur="calcular()" placeholder="Valor Volta" class="valor"/><span>&#61;</span><input type="text" id="result" onblur="calcular()" placeholder="Valor Total" class="valor"/><span id="result"></span><br><br>');
  $( "#add_voo" ).append('INF :<input type="text" id="num1" onblur="calcular()" placeholder="Valor ida" class="valor"/>  <i class="fa fa-money"></i><input type="text" id="num2" onblur="calcular()" placeholder="Valor Volta" class="valor"/><span>&#61;</span><input type="text" id="result" onblur="calcular()" placeholder="Valor Total" class="valor"/><span id="result"></span><br><br>');
});
