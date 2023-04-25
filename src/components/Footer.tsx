import React from 'react';
import { NETWORKING } from '../common/const';
import {
  heightVariants,
  maxWidthVariants,
  Sizes,
} from '../common/stylesVariants';

type Props = { height: Sizes; maxWidth: Sizes };

const Footer = ({ height = 'md', maxWidth = 'lg' }: Props) => {
  const className = 'flex items-center w-full bg-dark-1 drop-shadow-dark-3';
  return (
    <footer
      className={`${heightVariants[height]} flex items-center bg-dark-1 drop-shadow-dark-3 w-full`}
    >
      <div
        className={`${maxWidthVariants[maxWidth]} flex justify-between w-full h-full px-4 mx-auto sm:px-8`}
      >
        <div className="text-light-3">
          {NETWORKING.map((network) => network.svg)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
