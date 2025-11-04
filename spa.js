document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const pagina = e.target.getAttribute("data-pagina");
    mostrarPagina(pagina);
  });
});
function mostrarPagina(id) {
  document.querySelectorAll(".pagina").forEach(sec => sec.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}
