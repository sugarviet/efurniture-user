function AlertModal({ message, onConfirm, onCancel }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl font-bold text-center">{message}</p>
      <div className="flex gap-2 ml-auto">
        <button
          className="furniture-button-black-hover px-6 py-2.5"
          onClick={onConfirm}
        >
          Delete
        </button>
        <button
          className="furniture-button-black-hover px-6 py-2.5"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
