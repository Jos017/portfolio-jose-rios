const objectToString = (
  obj: { [key: string]: string },
  type: 'keys' | 'values' = 'keys'
) => {
  const objProps =
    type === 'values' ? Object.values(obj) : Object.keys(obj);
  const str = objProps.join(' ');

  return str;
};

export { objectToString };
