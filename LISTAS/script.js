// Cria um array global para armazenar os nomes dos alunos
let listaDeNomes = [];

// Função chamada quando o usuário clica no botão "Adicionar"
function adicionarAluno() {
  // Pega o valor digitado no input e remove espaços extras
  const nome = document.getElementById("nomeAluno").value.trim();

  // Pega o elemento HTML onde as mensagens serão exibidas
  const mensagem = document.getElementById("mensagem");

  // Pega o botão de adicionar para poder desativá-lo quando atingir o limite
  const botao = document.getElementById("btnAdicionar");

  // Verifica se o usuário não digitou nada
  if (nome === "") {
    mensagem.textContent = "Digite um nome!"; // Mostra mensagem de erro
    return; // Interrompe a função
  }

  // Verifica se já atingiu o limite de 5 alunos
  if (listaDeNomes.length >= 5) {
    mensagem.textContent = "Limite de 5 alunos atingido!"; // Mostra mensagem
    botao.disabled = true; // Desabilita o botão para não adicionar mais
    return; // Interrompe a função
  }

  // Adiciona o nome digitado ao array de alunos
  listaDeNomes.push(nome);

  // Mostra uma mensagem de sucesso com a quantidade atual de alunos
  mensagem.textContent = `Aluno "${nome}" adicionado! (${listaDeNomes.length}/5)`;

  // Limpa o campo de input para o próximo nome
  document.getElementById("nomeAluno").value = "";
}