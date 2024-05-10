import { AppSelectedImageState } from "../../App/App.types";

export interface ImageCardProps extends AppSelectedImageState {
  onModalOpen?: () => void;
  alt?: string;
}
