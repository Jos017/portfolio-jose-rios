import { CSSUnits } from '../../types/tailwind.types';
import { isCSSValue } from '../../utils/unitsHandler';

describe('isCSSValue function', () => {
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

  units.forEach((unit) => {
    it(`Should return true if "1${unit}" is provided`, () => {
      expect(isCSSValue(`1${unit}`)).toBe(true);
    });
  });

  it('Should return true if "calc(1px+10%) is provided', () => {
    expect(isCSSValue('calc(1px+10%)')).toBe(true);
  });

  it('Should return true if "calc(1px - 1px) is provided', () => {
    expect(isCSSValue('calc(1px - 10%)')).toBe(true);
  });

  it('Should return true if "calc( 1px*-1vw) is provided', () => {
    expect(isCSSValue('calc( 1px*-1vw)')).toBe(true);
  });

  it('Should return true if "calc(1px/    1vh) is provided', () => {
    expect(isCSSValue('calc(1px/    1vh)')).toBe(true);
  });

  it('Should return true if "calc(   1px+10%   ) is provided', () => {
    expect(isCSSValue('calc(   1px+10%   )')).toBe(true);
  });

  it('Should return false if "calc(   1px+10%   ) is provided', () => {
    expect(isCSSValue('calc(   1px+10   )')).toBe(false);
  });

  it('Should return false if "calc(1 p x / 1 v h) is provided', () => {
    expect(isCSSValue('calc(1 p x / 1 x h)')).toBe(false);
  });

  it('Should return false if "0" is provided', () => {
    expect(isCSSValue('0')).toBe(false);
  });

  it('Should return false if "1" is provided', () => {
    expect(isCSSValue('1')).toBe(false);
  });

  it('Should return false if "asdf" is provided', () => {
    expect(isCSSValue('asdf')).toBe(false);
  });
});
