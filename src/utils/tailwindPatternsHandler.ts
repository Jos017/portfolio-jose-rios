const getPattern = (tailwindClass: string) => {
  if (tailwindClass) {
    return new RegExp(`${tailwindClass}-(?:\\[\\S+\\]|[\\w-]+)`, 'g');
  }
};

export { getPattern };
