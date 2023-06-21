import { Fragment } from 'react';
import { NETWORKING } from '../common/const';

const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center">
      <div className="mx-auto flex h-full w-full max-w-screen-lg items-center justify-between px-4 sm:px-8">
        <div className="flex gap-4 text-light-3">
          {NETWORKING.map((network, index) => (
            <Fragment key={index}>{network.svg}</Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
