import styles from "./index.module.scss";

const Spinner = () => {
  return (
    <div className={styles.backdrop}>
      <span className={styles.loader} />
    </div>
  );
};
export default Spinner;
