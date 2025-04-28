import p1    from '../img/webp/projects/projects_1.webp';
import p1_2x from '../img/webp/projects/projects_1@2x.webp';
import p2    from '../img/webp/projects/projects_2.webp';
import p2_2x from '../img/webp/projects/projects_2@2x.webp';
import p3    from '../img/webp/projects/projects_3.webp';
import p3_2x from '../img/webp/projects/projects_3@2x.webp';
import p4    from '../img/webp/projects/projects_4.webp';
import p4_2x from '../img/webp/projects/projects_4@2x.webp';
import p5    from '../img/webp/projects/projects_5.webp';
import p5_2x from '../img/webp/projects/projects_5@2x.webp';
import p6    from '../img/webp/projects/projects_6.webp';
import p6_2x from '../img/webp/projects/projects_6@2x.webp';
import p7    from '../img/webp/projects/projects_7.webp';
import p7_2x from '../img/webp/projects/projects_7@2x.webp';
import p8    from '../img/webp/projects/projects_8.webp';
import p8_2x from '../img/webp/projects/projects_8@2x.webp';
import p9    from '../img/webp/projects/projects_9.webp';
import p9_2x from '../img/webp/projects/projects_9@2x.webp';
import p10   from '../img/webp/projects/projects_10.webp';
import p10_2x from '../img/webp/projects/projects_10@2x.webp';


import iconUrl from '../img/icon.svg?url';


const projectsEl = [
  { image: p1,  image2x: p1_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Wallet Webservice',             link: 'https://expense-tracker.f.goit.study' },
  { image: p2,  image2x: p2_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Green harvest webservice',     link: 'https://goitstudentsworks.github.io/106_html-css_Siriulas/' },
  { image: p3,  image2x: p3_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'English Excellence website',   link: '#' },
  { image: p4,  image2x: p4_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Power Pulse Webservice',       link: 'https://power-pulse.f.goit.study/welcome' },
  { image: p5,  image2x: p5_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Mimino Website',              link: '#' },
  { image: p6,  image2x: p6_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Vyshyvanka Vibes Landing Page',link: 'https://vyshyvanka-vibes.f.goit.study' },
  { image: p7,  image2x: p7_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Chego Jewelry Website',        link: '#' },
  { image: p8,  image2x: p8_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Energy Flow Webservice',       link: 'https://energy-flow.f.goit.study/index.html' },
  { image: p9,  image2x: p9_2x,  stack: 'React, JavaScript, Node JS, Git', title: 'Fruitbox Online Store',        link: '#' },
  { image: p10, image2x: p10_2x, stack: 'React, JavaScript, Node JS, Git', title: 'Starlight Studio Landing Page',link: '#' },
];

const listEl       = document.querySelector('.projects-menu');
const loadMoreBtn  = document.querySelector('.load-more-button');

let currentIndex   = 0;
const projectsPerPage = 3;

function createProjectCard({ image, image2x, stack, title, link }) {
  return `
    <li class="project-card">
      <picture>
        <source srcset="${image} 1x, ${image2x} 2x" type="image/webp" />
        <img src="${image}" alt="${title}" />
      </picture>
      <p class="project-stack">${stack}</p>
      <div class="project-content">
        <h3 class="project-title">${title}</h3>
        <div class="project-link-container">
          <a href="${link}" target="_blank" class="project-link">
            Visit
            <svg class="icon-arrow" width="14" height="14">
              <use href="${iconUrl}#icon-arr-rigth-top"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `;
}

function renderProjects() {
  const next = projectsEl.slice(currentIndex, currentIndex + projectsPerPage);
  listEl.insertAdjacentHTML('beforeend', next.map(createProjectCard).join(''));
  currentIndex += projectsPerPage;
  if (currentIndex >= projectsEl.length) loadMoreBtn.style.display = 'none';
}

renderProjects();
loadMoreBtn.addEventListener('click', renderProjects);
