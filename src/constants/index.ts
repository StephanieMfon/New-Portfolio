import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  onedoc_logo,
  oxymon_logo,
  unhcr,
  kemdi_logo,
  threejs,
} from '../assets';

import { itechhire, no_debt_app, seismic_app } from '../assets/projects';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Software Engineer/Red Team Support',
    companyName: 'United Nations High Commissioner for Refugees',
    // TODO: Add unhcr Icon
    icon: unhcr,
    iconBg: '#383E56',
    date: 'April 2024 - Present ',
    link: 'https://www.unhcr.org/',
    points: [
      'Utilized cloud services and tools including AWS, Cloud Foundry. CDN’s (Cloudflare), CMS’s (Drupal and Wordpress) and headless CMS’s (Webiny) for creating secure sites and services which led to 35% reduction in deployment time.',
      'Worked with Red team to Integrate Trivy container scanning, Lynis system auditing, and SonarQube code analysis into GitLab CI/CD pipelines.',
      'Collaborating with a Cross functional Technical team to handle end to end development through coding, testing debugging, implementing CI/CD pipelines, unit tests, integration tests, regression tests, user acceptance tests, for each stage of the development lifecycle.',
      'Worked with Stakeholders to capture business requirements and providing technical training and support to technical and non technical staff in various departments which led to a significant reduction in support needs.',
    ],
  },
  {
    title: 'Software Developer',
    companyName: 'Onedoc AI',
    icon: onedoc_logo,
    iconBg: '#E6DEDD',
    date: 'December 2023 - April 2024 ',
    link: 'https://app.onedoc.ai/signup',
    points: [
      'Architected scalable microservices architecture for a real-time slide creation application, reducing latency in the systems by using Python for building backend services, TypeScript for building frontend components, and PostgreSQL for data persistence.',
      'Provided support for enterprise products by resolving bugs monthly, improving system stability and streamlining user workflows through enhancements targeted at the user interface.',
      'Created and optimized RESTful APIs using Express.js and FastAPI, enabling seamless third-party integrations that expanded functionality across platforms.',
    ],
  },
  {
    title: 'Fullstack Software Engineer',
    companyName: 'KemdiAttire',
    icon: kemdi_logo,
    iconBg: '#383E56',
    date: 'December 2023 - June 2024 ',
    link: 'https://www.kemdiattire.com/',
    points: [
      'Optimized backend architecture using TypeScript and NestJS, enhancing application scalability and performance.',
      'Developed and integrated 50+ REST API endpoints across multiple projects, ensuring seamless communication between front-end and back-end systems.',
      'Led backend development efforts in a cross-functional team, contributing to key technical decisions for new and future projects.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'Oxymon Solutions ',
    icon: oxymon_logo,
    iconBg: '#E6DEDD',
    date: '2022–Aug. 2023',
    link: 'https://oxymon.co/',
    points: [
      'Ensured application security through data sanitization with Joi, password encryption with Bcrypt, and JWT-based authentication.',
      'Implemented OAuth authentication and schemas with MongoDB for data management.',
      'Utilized web sockets with socket.io to create a real-time chat feature.',
      'Crafted Node.js services using Express servers for managing daily HTTP requests.',
    ],
  },
];

const projects: TProject[] = [
  {
    name: 'ITechHire',
    description:
      'This HR platform revolutionizes global workforce management. It streamlines recruitment processes and provides powerful tools to enhance team productivity.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'next.js',
        color: 'green-text-gradient',
      },
      {
        name: 'python',
        color: 'text-secondary',
      },
    ],
    image: itechhire,
    liveLink: 'https://i-tech-hire.vercel.app/',
    sourceCodeLink: 'https://github.com/StephanieCrispin/ITechHire',
  },
  {
    name: 'Omega App',
    description:
      'This is a full-stack application implemented with the MVC architecture. It utilises machine learning for predicting the eligibility of loan applicants.',
    tags: [
      {
        name: 'aws',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'node.js',
        color: 'text-secondary',
      },
    ],
    liveLink: 'https://omega-prediction-app.netlify.app/',
    image: no_debt_app,
    sourceCodeLink: 'https://github.com/NoDebt-App-Backend/Loan_Prediction_App/tree/dev/src',
  },
  {
    name: 'Seismic App',
    description:
      'This is an analytics application demo which a government agency requested for government allocated school projects for girls/women in marginalized communities.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      // {
      //   name: 'css',
      //   color: 'text-secondary',
      // },
    ],
    image: seismic_app,
    liveLink: 'https://seismic-app-frontend.vercel.app/',
    sourceCodeLink: 'https://github.com/StephanieMfon/Seismic-app-frontend',
  },
];

export { services, technologies, experiences, projects };
