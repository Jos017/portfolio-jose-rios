import React from 'react';
import { minSectionHeightVariants, SizesRem } from '../common/stylesVariants';

type Props = {
  className?: string;
  children?: React.ReactNode;
  component?: keyof JSX.IntrinsicElements;
  id?: string;
  minH?: SizesRem;
};

const Page = ({
  minH = 'default',
  component = 'div',
  children,
  id,
  className,
}: Props) => {
  const Component = component;
  const customClass = className ?? 'flex items-center w-full p-4 sm:p-8';
  return (
    <Component
      id={id}
      className={`${minSectionHeightVariants[minH]} ${customClass}`}
    >
      {children}
    </Component>
  );
};

export default Page;
