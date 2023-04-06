import React from 'react';

type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Props = { height: Sizes; maxWidth: Sizes };

const Footer = ({ height = 'md', maxWidth = 'lg' }: Props) => {
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
    <footer className={`${heightVariants[height]}`}>
      <div className={`${maxWidthVariants[maxWidth]} mx-auto`}>Footer</div>
    </footer>
  );
};

export default Footer;
