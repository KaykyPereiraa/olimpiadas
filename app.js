function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = '';
    let tags = "";
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase( )
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            /*
       Cria um novo elemento div para cada item da pesquisa, 
       preenchendo com os dados do item (título, descrição, link).
       */
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informaçôes</a>
        </div>
      `;
        }
      
      
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados
  }



