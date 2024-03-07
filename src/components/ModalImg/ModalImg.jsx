import Modal from 'react-modal';
import css from './ModalImg.module.css';

Modal.setAppElement(document.getElementById('root'));

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    cursor: 'pointer'
  },
  content: {
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: 'none',
    padding: 0,
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    }
  }

function ModalImg({modalIsOpen, closeModal, modalImg}) {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <img className={css.modalImg} src={modalImg.src} alt={modalImg.alt} />
      </Modal>
    )
}

export default ModalImg;