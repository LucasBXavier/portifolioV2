import projetos from "../data/projects.data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");

  projetos.forEach(section => {
    const card = document.createElement("div");
    card.className = "projeto-card reveal";

    card.innerHTML = `
      <div class="projeto-image">
        <img 
          src="../../assets/images/${section.imagem}" 
          alt="${section.nome}"
        />
      </div>

      <div class="projeto-content">
        <h3 class="projeto-title">${section.nome}</h3>
        <p class="projeto-description">${section.descricao}</p>

        <div class="projeto-techs">
          ${section.tecnologias
            .map(tech => `<span class="tech-badge">${tech}</span>`)
            .join("")}
        </div>

        <a
          href="${section.link}"
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
