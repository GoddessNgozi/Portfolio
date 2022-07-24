// POPUP MENU
const mobileNavButton = document.getElementById('hambuger-menu');
const navPopup = document.getElementById('mobilePopup');
const closeNavPopup = document.getElementById('close-mobile-nav');
const navMenuButton = document.getElementById('mobile-menu');

mobileNavButton.addEventListener('click', () => {
  navPopup.style.visibility = 'visible';
});

closeNavPopup.addEventListener('click', () => {
  navPopup.style.visibility = 'hidden';
});

navMenuButton.addEventListener('click', () => {
  navPopup.style.visibility = 'hidden';
});

// POPUP WINDOW
const popupContainer = document.querySelector('.popup-container');
const workSection = document.querySelector('.works');
const headlineSection = document.querySelector('.container');
const aboutSection = document.getElementById('about-myself');
const contactSection = document.getElementById('contact-form');
const closePopupButton = document.getElementById('closePopupIcon');

// Projects Dynamic data
const workProjects = [
  {
    title: 'Tonic',
    meta: 'CANOPY',
    metadata1: 'back end dev',
    metadata2: '2015',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/desktop/tonic-project-desktop.svg',
    technologies: ['html', 'css', 'javascript'],
    seeLive: 'https://ngozikanwocha.github.io/Portfolio/',
    sourceUrl: 'https://github.com/NgozikaNwocha/Portfolio',
  },
  {
    title: 'Multi-Post',
    meta: 'CANOPY',
    metadata1: 'back end dev',
    metadata2: '2015',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/desktop/multi-post-stories-project.svg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://ngozikanwocha.github.io/Portfolio/',
    sourceUrl: 'https://github.com/NgozikaNwocha/Portfolio',
  },
  {
    title: 'Tonic',
    meta: 'CANOPY',
    metadata1: 'back end dev',
    metadata2: '2015',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/desktop/facebook-360-project.svg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'images/desktop/facebook-360-project.svg',
    sourceUrl: 'https://github.com/NgozikaNwocha/Portfolio',
  },
  {
    title: 'Uber Navigation',
    meta: 'CANOPY',
    metadata1: 'back end dev',
    metadata2: '2015',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/desktop/uber-navigation-project.svg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'images/desktop/facebook-360-project.svg',
    sourceUrl: 'https://github.com/NgozikaNwocha/Portfolio',
  },
];
// variable to hold the injected html projects
let projectHTML = '';
// iterate through the projects
workProjects.forEach((project) => {
  projectHTML += `
  <div class="project-card">
  <figure>
   <img src="${project.image}" alt="Projects"/>
  </figure>
  <div class="project-details">
    <h4>${project.title}</h4>
    <ul class="project-meta">
     <li class="meta">${project.meta}</li>
     <li>
      <img src="images/Counter.png" alt=""/>
     </li>
     <li class="meta-data">${project.metadata1}</li>
     <li>
      <img src="images/Counter.png" alt=""/>
     </li>
     <li class="meta-data">${project.metadata2}</li>
    </ul>
   <p>${project.summary}</p>
   <ul class="languages">`;
  // iterate through the technologies
  project.technologies.forEach((tech) => {
    projectHTML += `<li>${tech}</li>`;
  });
  projectHTML += `
   </ul>
   <button class="btn openPopupWindow" type="submit">See Project</button>
  </div>
 </div>
 </div>`;
});
// project container
workSection.innerHTML = projectHTML;

// iterate through the items and listen for popupwindow click
document.querySelectorAll('.openPopupWindow').forEach((benButton) => {
  benButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    headlineSection.style.filter = 'blur(3px)';
    workSection.style.filter = 'blur(3px)';
    aboutSection.style.filter = 'blur(3px)';
    contactSection.style.filter = 'blur(3px)';
  });
});

// close the popupwindow
closePopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
  headlineSection.style.filter = 'blur(0px)';
  workSection.style.filter = 'blur(0px)';
  aboutSection.style.filter = 'blur(0px)';
  contactSection.style.filter = 'blur(0px)';
});

// FORM VALIDATION
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.innerHTML = ('Email should be in lowercase');
    e.preventDefault();
  }
});
