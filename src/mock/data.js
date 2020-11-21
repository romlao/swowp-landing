import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Swowp', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Swowp arrive bientot', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Swowp',
  name: 'Digitalisez vos cartes de visite',
  subtitle: 'Arrive bientot',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'signup.png',
    title: 'Inscrivez-vous',
    info: 'Un simple numéro de téléphone et c\'est parti !',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cards.png',
    title: 'Créez, Personnalisez',
    info: 'Plein de templates pour vos cartes vous attendent',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous souhaitez en savoir plus pour vous ou votre entreprise ?',
  btn: 'Contactez-nous',
  email: 'comptes@swowp.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
