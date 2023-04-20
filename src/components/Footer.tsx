import React from 'react';
import {
  heightVariants,
  maxWidthVariants,
  Sizes,
} from '../common/stylesVariants';

type Props = { height: Sizes; maxWidth: Sizes };

const Footer = ({ height = 'md', maxWidth = 'lg' }: Props) => {
  return (
    <footer className={`${heightVariants[height]}`}>
      <div className={`${maxWidthVariants[maxWidth]} mx-auto`}>Footer</div>
    </footer>
  );
};

export default Footer;
