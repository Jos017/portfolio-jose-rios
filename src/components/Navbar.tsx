import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import HamButton from './HamButton';
import NavMenu from './NavMenu';
import { TNavItems } from '../common/const';

type Props = { items: TNavItems[]; height: Sizes; maxWidth: Sizes };
type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

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
const offsetTopVariants: { [key in Sizes]: string } = {
  sm: 'absolute top-12',
  md: 'absolute top-16',
  lg: 'absolute top-20',
  xl: 'absolute top-24',
  xxl: 'absolute top-26',
};
const menuHeightVariants: { [key in Sizes]: string } = {
  sm: 'h-[calc(100vh-3rem)]',
  md: 'h-[calc(100vh-4rem)]',
  lg: 'h-[calc(100vh-5rem)]',
  xl: 'h-[calc(100vh-6rem)]',
  xxl: 'h-[calc(100vh-7rem)]',
};

const Navbar = ({ items, height = 'md', maxWidth = 'lg' }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`${heightVariants[height]} flex items-center bg-dark-1 drop-shadow-dark-3`}
      >
        <div
          className={`${maxWidthVariants[maxWidth]} flex justify-between w-full h-full px-4 mx-auto sm:px-8`}
        >
          <a href="#" className="flex items-center justify-center">
            <img src={logo} className="object-contain h-3/4 object" />
          </a>
          <ol className="items-center hidden gap-8 sm:flex">
            {items.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    href={item.route}
                    className="capitalize cursor-pointer text-heading-6 text-dark-3 hover:text-primary-main"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ol>
          <div className="flex items-center justify-center sm:hidden">
            <HamButton onClick={toggleMenu} open={isMenuOpen}/>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`${offsetTopVariants[height]} ${menuHeightVariants[height]} right-0 w-full`}
          >
            <div className="absolute w-full h-full opacity-50 bg-dark-0" onClick={handleCloseMenu} />
            <div
              className={`${maxWidthVariants[maxWidth]} flex justify-end w-full px-4 mx-auto sm:px-8`}
            >
              <NavMenu items={items} close={handleCloseMenu}/>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
