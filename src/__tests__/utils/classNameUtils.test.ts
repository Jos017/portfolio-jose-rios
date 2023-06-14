import { addToClassName } from '../../utils/classNameUtils';

describe('addToClassName function', () => {
  it('Should add classes to className string', () => {
    expect(addToClassName('class1 class2', 'class3 class4')).toBe(
      'class1 class2 class3 class4'
    );
  });

  it('Should not add duplicated clases to className string', () => {
    expect(
      addToClassName('class1 class2', 'class2 class3', 'class3 class4')
    ).toBe('class1 class2 class3 class4');
  });

  it('Should no add class if empty string provided', () => {
    expect(addToClassName('class1', '', 'class2')).toBe('class1 class2');
    expect(addToClassName('', 'class2')).toBe('class2');
  });

  it('Should no add class if undefined is provided', () => {
    expect(addToClassName('class1', undefined, 'class2')).toBe('class1 class2');
    expect(addToClassName(undefined, 'class2')).toBe('class2');
  });

  it('Should return undefined if  only empty strings provided', () => {
    expect(addToClassName('', '')).toBeUndefined();
  });

  it('Should return undefined if no argument provided', () => {
    expect(addToClassName()).toBeUndefined();
  });
});
