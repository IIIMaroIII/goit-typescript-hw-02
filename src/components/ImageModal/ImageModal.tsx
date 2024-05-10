import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";

import Button from "../reusable/Button/Button";
import css from "./imageModal.module.css";
import { FC } from "react";
import { ImageModalProps } from "./ImageModal.types";

ReactModal.setAppElement("#modal-root");

const ImageModal: FC<ImageModalProps> = ({
  children,
  showModal,
  toggleModal,
}) => {
  return (
    <ReactModal
      isOpen={showModal}
      parentSelector={() => {
        return document.getElementById("modal-root") as HTMLElement;
      }}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.backdrop}
      onRequestClose={toggleModal}
      className={css.content}
    >
      <>
        <Button className={css.btn} onClick={() => toggleModal()}>
          <IoMdClose className={css.icon} />
        </Button>
        {children}
      </>
    </ReactModal>
  );
};

export default ImageModal;
