import { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ setShowModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowModal]);

  return (
    <div className='modal' ref={modalRef}>
      <button className='cross-btn' onClick={() => setShowModal(false)}>X</button>
      <span id="emoji">✅</span>
      <p>Claimed Successfully</p>
      <p>You have claimed 5,00,000 practice chips for today. Try again tomorrow</p>
      <button onClick={() => setShowModal(false)} className='close-btn'>Okay</button>
    </div>
  );
};

export default Modal;
