import ReactModal from "react-modal";
// import { createPortal } from 'react-dom';
import { IoMdClose } from "react-icons/io";

import Button from "../reusable/Button/Button";
import css from "./imageModal.module.css";

ReactModal.setAppElement("#modal-root");

const ImageModal = ({ children, showModal, toggleModal }) => {
  return (
    <ReactModal
      isOpen={showModal}
      parentSelector={() => {
        return document.getElementById("modal-root");
      }}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.backdrop}
      onRequestClose={toggleModal}
      className={css.content}
    >
      <Button className={css.btn} onClick={() => toggleModal()}>
        <IoMdClose className={css.icon} />
      </Button>
      {children}
    </ReactModal>
  );
};

ImageModal.propTypes = {};

export default ImageModal;
