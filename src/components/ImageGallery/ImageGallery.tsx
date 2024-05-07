import css from "./imageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ setImage, data, toggleModal }) => {
  const handleSelectedImages = (id, alt, urls) => {
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
