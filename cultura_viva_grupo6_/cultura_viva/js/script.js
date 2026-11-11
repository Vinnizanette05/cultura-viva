// Conteúdo inicial do catálogo cultural
const conteudos = [
  { titulo: "Literatura: novas histórias", categoria: "literatura", imagem: "livros.jpg", descricao: "Explore livros e descubra histórias que despertam a imaginação." },
  { titulo: "Cinema e clássicos", categoria: "cinema", imagem: "cinema.jpg", descricao: "Conheça filmes marcantes e diferentes estilos de cinema." },
  { titulo: "Música para descobrir", categoria: "musica", imagem: "musica.jpg", descricao: "Explore sons, ritmos e artistas de diferentes estilos." },
  { titulo: "Arte e criatividade", categoria: "arte", imagem: "arte.jpg", descricao: "Inspire-se com pinturas, técnicas e expressões artísticas." },
  { titulo: "Experiência ao vivo", categoria: "musica", imagem: "show.jpg", descricao: "A música ao vivo aproxima pessoas e cria memórias." },
  { titulo: "Visite um museu", categoria: "arte", imagem: "museu.jpg", descricao: "Conheça obras, esculturas e exposições culturais." },
  { titulo: "O mundo do teatro", categoria: "arte", imagem: "teatro.jpg", descricao: "Descubra histórias contadas por meio da interpretação." },
  { titulo: "Patrimônio histórico", categoria: "arte", imagem: "patrimonio.jpg", descricao: "Valorize construções e espaços que contam nossa história." },
  { titulo: "Cultura e natureza", categoria: "arte", imagem: "natureza.jpg", descricao: "Conheça iniciativas culturais ligadas ao meio ambiente." },
  { titulo: "Aprender sempre", categoria: "literatura", imagem: "educacao.jpg", descricao: "A educação e a leitura abrem caminhos para novas ideias." },
  { titulo: "Sabores do Brasil", categoria: "arte", imagem: "gastronomia.jpg", descricao: "A gastronomia também representa tradição e cultura." },
  { titulo: "Cultura pelo mundo", categoria: "arte", imagem: "viagem.jpg", descricao: "Explore lugares, monumentos e diferentes culturas." }
];

const lista = document.getElementById("lista-catalogo");
const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");

function exibirConteudos() {
  const termo = pesquisa.value.trim().toLocaleLowerCase("pt-BR");
  const filtro = categoria.value;
  const filtrados = conteudos.filter(item => {
    const correspondeTexto = (item.titulo + " " + item.descricao).toLocaleLowerCase("pt-BR").includes(termo);
    const correspondeCategoria = filtro === "todos" || item.categoria === filtro;
    return correspondeTexto && correspondeCategoria;
  });

  lista.innerHTML = "";
  if (filtrados.length === 0) {
    lista.innerHTML = '<p class="sem-resultados">Nenhum conteúdo encontrado. Tente outra pesquisa.</p>';
    return;
  }

  filtrados.forEach(item => {
    const article = document.createElement("article");
    article.className = "card";
    const img = document.createElement("img");
    img.src = "img/" + item.imagem;
    img.alt = item.titulo;
    img.loading = "lazy";
    const conteudo = document.createElement("div");
    conteudo.className = "card-conteudo";
    const tag = document.createElement("span");
    tag.className = "card-categoria";
    tag.textContent = item.categoria;
    const titulo = document.createElement("h3");
    titulo.textContent = item.titulo;
    const descricao = document.createElement("p");
    descricao.textContent = item.descricao;
    conteudo.append(tag, titulo, descricao);
    article.append(img, conteudo);
    lista.appendChild(article);
  });
}

pesquisa.addEventListener("input", exibirConteudos);
categoria.addEventListener("change", exibirConteudos);
exibirConteudos();

// O formulário demonstra o recebimento de uma sugestão no próprio navegador.
document.getElementById("form-sugestao").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const titulo = document.getElementById("titulo").value.trim();
  document.getElementById("mensagem").textContent =
    `Obrigado, ${nome}! Sua sugestão "${titulo}" foi registrada nesta demonstração.`;
  this.reset();
});
