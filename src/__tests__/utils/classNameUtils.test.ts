import { addToClassName } from '../../utils/classNameUtils';

describe('addToClassName function', () => {
  it('Should add classes to className string', () => {
    expect(addToClassName('class1 class2', 'class3 class4')).toBe(
      'class1 class2 class3 class4'
    );
  });

  it('Should not add duplicated clases to className string', () => {
    expect(addToClassName('class1 class2', 'class2 class3')).toBe(
      'class1 class2 class3'
    );
  });

  it('Should no add class if empty string provided', () => {
    expect(addToClassName('class1', '')).toBe('class1');
    expect(addToClassName('', 'class2')).toBe('class2');
  });

  it('Should return empty string if no class provided', () => {
    expect(addToClassName('', '')).toBe('');
  });
});
