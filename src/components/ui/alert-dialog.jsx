import React from "react";

const AlertDialog = ({ isOpen, onClose, title, description, onConfirm, cancelText = "Cancel", confirmText = "Continue" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{description}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-outline" onClick={onClose}>
            {cancelText}
          </button>
          <button className="btn-confirm" onClick={() => { onConfirm(); onClose(); }}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export { AlertDialog };