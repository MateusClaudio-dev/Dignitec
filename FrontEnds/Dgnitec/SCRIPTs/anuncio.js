// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');
//   if (form) {
//       form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const formData = new FormData(form); // envia todos os campos + arquivo

//     try {
//       const response = await fetch('http://localhost:3000/anuncios', {
//         method: 'POST',
//         body: formData // não coloca headers aqui
//       });

//       const result = await response.json();
//       alert(result.message);
//       form.reset();
//     } catch (error) {
//       console.error('Erro ao cadastrar:', error);
//       alert('Erro ao cadastrar o anúncio.');
//     }
//   });
//   }

// });

// async function pegarDados() {
//   try {
//     const resposta = await fetch("http://localhost:3000/anuncios");
//     const conteudo = await resposta.json();
//     const container = document.querySelector("#lista-anuncios");

//     if (!container) return;

//     container.innerHTML = conteudo.map(anuncio => `
//       <div class="anuncio">
//         ${anuncio.imagemCapa ? `<img class="img-anuncio" src="http://localhost:3000/uploads/${anuncio.imagemCapa}" width="200">` : ''}
//         <h2 class="nomeProjeto">${anuncio.nomeProjeto}</h2>
//         <p><strong>Localizção: </strong>${anuncio.localizacao}</p>
//         <p class"descricao">${anuncio.descricao}</p>
//         <button class"contatos"> ${anuncio.contato}</p></button>
//       </div>
//     `).join("");
//   } catch (error) {
//     console.error("Erro ao buscar anúncios:", error);
//   }
// }

// pegarDados();

class Anuncio {
  constructor(dados) {
    this.nomeProjeto = dados.nomeProjeto;
    this.localizacao = dados.localizacao;
    this.descricao = dados.descricao;
    this.contato = dados.contato;
    this.imagemCapa = dados.imagemCapa;
  }

  // Método responsável por gerar o HTML desse anúncio específico
  renderizar() {
    const urlImagem = this.imagemCapa ? `http://localhost:3000/uploads/${this.imagemCapa}` : '';
    
    return `
      <div class="anuncio">
        ${urlImagem ? `<img class="img-anuncio" src="${urlImagem}"  alt="Capa do projeto">` : ''}
        <h2 class="nomeProjeto">${this.nomeProjeto}</h2>
        <p class="descricao">${this.descricao}</p>
        <p><strong>Localização: </strong>${this.localizacao}</p>
        <button class="contatos">${this.contato}</button>
      </div>
    `;
  }
}

class AnuncioService {
  constructor() {
    this.urlApi = 'http://localhost:3000/anuncios';
    this.container = document.querySelector("#lista-anuncios");
    this.form = document.querySelector('form');
  }

  // Inicializa os eventos da página
  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.cadastrarAnuncio(e));
    }
    this.pegarDados();
  }

  // Método para buscar os dados na API
  async pegarDados() {
    if (!this.container) return;

    try {
      const resposta = await fetch(this.urlApi);
      const anunciosDados = await resposta.json();

      // Transforma os dados puros da API em Objetos da classe Anuncio
      const listaAnuncios = anunciosDados.map(dado => new Anuncio(dado));

      // Renderiza todos na tela
      this.container.innerHTML = listaAnuncios.map(anuncio => anuncio.renderizar()).join("");
    } catch (error) {
      console.error("Erro ao buscar anúncios:", error);
    }
  }

  // Método para enviar o formulário
  async cadastrarAnuncio(event) {
    event.preventDefault();
    const formData = new FormData(this.form);

    try {
      const response = await fetch(this.urlApi, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      alert(result.message);
      this.form.reset();
      this.pegarDados(); // Atualiza a lista na tela automaticamente após cadastrar!
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar o anúncio.');
    }
  }
}

// --- INSTANCIAÇÃO E EXECUÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
  const sistemaAnuncios = new AnuncioService();
  sistemaAnuncios.init();
});
