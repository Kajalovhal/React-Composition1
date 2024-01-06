import React, { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="Button">
      <button onClick={showModal}>Show Modal</button>
      <Modal onClose={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default Button;
