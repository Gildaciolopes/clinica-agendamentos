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

  adicionarConsultaNaTabela(novaConsulta);

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
  `;

  listaConsultas.appendChild(linha);
}

// Função para carregar agendamentos salvos
function carregarAgendamentos() {
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
