import { findObjectByKeyValueInArray } from '../../utils/arrayUtils';

describe('findObjectByKeyValueInArray function', () => {
  const arrayToTest = [
    { firstName: 'Peter', lastName: 'Parker', age: 38 },
    { firstName: 'Gwen', lastName: 'Stacy', age: 17 },
    { firstName: 'Miles', lastName: 'Morales', age: 17 },
  ];

  test('Should return object if the key value is found', () => {
    const objectFound = findObjectByKeyValueInArray(
      arrayToTest,
      'firstName',
      'Peter'
    );
    expect(objectFound).toStrictEqual(arrayToTest[0]);
  });

  test('Should return object if the key value is found and is provided all in uppercase', () => {
    const objectFound = findObjectByKeyValueInArray(
      arrayToTest,
      'firstName',
      'MILES'
    );
    expect(objectFound).toStrictEqual(arrayToTest[2]);
  });

  test('Should return object if the key value is a number is provided a string as number', () => {
    const objectFound = findObjectByKeyValueInArray(arrayToTest, 'age', '38');
    expect(objectFound).toStrictEqual(arrayToTest[0]);
  });

  test('Should return object if the key value is a number is provided a number', () => {
    const objectFound = findObjectByKeyValueInArray(arrayToTest, 'age', 38);
    expect(objectFound).toStrictEqual(arrayToTest[0]);
  });

  test('Should return the first object if there ara multiple objects with the same key value', () => {
    const objectFound = findObjectByKeyValueInArray(arrayToTest, 'age', 17);
    expect(objectFound).toStrictEqual(arrayToTest[1]);
  });

  test('Should return undefined if no object is found', () => {
    const noObjectFound = findObjectByKeyValueInArray(
      arrayToTest,
      'lastName',
      'Stark'
    );
    expect(noObjectFound).toBeUndefined();
  });
});
