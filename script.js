
/*
  Productions du portfolio de CERISE DE BECQUE.
*/

const projects = [
  {
    title: "Espagne : comment fonctionnent les élections anticipées ?",
    subtitle: "Equinox · Barcelone",
    category: "Reportage vidéo",
    date: "OCTOBRE 2026",
    description: "Après la dissolution du parlement espagnol, Pedro Sánchez annonce des élections générales anticipées. Explication du fonctionnement du scrutin espagnol et des enjeux politiques du rendez-vous électoral du 29 novembre.",
    image: "elections.jpg",
    link: "https://www.instagram.com/p/DePUXV6l839/",
    video: ""
  },
  {
    title: "Halloween à Barcelone : les commerces renforcent leur sécurité",
    subtitle: "Equinox · Barcelone",
    category: "Reportage vidéo",
    date: "OCTOBRE 2026",
    description: "Après les dégradations survenues dans plusieurs commerces à Barcelone, les grandes enseignes du centre-ville renforcent leurs dispositifs de sécurité à l'approche d'Halloween, après que de nouvelles menaces ont été relayées sur les réseaux sociaux.",
    image: "emeute.jpg",
    link: "https://www.instagram.com/p/DfIDVUFgXFX/",
    video: ""
  },
  {
    title: "Un bon plan du dimanche à Barcelone",
    subtitle: "Equinox · Barcelone",
    category: "Reportage vidéo",
    date: "OCTOBRE 2026",
    description: "Découverte de Mercantic, un marché vintage situé à Sant Cugat del Vallès, aux portes de Barcelone. Reportage de terrain sur le lieu mêlant brocante, commerces, restauration et concerts.",
    image: "mercantic.jpg",
    link: "https://www.instagram.com/p/DezXsovD1r4/",
    video: ""
  },
  {
    title: "10€ de réduction pour consommer local à Barcelone",
    subtitle: "Equinox · Barcelone",
    category: "Reportage vidéo",
    date: "OCTOBRE 2026",
    description: "La mairie de Barcelone met en place le Bonus Consum, des bons de réduction pour encourager les achats dans les commerces de proximité. Présentation du dispositif, de ses modalités et de ses objectifs.",
    image: "bonus.jpg",
    link: "https://www.instagram.com/p/DeuL98alezA/",
    video: ""
  },
  {
    title: "Un cimetière découvert dans le centre de Barcelone",
    subtitle: "Equinox · Barcelone",
    category: "Reportage vidéo",
    date: "NOVEMBRE 2026",
    description: "Sous la Plaça de la Vila de Madrid se trouve une ancienne nécropole romaine, témoin de près de 2 000 ans d'histoire. Avec l'écrivain et conteur Pierre Lunel, découverte de ce patrimoine au cœur de Barcelone.",
    image: "romain.jpg",
    link: "https://www.instagram.com/p/DfNOM52DYMl/",
    video: ""
  },
  {
    title: "Pourquoi mon expérience scolaire a-t-elle été différente au lycée français de Barcelone ?",
    subtitle: "Equinox",
    category: "Article",
    date: "14 septembre 2026",
    description: "Retour sur mon expérience scolaire au lycée français de Barcelone et sur les différences de parcours entre le lycée en france et le lycée français à l'étranger.",
    image: "https://www.equinoxmagazine.fr/wp-content/uploads/2023/06/P1070715-scaled.jpg",
    link: "https://www.equinoxmagazine.fr/2026/09/14/pourquoi-mon-experience-scolaire-a-t-elle-ete-differente-au-lycee-francais-de-barcelone/",
    video: ""
  },
  {
    title: "Une ancienne modératrice française de Meta à Barcelone se suicide, sa famille envisage des poursuites",
    subtitle: "Equinox",
    category: "Article",
    date: "9 octobre 2026",
description: "Inés Mendoza, une ancienne modératrice francaise sest donnée la mort, après avoir passé près de trois ans à modérer des contenus violents pour Meta à Barcelone. Sa famille entend poursuivre la multinationale américaine.", 
    image: "https://www.equinoxmagazine.fr/wp-content/uploads/2023/10/torre-glories-hotel-novotel-i-campus.jpg",
    link: "https://www.equinoxmagazine.fr/2026/10/09/une-ancienne-moderatrice-francaise-de-meta-a-barcelone-se-suicide-sa-famille-envisage-des-poursuites/",
    video: ""
  },
  {
    title: "Ces Français de Barcelone à qui on répond en anglais",
    subtitle: "Equinox",
    category: "Article",
    date: "20 septembre 2026",
description: "À Barcelone, la scène est familière à de nombreux Français, parfois installés depuis longtemps, racontent être régulièrement abordés en anglais plutôt qu'en français ou en espagnol. Témoignages.",   
  image: "https://www.equinoxmagazine.fr/wp-content/uploads/2025/07/DSC04853-scaled.jpg",
    link: "https://www.equinoxmagazine.fr/2026/09/20/ces-francais-qui-parlent-espagnol-a-barcelone-mais-a-qui-on-repond-en-anglais/",
    video: ""
  },
   {
    title: "Inexpliqué : les pyramides d'Égypte",
    subtitle: "Podcast personnel",
    category: "Podcast",
    date: "18 décembre 2025",
    description: "Bienvenue dans Inexpliqué, le podcast qui explore les mystères et les zones d’ombre de notre histoire. Épisode 1 : les pyramides d’Égypte.",
image: "https://img.youtube.com/vi/auqAvE_ktUg/hqdefault.jpg",
     link: "https://youtu.be/auqAvE_ktUg",
    video: "https://youtu.be/auqAvE_ktUg"
  },
    {
    title: "Brèves TOITURE Magazine — L'artisan couvreur",
    subtitle: "Bois-News Média",
    category: "Article",
    date: "ÉTÉ 2024",
    description: "Brèves spécialisées publiées pendant mon premier stage chez Bois-News Média.",
    role: "Réalisation de productions journalistiques au format papier.",
    image: "bois-news-miniature.jpg",
    link: "dossier-bois-news-media.pdf",
    video: "",
    directLink: true
  },
];

const grid = document.querySelector("#project-grid");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#project-dialog");

function renderProjects(filter = "Tout") {
  const visible = projects.filter(project =>
    filter === "Tout" || project.category === filter
  );

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

       card.addEventListener("click", () => {
      if (project.directLink && project.link) {
        window.open(project.link, "_blank", "noopener,noreferrer");
      } else {
        openProject(project);
      }
    });

    grid.appendChild(card);
  });

  const count = document.querySelector("#count-all");
  if (count) count.textContent = projects.length;
}

function openProject(project) {
  document.querySelector("#dialog-meta").textContent =
    `${project.category} / ${project.subtitle} / ${project.date}`;

  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-role").textContent = project.role;

  const media = document.querySelector("#dialog-media");
  media.innerHTML = "";

  if (project.category === "Reportage vidéo" && project.link) {
    const postUrl = project.link.replace(/\/?$/, "/");
    const embed = document.createElement("iframe");

    embed.src = `${postUrl}embed/`;
    embed.title = `Aperçu vidéo : ${project.title}`;
    embed.width = "100%";
    embed.height = "500";
    embed.style.border = "0";
    embed.setAttribute("scrolling", "no");
    embed.setAttribute("allowtransparency", "true");
    embed.setAttribute("allowfullscreen", "true");

    media.appendChild(embed);

  } else if (project.category === "Podcast" && project.video) {
    const embed = document.createElement("iframe");

    embed.src = youtubeEmbed(project.video);
    embed.title = `Écouter le podcast : ${project.title}`;
    embed.width = "100%";
    embed.height = "405";
    embed.style.border = "0";
    embed.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    embed.setAttribute("allowfullscreen", "true");

    media.appendChild(embed);

  } else if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = "";
    media.appendChild(img);
  }

  const link = document.querySelector("#dialog-link");

  if (project.link) {
    link.href = project.link;

    if (project.category === "Reportage vidéo") {
      link.textContent = "Voir le reportage sur Instagram";
    } else if (project.category === "Podcast") {
      link.textContent = "Écouter le podcast sur YouTube";
    } else {
      link.textContent = "Lire l'article sur Equinox";
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";
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

    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;

      if (parsed.pathname.startsWith("/embed/")) {
        return `https://www.youtube-nocookie.com${parsed.pathname}`;
      }
    }
  } catch (_) {}

  return "";
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeAttribute(value = "") {
  return escapeHTML(value);
}

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

document.querySelector("#dialog-close").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();

renderProjects();
