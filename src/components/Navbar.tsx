import { useState } from 'react';
import logo from '../assets/logo.svg';
import HamButton from './HamButton';
import NavMenu from './NavMenu';
import { Links } from '../common/types';

type Props = { items: Links[] };

const Navbar = ({ items }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex h-16 w-full items-center bg-dark-1 drop-shadow-dark-3">
      <div className="mx-auto flex h-full w-full max-w-screen-lg justify-between px-4 sm:px-8">
        <a href="#" className="flex items-center justify-center">
          <img src={logo} className="object h-3/4 object-contain" />
        </a>
        <ol className="hidden items-center gap-8 sm:flex">
          {items.map((item) => {
            return (
              <li key={item.name}>
                <a
                  href={item.route}
                  className="cursor-pointer text-heading-6 capitalize hover:text-primary-main"
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
        <div className="absolute right-0 top-16 h-[calc(100vh-4rem)] w-full">
          <div
            className="absolute h-full w-full bg-dark-0 opacity-50"
            onClick={handleCloseMenu}
          />
          <div className="mx-auto flex w-full max-w-screen-lg justify-end px-4 sm:px-8">
            <NavMenu items={items} close={handleCloseMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
