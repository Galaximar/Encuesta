import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import styles from "./index.module.scss";

const Input = (props) => {
  const { error, required, name, onChange, label, type, placeholder, mask } =
    props;

  return (
    <div className={styles.inputContainer}>
      {label && (
        <p className={styles.label}>
          {label}
          {required ? " *" : ""}
        </p>
      )}
      <InputMask
        mask={mask}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        autoComplete="off"
        required={required}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
Input.propTypes = {
  error: PropTypes.string,
  mask: PropTypes.string,
  type: PropTypes.oneOf(["email", "password", "text", "number"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  error: "",
  mask: "",
  onChange: () => {},
  placeholder: "",
  label: "",
  type: "text",
  name: "",
  required: false,
};

export default Input;
