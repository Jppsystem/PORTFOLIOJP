// script.js — Gère l'affichage et l'ajout des projets
(function () {
  const projects = [
    {
      title: 'LECTURIOS',
      desc: 'Un site web qui permet de lister des bouquins construit en HTML/CSS/JS',
      url: 'https://jppsystem.github.io/LECTURIOS-PROJECT/'
    },
    {
      title: 'Teachgear',
      desc: 'Un site web pour enseigner les bases de l\'informatique',
      url: 'https://jppsystem.github.io/exercice2/'
    }
  ];

  function createProjectCard(p) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const title = document.createElement('h3');
    title.textContent = p.title;
    card.appendChild(title);

    if (p.desc) {
      const desc = document.createElement('p');
      desc.className = 'project-desc';
      desc.textContent = p.desc;
      card.appendChild(desc);
    }

    const actions = document.createElement('div');
    actions.className = 'project-actions';

    const open = document.createElement('a');
    open.href = p.url;
    open.target = '_blank';
    open.rel = 'noopener';
    open.className = 'btn btn-secondary';
    open.textContent = 'Ouvrir';
    actions.appendChild(open);

    card.appendChild(actions);
    return card;
  }

  function renderProjects() {
    const list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = '';
    projects.forEach(p => list.appendChild(createProjectCard(p)));
  }

  // Le formulaire d'ajout a été retiré : la page affiche uniquement les projets définis ci-dessus.

  // Initialisation
  document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
  });
})();
