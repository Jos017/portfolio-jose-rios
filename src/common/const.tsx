import AcademicCap from '../assets/icons/AcademicCap';
import Briefcase from '../assets/icons/Briefcase';
import GitHub from '../assets/icons/GitHub';
import LinkedIn from '../assets/icons/LinkedIn';
import Newspaper from '../assets/icons/Newspaper';
import Phone from '../assets/icons/Phone';
import User from '../assets/icons/User';
import { Link, WorkExperience } from './types';

const NAVIGATION: Link[] = [
  { name: 'about', route: '/#about', svg: <User /> },
  { name: 'experience', route: '/#experience', svg: <AcademicCap /> },
  { name: 'work', route: '/#work', svg: <Briefcase /> },
  { name: 'contact', route: '/#contact', svg: <Phone /> },
  { name: 'resume', route: '/#resume', svg: <Newspaper /> },
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

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    jobTitle: 'Freelance Frontend Developer',
    companyName: 'Ministry of Defense (Bolivia)',
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
  },
];

export { NAVIGATION, NETWORKING, WORK_EXPERIENCE };
