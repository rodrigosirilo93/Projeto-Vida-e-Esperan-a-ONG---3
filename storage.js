function salvarVisita() {
  let visitas = localStorage.getItem("visitas") || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  console.log(`Esta página foi visitada ${visitas} vezes.`);
}
salvarVisita();
