
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import './ParentComponent.css';

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={showModal ? 'App backdrop' : 'App'}>
      <button
        onClick={() => setShowModal(true)}
        className={showModal ? 'open-btn disabled' : 'open-btn'}
        disabled={showModal}
      >
        Open Modal
      </button>
      {showModal &&
        createPortal(
          <Modal setShowModal={setShowModal} />,
          document.body
        )}
    </div>
  );
};

export default ParentComponent;
