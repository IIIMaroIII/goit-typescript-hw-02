import css from "./imageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";
import { FC } from "react";
import { ImageCardProps } from "./ImageCard/ImageCard.types";

interface ImageGalleryProps {
  setImage: (
    id: Pick<ImageCardProps, "id">,
    alt: Pick<ImageCardProps, "alt">,
    urls: Pick<ImageCardProps, "urls">
  ) => void;
  data: ImageCardProps[];
  toggleModal: () => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  setImage,
  data,
  toggleModal,
}) => {
  const handleSelectedImages = (
    id: Pick<ImageCardProps, "id">,
    alt: Pick<ImageCardProps, "alt">,
    urls: Pick<ImageCardProps, "urls">
  ) => {
    toggleModal();
    setImage({ id, alt, urls });
  };

  return (
    <ul className={css.gallery}>
      {data.map(({ id, alt, urls, ...restArgs }) => {
        return (
          <li
            onClick={() => handleSelectedImages(id, alt, urls)}
            key={id}
            className={css.item}
          >
            <ImageCard
              onModalOpen={toggleModal}
              alt={alt}
              urls={urls}
              {...restArgs}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
