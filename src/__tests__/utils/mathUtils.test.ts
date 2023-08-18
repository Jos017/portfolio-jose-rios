import { isOdd } from '../../utils/mathUtils';

describe('Given isOdd function', () => {
  it('Should return false if number is 0', () => {
    expect(isOdd(0)).toBe(false);
  });

  it('Should return true if number is 1', () => {
    expect(isOdd(3)).toBe(true);
  });

  it('Should return false if number is 2', () => {
    expect(isOdd(2)).toBe(false);
  });
});
