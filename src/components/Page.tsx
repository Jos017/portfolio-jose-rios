import React from 'react';
import { addToClassName } from '../utils/classNameUtils';

type Props = {
  children?: React.ReactNode;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  id?: string;
};

const Page = ({ children, className = '', component = 'div', id }: Props) => {
  const Component = component;

  const defaultClasses =
    'flex flex-col justify-center w-full mx-auto p-4';

  return (
    <Component id={id} className={addToClassName(defaultClasses, className)}>
      {children}
    </Component>
  );
};

export default Page;
