import { useEffect, useState } from "react";

const useForm = (formData = [], defaultValues) => {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});

  /* Llena el Form State con los Default Values */
  useEffect(() => {
    if (defaultValues) {
      setFormState(defaultValues);
    } else {
      let defaultValuesAux = {};
      formData.forEach(
        ({ props: { name, defaultValue, submit, formData } }) => {
          if (!submit && !formData) defaultValuesAux[name] = defaultValue || "";
          if (name === "withoutNumber") defaultValuesAux[name] = defaultValue;
        }
      );
      setFormState(defaultValuesAux);
    }
  }, []);
  /* Llena el objeto de errores */
  const runValidations = () => {
    let errorsAux = {};
    let isValidForm = true;
    formData.forEach(({ props: { name, validations, required, submit } }) => {
      let isFully = true;
      if ((required || validations?.length > 0) && !submit) {
        if (required) {
          if (!formState[name]) {
            errorsAux = { ...errorsAux, [name]: "Campo obligatorio" };
            isFully = false;
            isValidForm = false;
            return false;
          } else errorsAux = { ...errorsAux, [name]: "" };
        }
        if (validations?.length >= 1 && isFully) {
          for (let i = 0; i < validations?.length; i++) {
            const { isValid, errorMessage } = validations[i](formState[name]);

            if (isValid) {
              errorsAux = { ...errorsAux, [name]: "" };
            } else {
              errorsAux = {
                ...errorsAux,
                [name]: errorMessage || "Campo incorrecto",
              };
              isValidForm = false;
              break;
            }
          }
        } else if (validations?.length > 0 && isFully) {
          const { isValid, errorMessage } = validations[0](formState[name]);
          if (isValid) {
            errorsAux = { ...errorsAux, [name]: "" };
          } else {
            errorsAux = {
              ...errorsAux,
              [name]: errorMessage || "Campo incorrecto",
            };
            isValidForm = false;
          }
        } else {
          return true;
        }
      }
      // Si no tiene validación ni es requerido y vacio o es un boton, entonces es válido
      return true;
    });
    setErrors(errorsAux);
    return isValidForm;
  };

  /* Handle Change */
  const onFieldChange = (target, name) => {
    setFormState({
      ...formState,
      [name]: target?.value,
    });
    const maskCondition =
      typeof target?.value === "string"
        ? target.value.replace(/_|\//g, "")
        : true;
    if (maskCondition && errors[name]) setErrors({ ...errors, [name]: "" });
  };

  /* Handle Submit */
  const handleUseFormSubmit = (e, onSubmit) => {
    e?.preventDefault();
    const isValidForm = runValidations();
    isValidForm && onSubmit();
  };

  return {
    onFieldChange,
    handleUseFormSubmit,
    errors,
    formState,
  };
};

export default useForm;
