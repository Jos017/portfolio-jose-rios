import { useState } from 'react';
import logo from '../assets/logo.svg';
import HamButton from './HamButton';
import NavMenu from './NavMenu';
import { Links } from '../common/const';
import {
  heightVariants,
  maxWidthVariants,
  menuHeightVariants,
  offsetTopVariants,
  Sizes,
} from '../common/stylesVariants';

type Props = { items: Links[]; height: Sizes; maxWidth: Sizes };

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
        className={`${heightVariants[height]} flex items-center w-full bg-dark-1 drop-shadow-dark-3`}
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
                    className="capitalize cursor-pointer text-heading-6 hover:text-primary-main"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ol>
          <div className="flex items-center justify-center sm:hidden">
            <HamButton onClick={toggleMenu} open={isMenuOpen} />
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`${offsetTopVariants[height]} ${menuHeightVariants[height]} right-0 w-full`}
          >
            <div
              className="absolute w-full h-full opacity-50 bg-dark-0"
              onClick={handleCloseMenu}
            />
            <div
              className={`${maxWidthVariants[maxWidth]} flex justify-end w-full px-4 mx-auto sm:px-8`}
            >
              <NavMenu items={items} close={handleCloseMenu} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
