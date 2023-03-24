import { useState } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import styles from "./index.module.scss";

const Checkbox = (props) => {
  const { label, onClick, name, onChange, error, required } = props;
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    onClick(e);
    onChange({ target: { value: !check } });
    setCheck(!check);
  };

  return (
    <div>
      <div className={styles.check}>
        <InputMask
          id="checkbox"
          onChange={handleChange}
          type="checkbox"
          checked={check}
        />
        {label && <label htmlFor="checkbox">{label}</label>}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onclick: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.string,
  required: PropTypes.bool,
};

Checkbox.defaultProps = {
  name: "",
  label: "",
  onClick: () => {},
  onChange: () => {},
  error: "",
  required: false,
};

export default Checkbox;
