import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Select from "../../components/Select";
import {
  isValidEmail,
  minLength,
  maxLength,
  validateBirthdate,
} from "../formValidators";

export const renderFormElement = ({ type, name, label, options, required }) => {
  if (type === "select") {
    return (
      <Select
        key={name}
        label={label}
        name={name}
        options={options}
        defaultValue={options[0]?.value}
        required={required}
      />
    );
  }
  if (type === "checkbox") {
    return (
      <Checkbox key={name} name={name} label={label} required={required} />
    );
  }
  if (type === "submit") {
    return (
      <Button
        key={label}
        buttonStyles={{ justifyContent: "center" }}
        submit
        label={label}
        width="100%"
      />
    );
  }
  const validationsFunctions = {
    date: [validateBirthdate],
    text: [
      (text) =>
        minLength(text, 2, "Ingresa una información mayor a 2 caracteres"),
      (text) =>
        maxLength(text, 20, "Ingresa una información menor a 20 caracteres"),
    ],
    email: [isValidEmail],
  };
  return (
    <Input
      key={name}
      mask={type === "date" ? "99/99/9999" : ""}
      name={name}
      label={label}
      required={required}
      validations={validationsFunctions[type]}
    />
  );
};
