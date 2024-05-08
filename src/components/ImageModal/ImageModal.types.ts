import { ReactElement } from "react";

export interface ImageModalProps {
  children: ReactElement;
  showModal: boolean;
  toggleModal: () => void;
}
