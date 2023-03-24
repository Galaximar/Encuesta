export default function validateBirthDate(date) {
  let errorMessage = false;
  if (date.includes('-')) {
    const year = Number(date.split('-')[0]);
    const currentYear = new Date().getFullYear();
    if (
      year >= currentYear ||
      currentYear - year < 14 ||
      currentYear - year > 120
    ) {
      errorMessage = 'Ingrese una fecha válida (año)';
    }
  }
  if (date.length > 4) {
    const day = Number(date.split('/')[0]);
    const month = Number(date.split('/')[1]);
    const year = Number(date.split('/')[2]);

    const currentYear = new Date().getFullYear();

    if (day > 31 || day === 0) {
      errorMessage = 'Ingrese una fecha válida (día)';
    }
    if (month > 12 || month === 0) {
      errorMessage = 'Ingrese una fecha válida (mes)';
    }
    if (currentYear - year < 18) {
      errorMessage = 'Es necesario ser Mayor de edad (+18)';
    }
    if (year >= currentYear || currentYear - year > 120) {
      errorMessage = 'Ingrese una fecha válida (año)';
    }
  }

  return !errorMessage ? { isValid: true } : { isValid: false, errorMessage };
}
