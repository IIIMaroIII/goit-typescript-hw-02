import css from "./imageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";
import { FC } from "react";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: FC<ImageGalleryProps> = ({
  setImage,
  data,
  toggleModal,
}) => {
  const handleSelectedImages = (
    id: string,
    alt_description: string,
    urls: {
      full: string;
      small: string;
      raw?: string;
      regular?: string;
      thumb?: string;
      small_s3?: string;
    }
  ): void => {
    toggleModal();
    setImage({ id, alt_description, urls });
  };

  return (
    <ul className={css.gallery}>
      {data.map(({ id, alt_description, urls, ...restArgs }) => {
        return (
          <li
            onClick={() => handleSelectedImages(id, alt_description, urls)}
            key={id}
            className={css.item}
          >
            <ImageCard
              onModalOpen={toggleModal}
              alt={alt_description}
              urls={urls}
              id={id}
              {...restArgs}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
