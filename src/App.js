import React, { useState } from 'react';
import './App.css';
import Modal from './modal/Modal.js';

function App() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal open={open} message="Message de validation !" onClose={closeModal}/>
    </div>
  );
}

export default App;
