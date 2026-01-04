document.addEventListener("DOMContentLoaded", () => {
  fetch("data/faccoes.json")
    .then((res) => res.json())
    .then((data) => {
      const lista = document.getElementById("lista-faccoes");
      data.forEach((faccao) => {
        const option = document.createElement("option");
        option.value = faccao.nome;
        lista.appendChild(option);
      });
    })
    .catch((err) => console.error("Erro ao carregar facções:", err));
});
