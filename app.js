function pesquisar() {

  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-de-pesquisa").value
  console.log(campoPesquisa)

  if (!campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
  }

  let resultados = "";
  let titulo = "";
  let descricao = "";

  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()

      if (dado.titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

          resultados += `
      <div class="item-resultado"> 
        <h2>
          <p>${dado.titulo}</p>
        </h2>
        <img class="imagem-redonda" src=${dado.imagem} class="foto" alt="Imagem de Quem Somos?">
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Saiba mais</a>
      </div>
    `
      }
  }
  section.innerHTML = resultados;
}