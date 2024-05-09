import { AppItemsState, AppSelectedImageState } from "../App/App.types";

export interface ImageGalleryProps {
  setImage: (image: AppSelectedImageState) => void;
  data: AppItemsState[];
  toggleModal: () => void;
}
