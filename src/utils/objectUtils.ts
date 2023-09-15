type ObjectKey = string | number | symbol;
type KeyValues = string | number;
type CommonObject = { [key: ObjectKey]: KeyValues };

const objectToString = (
  obj: { [key: ObjectKey]: string },
  type: 'keys' | 'values' = 'keys'
) => {
  const objProps = type === 'values' ? Object.values(obj) : Object.keys(obj);
  const str = objProps.join(' ');

  return str;
};

const joinValuesToString = (
  obj: CommonObject,
  keys: ObjectKey[],
  joinWith = ''
) => {
  const objectValuesArr = keys.map((key) => obj[key]);

  return objectValuesArr.join(joinWith);
};

export { joinValuesToString, objectToString };
