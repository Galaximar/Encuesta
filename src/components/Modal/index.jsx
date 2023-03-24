import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import useOutsideClick from "../../hooks/useOutsideClick";
import Button from "../Button";

import styles from "./index.module.scss";

const Modal = ({ title, description, labelButton, onClickButton }) => {
  const [open, setOpen] = useState(true);
  const modalRef = useRef();
  useOutsideClick(modalRef, () => {
    setOpen(false);
    window.location.reload();
  });
  return (
    <>
      {open && (
        <div className={styles.backdrop}>
          <div ref={modalRef} className={styles.modal}>
            <button
              onClick={() => {
                setOpen(false);
                window.location.reload();
              }}
              className={styles.closeIcon}
            >
              <IoMdClose fontSize={30} />
            </button>
            <p>{title}</p>
            <p>{description}</p>
            <Button
              buttonStyles={{ justifyContent: "center" }}
              label={labelButton}
              onClick={onClickButton}
              width="90%"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
