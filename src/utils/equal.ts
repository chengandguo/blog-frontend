import { isArray, isObject } from "./is";

export const equal = (a: unknown, b: unknown) => {
  // string, boolean, number, function, same object reference, same array reference
  if (a === b) return true;

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) return false;
    for (const [index, aValue] of a.entries()) {
      if (!equal(aValue, b[index])) {
        return false;
      }
    }
    return true;
  }

  if (isObject(a) && isObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (const aKey of aKeys) {
      if (!equal(a[aKey], b[aKey])) {
        return false;
      }
    }
    return true;
  }

  return false;
};
