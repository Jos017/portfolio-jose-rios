import { objectToString } from './objectUtils';
import { stringToObject } from './stringUtils';

const addToClassName = (...className: string[]) => {
  const allClassesStr = className.filter(Boolean).join(' ');
  const allClassesObj = stringToObject(allClassesStr);
  const noDuplicatedClasses = objectToString(allClassesObj);
  return noDuplicatedClasses;
};

export { addToClassName };
