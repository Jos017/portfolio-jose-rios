const findObjectByKeyValueInArray = <T>(
  arr: T[],
  key: keyof T ,
  value: string | number
): T | undefined => {
  return arr.find(
    (item) =>
      `${(item as { [key: string]: string | number })[key as string]}`.toLowerCase() ===
      `${value}`.toLowerCase()
  );
};

export { findObjectByKeyValueInArray };
