import { FC } from "react";
import css from "./imageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({ onModalOpen, alt, urls, id }) => {
  return (
    <div className={css.wrapper}>
      <img
        loading="lazy"
        id={id}
        className={css.image}
        src={!onModalOpen ? `${urls.full}` : `${urls.small}`}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
