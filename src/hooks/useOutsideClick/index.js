import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    // Time out para que no ejecute el callback con el primer click
    setTimeout(() => {
      document.addEventListener("click", handleClick, { passive: true });
    }, 10);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
