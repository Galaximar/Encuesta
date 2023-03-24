const maxLength = (text, max, errorMessage) => {
  const isValid = text?.length <= max;

  return isValid ? { isValid: true } : { isValid: false, errorMessage };
};
export default maxLength;
