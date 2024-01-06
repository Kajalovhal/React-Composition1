import React from "react";

const Modal = ({ onClose, isOpen }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-container">
        <button onClick={onClose}>Close Modal</button>
        <p>This is the content of Modal</p>
      </div>
    </div>
  );
};

export default Modal;
