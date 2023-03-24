import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./index.module.scss";

const Button = (props) => {
  const {
    label,
    onClick,
    submit,
    ariaLabel,
    variant,
    width,
    endIcon,
    buttonStyles,
  } = props;
  const buttonClass = cn({
    [styles.button]: true,
    [styles[variant]]: true,
  });

  return (
    <button
      className={buttonClass}
      type={submit ? "submit" : "button"}
      style={{ width, ...buttonStyles }}
      aria-label={ariaLabel || label || "Icono de acción"}
      onClick={onClick}
      disabled={variant === "disabled"}
    >
      {label && <p>{label}</p>}
      {endIcon}
    </button>
  );
};

Button.propTypes = {
  buttonStyles: PropTypes.object,
  /**
   * Se renderiza un ícono dentro del botón ubicado a la derecha:
   */
  endIcon: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "disabled"]),
  /**
   * El botón renderiza un texto dentro si se le pasa:
   */
  label: PropTypes.string,
  /**
   * Aria label del boton:
   */
  ariaLabel: PropTypes.string,
  /**
   * El botón ejecuta la función que se le pase por el evento onClick:
   */
  onClick: PropTypes.func,
  /**
   * Si se quiere que el botón sea del tipo submit se le debe pasar ésta prop como true:
   */
  submit: PropTypes.bool,
  width: PropTypes.string,
};

Button.defaultProps = {
  buttonStyles: {},
  endIcon: null,
  label: "",
  ariaLabel: "",
  onClick: () => {},
  variant: "primary",
  width: "",
};

export default Button;
