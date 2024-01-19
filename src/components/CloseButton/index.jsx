import { XMarkIcon } from "@heroicons/react/24/outline";

function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
      onClick={onClick}
    >
      <span className="absolute -inset-0.5" />
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export default CloseButton;
