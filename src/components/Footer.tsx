import { Fragment } from 'react';
import { NETWORKING } from '../common/const';

const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center bg-dark-1 drop-shadow-dark-3">
      <div className="mx-auto flex h-full w-full max-w-screen-lg justify-between px-4 sm:px-8">
        <div className="text-light-3">
          {NETWORKING.map((network, index) => (
            <Fragment key={index}>{network.svg}</Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
