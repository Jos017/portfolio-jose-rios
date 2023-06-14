import { objectToString } from '../../utils/objectUtils';

describe('stringToObject function', () => {
  describe('Provided object "{ keyA: "valueA", keyB: "valueB", keyC: "valueC" }"', () => {
    describe('Given argument "type" equal to "values"', () => {
      it('Should return "valueA valueB valueC"', () => {
        expect(
          objectToString(
            { keyA: 'valueA', keyB: 'valueB', keyC: 'valueC' },
            'values'
          )
        ).toBe('valueA valueB valueC');
      });
    });

    describe('Given argument "type" equal to "keys"', () => {
      it('Should return "keyA keyB keyC"', () => {
        expect(
          objectToString(
            { keyA: 'valueA', keyB: 'valueB', keyC: 'valueC' },
            'keys'
          )
        ).toBe('keyA keyB keyC');
      });
    });

    describe('Given no argument "type"', () => {
      it('Should return "keyA keyB keyC"', () => {
        expect(
          objectToString({ keyA: 'valueA', keyB: 'valueB', keyC: 'valueC' })
        ).toBe('keyA keyB keyC');
      });
    });
  });
  describe('Provided an empty object', () => {
    it('Should return an empty string', () => {
      expect(objectToString({})).toBe('');
    });
  });
});
