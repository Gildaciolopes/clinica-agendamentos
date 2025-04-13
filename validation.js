// validador de e-mail
function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// validador de telefone brasileiro
function validarTelefone(telefone) {
  const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  return telefoneRegex.test(telefone);
}

// validação geral dos campos de contato
function validarContato(email, telefone) {
  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }

  if (!validarTelefone(telefone)) {
    alert("Por favor, insira um telefone válido (ex: 11 91234-5678).");
    return false;
  }

  return true;
}
