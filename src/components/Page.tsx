import React from 'react';
import { minSectionHeightVariants, SizesRem } from '../common/stylesVariants';
import { MaxWidth } from '../types/tailwind.types';

type Props = {
  children?: React.ReactNode;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  id?: string;
  maxWidth?: MaxWidth;
  minH?: SizesRem;
};

const Page = ({
  children,
  className,
  component = 'div',
  id,
  maxWidth = 'none',
  minH = 'default',
}: Props) => {
  const Component = component;
  const customClass =
    className ?? 'flex flex-col justify-center w-full mx-auto p-4 sm:p-8';
  return (
    <Component
      id={id}
      className={`${minSectionHeightVariants[minH]} max-w-${maxWidth} ${customClass}`}
    >
      {children}
    </Component>
  );
};

export default Page;
