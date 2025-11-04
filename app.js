const projetos = [
  { titulo: "Ação Social no Bairro Nova Vida", descricao: "Distribuição de cestas básicas e oficinas de capacitação." },
  { titulo: "Projeto Jovem Esperança", descricao: "Apoio educacional e esportivo para jovens em vulnerabilidade." },
  { titulo: "Saúde e Solidariedade", descricao: "Campanhas de vacinação e doação de sangue." }
];
function renderProjetos() {
  const container = document.getElementById("lista-projetos");
  container.innerHTML = projetos.map(p => `
    <div class="card">
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
    </div>
  `).join("");
}
renderProjetos();
