import './modal.css';

const Modal = ({ open, closeImg, message, onClose }) => {
  return (
    <>
      {open && (
        <div className="modal-overlay">
          <dialog open={open} className="validation-modal">
            <p>{message}</p>
            <a href="#" onClick={onClose}>
              <img src={closeImg} alt="close button" />
            </a>
          </dialog>
        </div>
      )}
    </>
  );
};

export default Modal;
