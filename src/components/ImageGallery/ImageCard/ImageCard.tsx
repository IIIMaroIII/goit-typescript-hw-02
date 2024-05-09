import { FC } from "react";
import css from "./imageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({
  onModalOpen,
  alt_description,
  urls,
  id,
}) => {
  return (
    <div className={css.wrapper}>
      <img
        loading="lazy"
        id={id}
        className={css.image}
        src={!onModalOpen ? `${urls.full}` : `${urls.small}`}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
