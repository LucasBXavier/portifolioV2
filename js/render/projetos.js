import projetos from "../data/projects.data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.className = "projeto-card reveal";

    card.innerHTML = `
      <div class="projeto-image">
        <img src="../../assets/images/${projeto.imagem}" alt="${projeto.nome}">
      </div>

      <div class="projeto-content">
        <h3 class="projeto-title">${projeto.nome}</h3>
        <p class="projeto-description">${projeto.descricao}</p>

        <div class="projeto-techs">
          ${projeto.tecnologias
            .map(tech => `<span class="tech-badge">${tech}</span>`)
            .join("")}
        </div>

        <a 
          href="${projeto.link}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="projeto-link"
        >
          Ver projeto →
        </a>
      </div>
    `;

    container.appendChild(card);
  });
});
