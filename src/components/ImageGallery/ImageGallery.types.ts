import { AppItemsState } from "../App/App.types";

export interface ImageGalleryProps {
  setImage: (image: {
    id: string;
    alt_description: string;
    urls: {
      full: string;
      small: string;
      raw?: string;
      regular?: string;
      thumb?: string;
      small_s3?: string;
    };
  }) => void;
  data: AppItemsState[];
  toggleModal: () => void;
}
