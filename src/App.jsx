// App.jsx
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ModalForm from './components/modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HiddenElement from './components/hidden/Hidden';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Navbar onOpenModal={() => setShowModal(true)} onShowHidden={()=> setVisible(true)} />
      {showModal && (
        <ModalForm onCloseModal={()=> setShowModal(false)}/>
      )}

      <HiddenElement visible={visible} hideIt={()=> setVisible(false)}/>
    </>
  );
}

export default App;
