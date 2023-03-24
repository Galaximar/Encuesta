import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./option-item.module.scss";

const OptionItem = (props) => {
  const { label, active, onClick } = props;
  const sortItemClass = cn({
    [styles.container]: true,
    [styles["container--active"]]: active,
  });

  return (
    <li className={sortItemClass}>
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </li>
  );
};

OptionItem.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

OptionItem.defaultProps = {};

export default OptionItem;
