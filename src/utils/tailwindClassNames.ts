import { MaxWidth } from '../types/tailwind.types';

const getMaxWidth = (width: MaxWidth) => {
  const maxWidth = {
    '0': 'max-w-0',
    none: 'max-w-none',
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    min: 'max-w-min',
    max: 'max-w-max',
    fit: 'max-w-fit',
    prose: 'max-w-prose',
    'screen-sm': 'max-w-screen-sm',
    'screen-md': 'max-w-screen-md',
    'screen-lg': 'max-w-screen-lg',
    'screen-xl': 'max-w-screen-xl',
    'screen-2xl': 'max-w-screen-2xl',
  };

  return maxWidth[width];
};

export { getMaxWidth };
