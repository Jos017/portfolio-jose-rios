import React from 'react';
import AcademicCap from '../assets/icons/AcademicCap';
import Briefcase from '../assets/icons/Briefcase';
import Newspaper from '../assets/icons/Newspaper';
import Phone from '../assets/icons/Phone';
import User from '../assets/icons/User';

type NavItems = { name: string; route: string; icon?: JSX.Element };

const navItems: NavItems[] = [
  { name: 'about', route: '/#about', icon: <User /> },
  { name: 'experience', route: '/#experience', icon: <AcademicCap /> },
  { name: 'work', route: '/#work', icon: <Briefcase /> },
  { name: 'contact', route: '/#contact', icon: <Phone /> },
  { name: 'resume', route: '/#resume', icon: <Newspaper /> },
];

export { type NavItems, navItems };
