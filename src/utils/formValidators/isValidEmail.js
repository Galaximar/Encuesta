const isValidEmail = (email) => {
  const isValid = email?.match(
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
  );
  const errorMessage = 'Éste email no es válido';

  return isValid ? { isValid: true } : { isValid: false, errorMessage };
};
export default isValidEmail;
