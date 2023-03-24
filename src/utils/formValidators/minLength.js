const minLength = (text, min, errorMessage) => {
  const isValid = text?.length >= min;

  return isValid ? { isValid: true } : { isValid: false, errorMessage };
};
export default minLength;
