import { useEffect } from "react";

const useClickOutside = (ref, callback, isOpen) => {
  const handleClickOutside = (event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref, callback]);

 
};

export default useClickOutside;
