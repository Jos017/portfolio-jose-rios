import React from 'react';
import { minSectionHeightVariants, SizesRem } from '../common/stylesVariants';
import { CSSCalc, CSSSize, MaxWidth } from '../types/tailwind.types';
import { addToClassName } from '../utils/classNameUtils';

type CustomMaxWidth = `max-w-[${CSSSize}]` | `max-w-[${CSSCalc}]`;

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
  className = '',
  component = 'div',
  id,
  maxWidth = 'none',
  minH = 'default',
}: Props) => {
  const Component = component;
  const maxWidthStr = maxWidth.toString();
  const maxWidthClass = maxWidthStr.includes('[')
    ? maxWidthStr
    : `max-w-${maxWidthStr}`;
  const defaultClasses =
    'flex flex-col justify-center w-full mx-auto p-4 sm:p-8';
  const componentClasses = `${minSectionHeightVariants[minH]} ${maxWidthClass}`;
  const classNameValue = addToClassName(
    defaultClasses,
    className,
    componentClasses
  );

  return (
    <Component id={id} className={classNameValue}>
      {children}
    </Component>
  );
};

export default Page;
