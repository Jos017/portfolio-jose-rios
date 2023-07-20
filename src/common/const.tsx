import pet911Img from '../assets/images/projects/pet911.jpg';
import puzzleBubbleImg from '../assets/images/projects/puzzleBubble.jpg';
import torakaTVImg from '../assets/images/projects/torakaTV.jpg';
import AcademicCap from '../assets/icons/AcademicCap';
import Briefcase from '../assets/icons/Briefcase';
import GitHub from '../assets/icons/GitHub';
import LinkedIn from '../assets/icons/LinkedIn';
import Newspaper from '../assets/icons/Newspaper';
import Phone from '../assets/icons/Phone';
import User from '../assets/icons/User';
import { Education, Language, Link, Project, WorkExperience } from './types';

const NAVIGATION: Link[] = [
  { name: 'about', route: '/#about', svg: <User /> },
  { name: 'experience', route: '/#experience', svg: <AcademicCap /> },
  { name: 'projects', route: '/#projects', svg: <Briefcase /> },
  { name: 'contact', route: '/#contact', svg: <Phone /> },
  { name: 'resume', route: '/resume', svg: <Newspaper /> },
];

const NETWORKING: Link[] = [
  {
    name: 'LinkedIn',
    route: 'https://www.linkedin.com/in/jos017/',
    svg: <LinkedIn />,
  },
  {
    name: 'GitHub',
    route: 'https://github.com/Jos017',
    svg: <GitHub />,
  },
  {
    name: 'jrbernabe@gmail.com',
    route: 'mailto:jrbernabe@gmail.com',
  },
];

// Resume Info
const EDUCATION: Education[] = [
  {
    school: 'Ironhack',
    studyField: 'Full Stack Web Development',
    startDate: new Date(2022, 7),
    endDate: new Date(2022, 9),
    location: { country: 'Mexico', locale: 'MX' },
    description: [
      '9 Week intensive web development Bootcamp, Remote',
      'Built front end projects using HTML, CSS, and JavaScript.',
      'Built full stack projects using ExpressJs, NodeJs, Handlebars, MongoDB, and Axios.',
      'Built a single page application using ReactJs.',
    ],
  },
  {
    school: 'Universidad Privada Boliviana',
    studyField: 'Electromechanical Engineering',
    startDate: new Date(2012, 1),
    endDate: new Date(2017, 11),
    location: { country: 'Bolivia' },
  },
];

const LANGUAGES: Language[] = [
  { language: 'Spanish', level: 'Native' },
  { language: 'English', level: 'B2' },
  { language: 'Japanese', level: 'N5' },
];

const PROJECTS: Project[] = [
  {
    title: 'TorakaTV',
    subtitle: 'Featured Project',
    description: 'Single Page Application, Movie and Series Tracker',
    techUsed: [
      'React',
      'JavaScript',
      'ExpressJs',
      'NodeJs',
      'MaterialUI',
      'Axios',
    ],
    imgUrl: torakaTVImg,
    gitHubMainUrl: 'https://github.com/Jos017/TorakaTV-Client',
    gitHubSecondaryUrl: 'https://github.com/Jos017/TorakaTV-Server',
    deployUrl: 'https://toraka-tv.vercel.app',
    date: new Date(2022, 9),
  },
  {
    title: 'Pet 911',
    subtitle: 'Featured Project',
    description:
      'Web App for posting lost and found pets, all was rendered in the Server Side.',
    techUsed: ['ExpressJs', 'NodeJs', 'Handlebars', 'MongoDB', 'Bootstrap'],
    imgUrl: pet911Img,
    gitHubMainUrl: 'https://github.com/Jos017/pet911',
    deployUrl: 'https://pet911.onrender.com/',
    date: new Date(2022, 8),
  },
  {
    title: 'Puzzle Bubble',
    subtitle: 'Featured Project',
    description:
      'Tile matching puzzle game, based on Puzzle Bobble game for Arcade',
    techUsed: ['JavaScript', 'CSS', 'HTML'],
    imgUrl: puzzleBubbleImg,
    gitHubMainUrl: 'https://github.com/Jos017/puzzle-bubble',
    deployUrl: 'https://jos017.github.io/puzzle-bubble',
    date: new Date(2022, 7),
  },
];

const SKILLS: string[] = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Git',
  'NodeJs',
  'MongoDB',
  'REST APIs',
  'Unit Testing',
  'SQL',
  'Figma',
  'Material-UI',
  'SolidWorks',
  'AutoCad',
];

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    jobTitle: 'Freelance Frontend Developer',
    companyName: 'Ministerio de Defensa',
    startDate: new Date(2023, 4),
    endDate: 'present',
    workDone: [
      'Collaborated with a client to design and develop the frontend of a web application using React and JavaScript.',
      'Implemented responsive and intuitive user interfaces, ensuring seamless user experiences across multiple devices and screen sizes.',
      'Successfully integrated API, specifically focusing on login and sign-in functionalities, utilizing token authentication for enhanced security measures.',
      'Conducted thorough research and analysis of project requirements, gathering client feedback to ensure the timely delivery of high-quality solutions.',
      'Implemented efficient code architecture and utilized best practices to optimize website performance and maintainability.',
      'Actively participated in code reviews and collaborated with teams, including backend developers and project managers, to achieve project objectives and meet client expectations.',
      'Leveraged industry-standard version control systems, such as Git, for effective collaboration and codebase management.',
      'Maintained clear and concise documentation, including technical specifications and user guides, to facilitate seamless project handovers and client onboarding processes.',
      'Technologies Used: JavaScript, React, HTML, CSS, MaterialUI, Token Authentication, RESTful APIs, Git',
    ],
    location: { country: 'Bolivia', city: 'La Paz' },
  },
  {
    jobTitle: 'Freelance Frontend Developer',
    companyName: 'Omak Bolivia',
    startDate: new Date(2023, 1),
    endDate: new Date(2023, 3),
    workDone: [
      'Collaborated with a client to develop a dynamic and responsive web application using React.',
      'Established the project structure, and configured Jest for testing implementing a version control system (Git) to track changes and facilitate collaboration.',
      'Implemented new Pages and UI components to ensure an intuitive user experience.',
      'Wrote comprehensive tests for React components, covering functionality, rendering, and user interactions.',
      'Implemented state management using React Hooks and Context API, optimizing performance and improving code maintainability.',
      'Technologies Used: TypeScript, React, HTML, CSS, MaterialUI, Jest.',
      'Project Snapshot: (https://main.d1vnfpl0hcfayv.amplifyapp.com/)',
    ],
    location: { country: 'Bolivia', city: 'La Paz' },
  },
  {
    jobTitle: 'Electromechanical Maintenance Engineer',
    companyName: 'SOL-MIND',
    startDate: new Date(2017, 10),
    endDate: new Date(2021, 10),
    workDone: [
      'Designed machinery parts using Solidworks and AutoCAD, creating 3D and 2D models as well as 2D structural drawings. Ensured precise and efficient manufacturing processes through accurate technical specifications.',
      'Managed warehouse inventory using SAP Ariba, effectively tracking and organizing materials and equipment, optimizing procurement processes, and minimizing stock shortages.',
      'Monitored pump and motor maintenance services, implementing process improvements that resulted in a 10% reduction in working time, enhancing efficiency and productivity.',
      'Utilized programming skills to configure Programmable Logic Controllers (PLCs) and successfully implemented a SCADA system, reducing maintenance time by one day and streamlining operational processes.',
      'Implemented projects using the World Class Manufacturing (WCM) methodology, specifically implementing it in a Pneumatic Conveying System. This initiative resulted in a 5% reduction in production costs, improving overall operational efficiency.',
    ],
    location: { country: 'Bolivia', city: 'Cochabamba' },
  },
];

export {
  EDUCATION,
  LANGUAGES,
  NAVIGATION,
  NETWORKING,
  PROJECTS,
  SKILLS,
  WORK_EXPERIENCE,
};
