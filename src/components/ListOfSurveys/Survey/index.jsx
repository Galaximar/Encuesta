import PropTypes from "prop-types";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button from "../../Button";
import styles from "./index.module.scss";
import cn from "classnames";

const Survey = (props) => {
  const { survey } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const contentClass = cn({
    [styles.content]: true,
    [styles.open]: isOpen,
    [styles.close]: !isOpen,
  });
  const renderSurvey = () => {
    const render = [];
    for (const key in survey) {
      render.push(<div key={key}>{`${key}: ${survey[key]}`}</div>);
    }
    return render;
  };
  return (
    <li className={styles.accordeon}>
      <Button
        buttonStyles={{
          background: "white",
          color: "black",
          border: "none",
          borderRadius: "0px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          padding: "30px 20px",
        }}
        label={survey["Nombre completo"]}
        width="100%"
        endIcon={<FiChevronDown style={{ fontSize: "26px" }} />}
        onClick={toggle}
      />
      <div className={contentClass}>
        <div className={styles.container}>{renderSurvey()}</div>
      </div>
    </li>
  );
};

Survey.propTypes = { survey: PropTypes.object.isRequired };

export default Survey;
