import { deleteAllWhiteSpace } from '../../utils/stringsHandler';

describe('deleteAllWhiteSpace function', () => {
  it('Should return "ThisHasNoSpace" if a single space is provided', () => {
    expect(deleteAllWhiteSpace(' This Has No Space ')).toBe('ThisHasNoSpace');
  });

  it('Should return "ThisHasNoSpace" if single TABs are provided', () => {
    expect(deleteAllWhiteSpace('\tThis\tHas\tNo\tSpace\t\t')).toBe(
      'ThisHasNoSpace'
    );
  });

  it('Should return "ThisHasNoSpace" if single newlines are provided', () => {
    expect(
      deleteAllWhiteSpace('\n\n\nThis\n\n\nHas\n\n\nNo\n\n\nSpace\n\n\n')
    ).toBe('ThisHasNoSpace');
  });

  it('Should return "ThisHasNoSpace" if multiple spaces are provided', () => {
    expect(deleteAllWhiteSpace('   This   Has   No   Space   ')).toBe(
      'ThisHasNoSpace'
    );
  });

  it('Should return "ThisHasNoSpace" if multiple TABs are provided', () => {
    expect(
      deleteAllWhiteSpace('\t\t\tThis\t\t\tHas\t\t\tNo\t\t\tSpace\t\t\t')
    ).toBe('ThisHasNoSpace');
  });

  it('Should return "ThisHasNoSpace" if multiple newlines are provided', () => {
    expect(deleteAllWhiteSpace('\nThis\nHas\nNo\nSpace\n')).toBe(
      'ThisHasNoSpace'
    );
  });

  it('Should return "" if "" is provided', () => {
    expect(deleteAllWhiteSpace('')).toBe('');
  });
});
