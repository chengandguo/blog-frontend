export const sleep = (time: number) => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(time);
    }, time);
  });
};
