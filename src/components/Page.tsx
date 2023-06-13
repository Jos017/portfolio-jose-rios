import React from 'react';
import { minSectionHeightVariants, SizesRem } from '../common/stylesVariants';
import { CSSCalc, CSSSize, MaxWidth } from '../types/tailwind.types';

type CustomMaxWidth = `max-w-[${CSSSize}]` | `max-w-[${CSSCalc}]`

type Props = {
  children?: React.ReactNode;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  id?: string;
  maxWidth?: MaxWidth | CustomMaxWidth;
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
  const maxWidthStr = maxWidth.toString();

  const maxWidthClass = maxWidthStr.includes('[')
    ? maxWidthStr
    : `max-w-${maxWidthStr}`;

  return (
    <Component
      id={id}
      className={`${minSectionHeightVariants[minH]} ${maxWidthClass} ${customClass}`}
    >
      {children}
    </Component>
  );
};

export default Page;
