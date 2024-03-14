/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import useClickOutside from "@hooks/useClickOutside";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const AppModal = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef();

  useClickOutside(modalRef, onClose, isOpen);

  return (
    <>
      {createPortal(
        <>
          {isOpen ? <div className="furniture-overlay"></div> : null}

          <div
            className={`fixed inset-0 flex items-center justify-center z-50  ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
          >
            <div
              className={`bg-white w-1/2 p-6 rounded-lg shadow-lg overflow-y-auto ${className}`}
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
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {children}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

AppModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AppModal;
