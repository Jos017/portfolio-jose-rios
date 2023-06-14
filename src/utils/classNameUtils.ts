import { objectToString } from './objectUtils';
import { stringToObject } from './stringUtils';

const addToClassName = (...className: (string | undefined)[]) => {
  const allClassesStr = className
    .filter((name) => name !== '' && name !== undefined)
    .join(' ');
  const allClassesObj = stringToObject(allClassesStr);
  const noDuplicatedClasses = objectToString(allClassesObj);
  return noDuplicatedClasses !== '' ? noDuplicatedClasses : undefined;
};

export { addToClassName };
