/*
  MODIFIE TES PRODUCTIONS DANS LA LISTE projects CI-DESSOUS.
  - category : "Reportage vidéo", "Télévision", "Article" ou "Audio"
  - image : URL d'une miniature (ou laisse "" pour un bloc neutre)
  - link : lien vers la vidéo, l'article ou le contenu publié
  - video : lien YouTube (facultatif) pour intégrer la vidéo dans la fiche
*/

const projects = [
  {
    title: "Reportage au Mercantic",
    subtitle: "Equinox · Barcelone",
    category: "Reportage vidéo",
    date: "2026",
    description: "Ajouter ici une courte présentation du sujet, son angle et le contexte du reportage.",
    role: "Rôle : recherche, reportage, interviews, tournage et montage — à préciser selon ta contribution.",
    image: "",
    link: "",
    video: ""
  },
  {
    title: "Sujet d'actualité politique",
    subtitle: "Equinox · Barcelone",
    category: "Télévision",
    date: "2026",
    description: "Ajouter ici le sujet traité et les informations essentielles sur la production.",
    role: "Rôle : préparation et présentation du sujet — à préciser.",
    image: "",
    link: "",
    video: ""
  },
  {
    title: "Article d'actualité",
    subtitle: "Equinox",
    category: "Article",
    date: "2026",
    description: "Ajouter ici le thème de l'article et, si utile, son angle éditorial.",
    role: "Rôle : recherche, vérification des informations et rédaction.",
    image: "",
    link: "",
    video: ""
  },
  {
    title: "Production audio",
    subtitle: "Projet journalistique",
    category: "Audio",
    date: "À compléter",
    description: "Remplacer cette carte par une production audio si tu souhaites en présenter une.",
    role: "Rôle : à préciser.",
    image: "",
    link: "",
    video: ""
  }
];

const grid = document.querySelector("#project-grid");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#project-dialog");

function renderProjects(filter = "Tout") {
  const visible = projects.filter(project => filter === "Tout" || project.category === filter);
  grid.innerHTML = "";
  emptyState.hidden = visible.length > 0;

  visible.forEach(project => {
    const card = document.createElement("button");
    card.className = "project-card";
    card.type = "button";
    card.innerHTML = `
      <div class="project-image">
        ${project.image
          ? `<img src="${escapeAttribute(project.image)}" alt="">`
          : `<div class="project-placeholder">${escapeHTML(project.category)}<br>Ajouter une miniature</div>`}
      </div>
      <span class="project-type">${escapeHTML(project.category)} · ${escapeHTML(project.date)}</span>
      <span class="project-title">${escapeHTML(project.title)}</span>
      <span class="project-subtitle">${escapeHTML(project.subtitle)}</span>
    `;
    card.addEventListener("click", () => openProject(project));
    grid.appendChild(card);
  });

  const count = document.querySelector("#count-all");
  if (count) count.textContent = projects.length;
}

function openProject(project) {
  document.querySelector("#dialog-meta").textContent = `${project.category}  /  ${project.subtitle}  /  ${project.date}`;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-role").textContent = project.role;

  const media = document.querySelector("#dialog-media");
  media.innerHTML = "";
  if (project.video && youtubeEmbed(project.video)) {
    const iframe = document.createElement("iframe");
    iframe.src = youtubeEmbed(project.video);
    iframe.title = `Vidéo : ${project.title}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    media.appendChild(iframe);
  } else if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = "";
    media.appendChild(img);
  }

  const link = document.querySelector("#dialog-link");
  if (project.link) {
    link.href = project.link;
    link.hidden = false;
  } else {
    link.hidden = true;
    link.removeAttribute("href");
  }
  dialog.showModal();
}

function youtubeEmbed(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`;
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
      if (parsed.pathname.startsWith("/embed/")) return `https://www.youtube-nocookie.com${parsed.pathname}`;
    }
  } catch (_) {}
  return "";
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}
function escapeAttribute(value = "") { return escapeHTML(value); }

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
});

document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#year").textContent = new Date().getFullYear();

renderProjects();
