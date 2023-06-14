import AcademicCap from '../assets/icons/AcademicCap';
import Briefcase from '../assets/icons/Briefcase';
import GitHub from '../assets/icons/GitHub';
import LinkedIn from '../assets/icons/LinkedIn';
import Newspaper from '../assets/icons/Newspaper';
import Phone from '../assets/icons/Phone';
import User from '../assets/icons/User';
import { Links } from './types';

const NAVIGATION: Links[] = [
  { name: 'about', route: '/#about', svg: <User /> },
  { name: 'experience', route: '/#experience', svg: <AcademicCap /> },
  { name: 'work', route: '/#work', svg: <Briefcase /> },
  { name: 'contact', route: '/#contact', svg: <Phone /> },
  { name: 'resume', route: '/#resume', svg: <Newspaper /> },
];

const NETWORKING: Links[] = [
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

export { type Links, NAVIGATION, NETWORKING };
