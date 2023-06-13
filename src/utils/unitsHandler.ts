import { CSSUnits } from '../types/tailwind.types';

const isCSSValue = (value: string) => {
  const units: CSSUnits[] = [
    'px',
    'em',
    'rem',
    'vw',
    'vh',
    'vmin',
    'vmax',
    '%',
    'in',
    'cm',
    'mm',
    'pt',
    'pc',
    'ex',
    'ch',
  ];
  const unitsRegex = units.join('|');
  const cssValueRegex = new RegExp(`^\\d+(\\.\\d+)?(${unitsRegex})$`, 'i');
  const cssCalcRegex = new RegExp(
    `calc\\(\\s*?([\\d\\.]+(${unitsRegex}))\\s*?[+\\-*/]\\s*?(\\-)?([\\d\\.]+(${unitsRegex}))\\s*?\\)`,
    'i'
  );

  if (value.includes('calc')) {
    return cssCalcRegex.test(value);
  }

  return cssValueRegex.test(value);
};

export { isCSSValue };
