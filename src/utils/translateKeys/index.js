export const translateKeys = (obj, dic) => {
  const newObject = {};
  for (const key in obj) {
    const newKey = dic[key];
    newObject[newKey] = obj[key];
  }
  return newObject;
};
