import skills from "../data/skills.data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("skills-container");

  skills.forEach(section => {
    const card = document.createElement("div");
    card.className = "skills-card reveal";

    card.innerHTML = `
      <div class="skills-header reveal">
        <span class="skills-icon">${section.icon}</span>
        <h3 class="skills-category">${section.category}</h3>
      </div>
      <div class="skills-list"></div>
    `;

    const list = card.querySelector(".skills-list");

    section.items.forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill";

      item.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div
            class="skill-bar-fill"
            style="--level: ${skill.level}%;"
          ></div>
        </div>
      `;

      list.appendChild(item);
    });

    container.appendChild(card);
  });

  /* ===============================
     OBSERVER DAS BARRAS
     =============================== */

  const bars = document.querySelectorAll(".skill-bar-fill");

  const barObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("animate");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach(bar => barObserver.observe(bar));
});
