import React from 'react';
import logo from '../assets/logo.svg';
import HamButton from './HamButton';

type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Props = { height: Sizes; maxWidth: Sizes };

const navbarMenu = [
  { sectionName: 'About', route: '/#about' },
  { sectionName: 'Experience', route: '/#experience' },
  { sectionName: 'Work', route: '/#work' },
  { sectionName: 'Contact', route: '/#contact' },
  { sectionName: 'Resume', route: '/#resume' },
];

const Navbar = ({ height = 'md', maxWidth = 'lg' }: Props) => {
  const heightVariants: { [key in Sizes]: string } = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20',
    xl: 'h-24',
    xxl: 'h-26',
  };
  const maxWidthVariants: { [key in Sizes]: string } = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    xxl: 'max-w-screen-2xl',
  };

  return (
    <nav
      className={`${heightVariants[height]} flex items-center bg-dark-0 drop-shadow-dark-2`}
    >
      <div
        className={`${maxWidthVariants[maxWidth]} flex justify-between w-full h-full px-4 mx-auto sm:px-8`}
      >
        <div className="flex items-center justify-center">
          <img src={logo} className="object-contain h-3/4 object" />
        </div>
        <ol className="items-center hidden gap-8 sm:flex">
          {navbarMenu.map((item) => {
            return (
              <li key={item.sectionName}>
                <a
                  href={item.route}
                  className="cursor-pointer text-heading-6 text-dark-3 hover:text-primary-main"
                >
                  {item.sectionName}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
