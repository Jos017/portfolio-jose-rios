import { stringToObject } from '../../utils/stringUtils';

describe('stringToObject function', () => {
  it('Should return "{ a: "a", b: "b", c: "c" }" if string "  a  b  c  " is provided', () => {
    expect(stringToObject('  a  b  c  ')).toMatchObject({
      a: 'a',
      b: 'b',
      c: 'c',
    });
  });

  it('Should return "{ a: "a", b: "b", c: "c" }" if string "a b c" is provided', () => {
    expect(stringToObject('a b c')).toMatchObject({ a: 'a', b: 'b', c: 'c' });
  });

  it('Should return "{ ab: "ab", bb: "bb", cb: "cb" }" if string "ab bb cb" is provided', () => {
    expect(stringToObject('ab bb cb')).toMatchObject({
      ab: 'ab',
      bb: 'bb',
      cb: 'cb',
    });
  });

  it('Should return "{}" if empty string is provided', () => {
    expect(stringToObject('')).toMatchObject({});
  });

  it('Should return "{ ab: "ab" }" if string with duplicated value "ab ab" is provided', () => {
    expect(stringToObject('ab ab')).toMatchObject({ ab: 'ab' });
  });
});
