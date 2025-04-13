// Seleciona o formulário e a tabela
const form = document.getElementById("form-agendamento");
const listaConsultas = document.getElementById("lista-consultas");

// Seletores dos filtros
const filtroData = document.getElementById("filtro-data");
const filtroEspecialidade = document.getElementById("filtro-especialidade");

// Carrega os agendamentos ao iniciar
document.addEventListener("DOMContentLoaded", carregarAgendamentos);

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const especialidade = document.getElementById("especialidade").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  // Validação básica
  if (!nome || !email || !telefone || !especialidade || !data || !hora) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const novaConsulta = { nome, email, telefone, especialidade, data, hora };

  // Salva no localStorage
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  agendamentos.push(novaConsulta);
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  // Atualiza a lista
  adicionarConsultaNaTabela(novaConsulta);

  // Limpa o formulário
  form.reset();
});

// Função para adicionar a consulta na tabela
function adicionarConsultaNaTabela(consulta) {
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${consulta.nome}</td>
    <td>${consulta.email}</td>
    <td>${consulta.telefone}</td>
    <td>${consulta.especialidade}</td>
    <td>${consulta.data}</td>
    <td>${consulta.hora}</td>
    <td><button class="excluir-btn">Excluir</button></td>
  `;

  // Adiciona o evento de exclusão no botão
  linha.querySelector(".excluir-btn").addEventListener("click", function () {
    excluirConsulta(consulta);
  });

  listaConsultas.appendChild(linha);
}

// Função para excluir consulta
function excluirConsulta(consulta) {
  // Carrega os agendamentos
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  // Filtra o agendamento para remover o selecionado
  const agendamentosAtualizados = agendamentos.filter((item) => {
    return (
      item.nome !== consulta.nome ||
      item.email !== consulta.email ||
      item.telefone !== consulta.telefone ||
      item.especialidade !== consulta.especialidade ||
      item.data !== consulta.data ||
      item.hora !== consulta.hora
    );
  });

  // Atualiza o localStorage
  localStorage.setItem("agendamentos", JSON.stringify(agendamentosAtualizados));

  // Recarrega a lista na tela
  carregarAgendamentos();
}

// Função para carregar agendamentos salvos
function carregarAgendamentos() {
  listaConsultas.innerHTML = ""; // Limpa a tabela atual

  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  agendamentos.forEach((consulta) => {
    adicionarConsultaNaTabela(consulta);
  });
}

// Função para aplicar filtros por data e especialidade
filtroData.addEventListener("change", aplicarFiltros);
filtroEspecialidade.addEventListener("change", aplicarFiltros);

function aplicarFiltros() {
  const dataSelecionada = filtroData.value;
  const especialidadeSelecionada = filtroEspecialidade.value;

  // Carrega todos os agendamentos
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  // Filtra conforme os critérios preenchidos
  const filtrados = agendamentos.filter((consulta) => {
    const dataCond =
      dataSelecionada === "" || consulta.data === dataSelecionada;
    const espCond =
      especialidadeSelecionada === "" ||
      consulta.especialidade === especialidadeSelecionada;
    return dataCond && espCond;
  });

  // Limpa a tabela atual
  listaConsultas.innerHTML = "";

  // Adiciona somente os resultados filtrados
  filtrados.forEach(adicionarConsultaNaTabela);
}
