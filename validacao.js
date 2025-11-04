const form = document.getElementById("form-contato");
form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }
  alert("Mensagem enviada com sucesso!");
  form.reset();
});
