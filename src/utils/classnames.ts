import { isString, isObject, isArray } from "./is";

const classnames = (...args: unknown[]): string => {
  const list: string[] = [];
  for (const argItem of args) {
    if (!argItem) continue;
    if (isString(argItem)) {
      list.push(argItem);
    } else if (isArray(argItem)) {
      for (const item of argItem) {
        list.push(classnames(item));
      }
    } else if (isObject(argItem)) {
      for (const [key, value] of Object.entries(argItem)) {
        if (value) {
          list.push(key);
        }
      }
    }
  }

  return list.join(" ");
};

export default classnames;
