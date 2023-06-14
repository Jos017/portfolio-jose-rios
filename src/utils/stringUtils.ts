const stringToObject = (str: string) => {
  const obj: { [key: string]: string } = {};
  const words = str.split(' ');
  
  words.forEach((word) => (obj[word] = word));
  
  return obj;
};

export { stringToObject };
