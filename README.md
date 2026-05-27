# 🤝 DIGNITEc - Conectando Comunidades e Empreendedores

O **DIGNITEc** é uma aplicação Full-Stack em desenvolvimento que visa fortalecer a economia local e o ecossistema social de bairros. A plataforma permite o cadastro e a visualização tanto de **ações comunitárias** quanto de **pequenos empreendedores locais**. Os usuários podem divulgar suas iniciativas preenchendo um formulário com descrição, localização, contato e uma imagem de capa, e ver esses anúncios renderizados dinamicamente na tela de listagem.

Este projeto marca o meu início no desenvolvimento Front-end e a minha primeira aventura desbravando o ecossistema Back-end! 🚀

---

## 📸 Demonstração da Interface
<img width="314" height="652" alt="image" src="https://github.com/user-attachments/assets/74d4859d-dc9f-423a-bbad-28c2a2f1cc71" />
<img width="322" height="660" alt="image" src="https://github.com/user-attachments/assets/8d45c5ae-b7a6-4984-b2ca-4bb463dc3552" />
<img width="315" height="653" alt="image" src="https://github.com/user-attachments/assets/0edc41d9-5271-40b2-9a4f-d0ba2e4ab17d" />
<!--<img width="407" height="860" alt="image" src="https://github.com/user-attachments/assets/46636242-2d69-485a-9ca8-8f1b91cc6956"/>-->



---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
* **HTML5:** Estruturação semântica das páginas de cadastro e listagem.
* **CSS3:** Estilização personalizada, layout responsivo e identidade visual.
* **JavaScript (ES6):** Consumo de API via `fetch`, manipulação assíncrona (`async/await`) e renderização dinâmica de elementos no DOM.

### **Back-end & Banco de Dados**
* **Node.js & Express:** Criação do servidor local e gerenciamento das rotas da API (`http://localhost:3000`).
* **Banco de Dados: MySQL(Local):** Integração para persistência de dados dos anúncios (projetos e comércios).
* **Gerenciamento de Arquivos:** Lógica para upload e armazenamento das imagens de capa enviadas pelos usuários.

---

## ⚙️ Funcionalidades Atuais

* [x] Página de formulário para cadastro de novos projetos e empreendedores.
* [x] Upload de imagens de capa integrado ao servidor.
* [x] Banco de dados integrado localmente para salvar as informações de forma persistente.
* [x] Listagem dinâmica dos anúncios buscando os dados diretamente da API no banco de dados.

---

## 🎯 Próximos Passos (Roadmap de Evolução)

O projeto está expandindo! Os próximos desafios técnicos focam em inteligência geográfica e acessibilidade:

* [ ] **Geolocalização do Usuário:** Implementar a `Geolocation API` do navegador no Front-end para capturar a latitude e longitude do usuário (com sua devida permissão).
* [ ] **Busca por Raio de Proximidade:** Implementar a lógica matemática/geográfica no Back-end para calcular distâncias e renderizar os empreendedores e ações dentro de um raio de X km do usuário.
* [ ] **Filtros e Barra de Pesquisa:** Permitir a busca textual e filtragem por categorias (Ex: "Educação", "Alimentação", "Serviços").
* [ ] **Deploy da Aplicação:** Hospedar o banco de dados e o servidor na nuvem (ex: Render, Railway, Neon ou Fly.io) para tirar o projeto do `localhost` e torná-lo público.

---

## 🚀 Como Executar o Projeto Localmente

### **Pré-requisitos**
Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/) e o [Git](https://git-scm.com/). Também recomendo a extensão *Live Server* no VS Code para rodar o Front-end.

### **1. Clonar o Repositório**
```bash
git clone (https://github.com/MateusClaudio-dev/Dignitec.git)



