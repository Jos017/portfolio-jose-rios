const deleteAllWhiteSpace = (str: string) => {
  return str.replaceAll(/\s/g, '');
};

export { deleteAllWhiteSpace };
