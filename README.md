# 🏥 Sistema de Agendamento para Clínica Médica

Este é um projeto Web desenvolvido com **HTML, CSS e JavaScript** que simula um sistema de agendamento de consultas médicas. Ele permite que usuários cadastrem consultas, filtrem por data e especialidade, e gerenciem os horários agendados com validações e armazenamento local.

## 📌 Funcionalidades

- ✅ Cadastro de consultas com:
  - Nome
  - E-mail
  - Telefone
  - Especialidade médica
  - Data
  - Hora
- ✅ Validação:
  - Campos obrigatórios
  - Formato de e-mail e telefone
  - Horário comercial (08:00 - 18:00)
  - Datas não podem ser no passado
  - Conflito de horário
- ✅ Listagem das consultas em uma tabela
- ✅ Filtros por data e especialidade
- ✅ Botão para exclusão de consultas
- ✅ Armazenamento no `localStorage`

## 🧠 Tecnologias Utilizadas

- **HTML5** – Estrutura da página
- **CSS3** – Estilização responsiva e moderna
- **JavaScript (Vanilla)** – Lógica de agendamento, validação e manipulação de dados
- **LocalStorage** – Persistência dos agendamentos

## 🔍 Como Utilizar

1. **Clone ou baixe** este repositório.
2. **Abra o `index.html` em um navegador.**
3. Preencha os campos para agendar uma nova consulta.
4. Utilize os filtros acima da tabela para refinar os resultados.
5. Clique no botão "Excluir" para remover uma consulta específica.

## ⚙️ Melhorias Futuras

- Integração com banco de dados real (Firebase, MongoDB etc.)
- Sistema de autenticação para pacientes e médicos
- Envio de e-mail de confirmação
- Layout mobile aprimorado com media queries
- Exportação de agendamentos em PDF/CSV

## 📸 Capturas de Tela

![Imagem do Site](image.png)

---

Desenvolvido por Gildácio Lopes
