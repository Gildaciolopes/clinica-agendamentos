const form = document.getElementById("form-agendamento");
const listaConsultas = document.getElementById("lista-consultas");

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
