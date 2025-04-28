const projectsEl = [
    {
      image: '/img/webp/projects/projects_1.webp',
      image2x: '/img/webp/projects/projects_1@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Wallet Webservice',
      link: 'https://expense-tracker.f.goit.study'
    },
    {
      image: '/img/webp/projects/projects_2.webp',
      image2x: '/img/webp/projects/projects_2@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Green harvest webservice',
      link: 'https://goitstudentsworks.github.io/106_html-css_Siriulas/'
    },
    {
      image: '/img/webp/projects/projects_3.webp',
      image2x: '/img/webp/projects/projects_3@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'English Exellence website',
      link: '#'
    },
    {
      image: '/img/webp/projects/projects_4.webp',
      image2x: '/img/webp/projects/projects_4@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Power Pulse Webservice',
      link: 'https://power-pulse.f.goit.study/welcome'
    },
    {
      image: '/img/webp/projects/projects_5.webp',
      image2x: '/img/webp/projects/projects_5@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Mimino Website',
      link: '#'
    },
    {
      image: '/img/webp/projects/projects_6.webp',
      image2x: '/img/webp/projects/projects_6@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Vyshyvanka Vibes Landing Page',
      link: 'https://vyshyvanka-vibes.f.goit.study'
    },
    {
      image: '/img/webp/projects/projects_7.webp',
      image2x: '/img/webp/projects/projects_7@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Chego Jewelry Website',
      link: '#'
    },
    {
      image: '/img/webp/projects/projects_8.webp',
      image2x: '/img/webp/projects/projects_8@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Energy Flow Webservice',
      link: 'https://energy-flow.f.goit.study/index.html'
    },
    {
      image: '/img/webp/projects/projects_9.webp',
      image2x: '/img/webp/projects/projects_9@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Fruitbox Online Store',
      link: '#'
    },
    {
      image: '/img/webp/projects/projects_10.webp',
      image2x: '/img/webp/projects/projects_10@2x.webp',
      stack: 'React, JavaScript, Node JS, Git',
      title: 'Starlight Studio Landing Page',
      link: '#'
    }
  ];

const listEl = document.querySelector('.projects-menu');
const loadMoreBtn = document.querySelector('.load-more-button');

let currentIndex = 0;
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
            <svg class="icon-arrow" width="14.5" height="14.5">
              <use href="/img/icon.svg#icon-arr-rigth-top"></use>
            </svg>
          </a>
          </div>
        </div>
      </li>
    `;
  }
  
function renderProjects() {
    const nextProjects = projectsEl.slice(currentIndex, currentIndex + projectsPerPage);
    const markup = nextProjects.map(createProjectCard).join('');
    listEl.insertAdjacentHTML('beforeend', markup);
    
    currentIndex += projectsPerPage;
  
    if (currentIndex >= projectsEl.length) {
      loadMoreBtn.style.display = 'none';
    }
  }
  
  renderProjects();
  
  loadMoreBtn.addEventListener('click', renderProjects);
  