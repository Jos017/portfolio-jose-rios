import { objectToString } from './objectUtils';
import { stringToObject } from './stringUtils';

const addToClassName = (
  currentClassName: string,
  additionalClassName: string
) => {
  if (currentClassName && !additionalClassName) {
    return currentClassName;
  }

  if (!currentClassName && additionalClassName) {
    return additionalClassName;
  }

  if (currentClassName && additionalClassName) {
    const currentClassNameObj = stringToObject(currentClassName);
    const additionalClassNameObj = stringToObject(additionalClassName);
    const newClassNameObj = {
      ...currentClassNameObj,
      ...additionalClassNameObj,
    };
    const className = objectToString(newClassNameObj);
    return className;
  }

  return '';
};

export { addToClassName };
