
import projetos from "../data/projects.data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");

  if (!container) return;

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.className = "projeto-card reveal";

    card.innerHTML = `
      <div class="projeto-image">
        <img 
          src="../assets/images/${projeto.imagem}" 
          alt="Imagem do projeto ${projeto.nome}"
          loading="lazy"
        />
      </div>

      <div class="projeto-content">
        <h3 class="projeto-title">${projeto.nome}</h3>

        <p class="projeto-description">
          ${projeto.descricao}
        </p>

        <div class="projeto-techs">
          ${projeto.tecnologias
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join("")}
        </div>

        <a 
          href="${projeto.link}" 
          class="projeto-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver projeto →
        </a>
      </div>
    `;

    container.appendChild(card);
  });
});