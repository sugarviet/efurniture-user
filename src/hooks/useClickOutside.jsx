import { useEffect, useRef } from "react";

const useClickOutside = (ref, callback, enabled = true) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (enabled) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enabled, ref, callback]);

  return {
    handleClickOutside
  }
};

export default useClickOutside;
