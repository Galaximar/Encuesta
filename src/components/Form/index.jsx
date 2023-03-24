import { cloneElement, useState } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";

import styles from "./index.module.scss";

const Form = ({ onSubmit, children }) => {
  const { errors, formState, onFieldChange, handleUseFormSubmit } =
    useForm(children);
  const [disabledForm, setDisabledForm] = useState(false);
  const cloneFormElement = (child) => {
    return cloneElement(child, {
      key: child.props.name,
      value: formState[child.props.name],
      error: errors[child.props.name] ? errors[child.props.name] : "",
      defaultValue: child.props.defaultValue ? child.props.defaultValue : "",
      onSelect: (e) => {
        child.props.onChange(e);
        onFieldChange(e, child.props.name);
      },
      onChange: (e) => {
        child.props.onChange(e);
        onFieldChange(e.target, child.props.name);
      },
    });
  };
  const renderChildrens = () => {
    if (Array.isArray(children)) {
      return children.map((child) => {
        if (child && child.props.formData) {
          return child;
        } else if (child && !child.props?.submit) {
          return cloneFormElement(child);
        }
        return cloneElement(child, {
          key: child.props.label,
          variant:
            disabledForm || Object.values(errors).join("")
              ? "disabled"
              : "primary",
        });
      });
    }
    return createFormElement(children);
  };

  const handleSubmit = (e) =>
    handleUseFormSubmit(e, () => {
      setDisabledForm(true);
      onSubmit(formState);
    });

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      {renderChildrens()}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
};

export default Form;
