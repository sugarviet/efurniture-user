/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import AppDarkLayer from "../AppDarkLayer";
import PropTypes from 'prop-types';

const AppModal = ({ isOpen, onClose, children }) => {

  const modalRef = useRef();
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
    
      <AppDarkLayer isOpen={isOpen} onClose={onClose}/>

      <div
        className={`fixed inset-0 flex items-center justify-center z-50  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
      >
        <div
          className="bg-white w-1/2 p-6 rounded-lg shadow-lg max-h-[700px] overflow-y-auto"
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="ml-auto flex justify-end p-1/5 h-6 w-6">
            <button
              className="bg-black text-sm text-white w-6 h-6 flex justify-center items-center rounded-full"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

AppModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default AppModal;
