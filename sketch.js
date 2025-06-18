let infoAgricultura, infoConsumo;
let inputSugestao, botaoEnviar;
let sugestoes = [];

function setup() {
  noCanvas(); // Página apenas com elementos HTML

  // Título principal
  createElement('h1', 'Vantagens e Benefícios da Agricultura Familiar para as Áreas Urbanas');

  // Seção - Agricultura Familiar
  infoAgricultura = createElement('h2', 'O que é Agricultura Familiar?');
  infoAgricultura.style('color', 'blue');
  createP('A agricultura familiar é realizada por pequenos produtores rurais que cultivam a terra com mão de obra, em sua maioria, da própria família. Ela utiliza práticas sustentáveis, como rotação de culturas, compostagem, preservação de nascentes e uso responsável dos recursos naturais.');
  createP('Além de fornecer alimentos de qualidade, livres ou com baixo uso de agrotóxicos, a agricultura familiar preserva a biodiversidade, valoriza os saberes tradicionais e fortalece a cultura local. Ela é responsável por grande parte dos alimentos que chegam às mesas das cidades, como frutas, verduras, legumes, ovos, carnes, leite, mel e grãos.');
  createP('Também desempenha um papel fundamental na geração de empregos no campo, na redução do êxodo rural e na promoção do desenvolvimento sustentável. Programas como o PRONAF oferecem crédito, assistência técnica e incentivos para fortalecer essa prática.');

  // Seção - Dependência Urbana da Agricultura Familiar
  infoConsumo = createElement('h2', 'Como a cidade depende da agricultura familiar?');
  infoConsumo.style('color', 'blue');
  createP('A agricultura familiar abastece as cidades com alimentos frescos, saudáveis e diversificados, fortalecendo a economia local e regional. Os mercados, feiras, sacolões e até as escolas públicas se beneficiam diretamente desse trabalho, através de programas como a merenda escolar (PNAE).');
  createP('Além disso, ela promove educação ambiental, valoriza a cultura alimentar local e incentiva práticas de consumo consciente. A proximidade entre produtores e consumidores ajuda a reduzir a emissão de poluentes, diminuindo o transporte de longas distâncias.');
  createP('Por sua vez, a cidade contribui com o campo oferecendo acesso a mercados consumidores, tecnologia, capacitação, assistência técnica, crédito, além de espaços de comercialização, como feiras e eventos culturais.');

  // Seção - Entrevistas
  let subtituloEntrevistas = createElement('h2', 'Entrevistas');
  subtituloEntrevistas.style('color', 'blue');

  createP('Entrevista com Agricultor:');
  createDiv('<iframe width="450" height="290" src="https://www.youtube.com/embed/dSUkpnMofZQ" title="Entrevista com Agricultor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  createP('Entrevista com Morador Urbano:');
  createDiv('<iframe width="450" height="290" src="https://www.youtube.com/embed/fyXa8xbX6SQ" title="Entrevista com Morador Urbano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Seção - Dicas Sustentáveis
  let subtituloSugestao = createElement('h2', 'Deixe sua dica sustentável:');
  subtituloSugestao.style('color', 'blue');

  inputSugestao = createInput();
  inputSugestao.attribute('placeholder', 'Escreva sua sugestão aqui...');
  botaoEnviar = createButton('Enviar');
  botaoEnviar.mousePressed(enviarSugestao);

  let subtituloLista = createElement('h3', 'Dicas da comunidade:');
  subtituloLista.style('color', 'blue');
}

function enviarSugestao() {
  const texto = inputSugestao.value();
  if (texto.trim() !== '') {
    sugestoes.push(texto);
    createP(`• ${texto}`);
    inputSugestao.value('');
  }
}


