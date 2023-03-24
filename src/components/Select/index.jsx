import PropTypes from "prop-types";
import { useState, useRef, useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";
import cn from "classnames";

import Button from "../Button";
import OptionItem from "./OptionItem";

import useOutsideClick from "../../hooks/useOutsideClick";

import styles from "./index.module.scss";

const Select = (props) => {
  const {
    error,
    options,
    onChange,
    onSelect,
    defaultValue,
    label,
    required,
    placeholder,
    name,
  } = props;

  const selectRef = useRef();

  const defaultValueName = useMemo(
    () => !placeholder && options.find((o) => o.value === defaultValue)?.label,
    [defaultValue]
  );

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(
    () => options.find((x) => x.value === defaultValue) || null
  );

  const selectClass = cn({
    [styles.container]: true,
  });

  const contentClass = cn({
    [styles.content]: true,
    [styles["content--visible"]]: open,
  });

  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  const handleSelect = (x) => {
    setSelected(x);
    setOpen(false);
    onChange(x);
    onSelect(x);
  };

  const renderOptions = () => {
    const opts = options.map((x) => (
      <OptionItem
        key={x.value}
        label={x.label}
        onClick={() => handleSelect(x)}
        active={selected?.value === x.value}
      />
    ));
    if (placeholder) {
      const optPlaceholder = placeholder ? (
        <OptionItem label={placeholder} unselectable />
      ) : (
        false
      );
      return [optPlaceholder, ...opts];
    }
    return opts;
  };

  return (
    <div className={selectClass} ref={selectRef}>
      {label && (
        <p className={styles.label}>
          {label}
          {required ? " *" : ""}
        </p>
      )}
      <Button
        buttonStyles={{
          background: "white",
          color: "black",
          border: "1px solid black",
        }}
        label={selected?.label || defaultValueName || placeholder}
        onClick={() => setOpen(!open)}
        width="100%"
        endIcon={<IoIosArrowDown style={{ fontSize: "26px" }} />}
      />
      <div className={contentClass}>
        <ul className={styles.list}>{renderOptions()}</ul>
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

Select.propTypes = {
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  /* Función que detecta algun cambio en el select */
  onChange: PropTypes.func,
  /* onSelect se usa para la lógica del useForm hook */
  onSelect: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

Select.defaultProps = {
  label: "",
  error: "",
  defaultValue: "",
  onChange: () => {},
  onSelect: () => {},
  required: false,
  placeholder: "",
  name: "",
};

export default Select;
