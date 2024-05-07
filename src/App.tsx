import { useState, useEffect, ReactElement } from "react";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import API from "./components/services/API";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageCard from "./components/ImageGallery/ImageCard/ImageCard";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import "./App.css";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImageCardProps } from "./components/ImageGallery/ImageCard/ImageCard.types";

function App() {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedImage, setSelectedImage] = useState<ImageCardProps | null>(
    null
  );
  const [items, setItems] = useState<ImageCardProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [query, setQuery] = useState("");

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  const onLoadMore = (): void => {
    setPage((p) => p + 1);
  };

  function toggleLoadMoreAndLoader(): ReactElement {
    if (!isLoading) {
      return <LoadMoreBtn error={error} onLoadMore={onLoadMore} />;
    }
    return <Loader />;
  }

  const onHandleSearchSubmit = (value: string): void => {
    if (value === "") {
      setError({ message: "Type in your request" });
      return;
    }

    setQuery(value);
    setItems([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;
    setError(null);
    async function fetch(): Promise<void> {
      try {
        setIsLoading(true);
        const { total_pages, results } = await API(query, page, setError);
        if (results.length === 0) {
          setError({ message: "We`ve found nothing according your request" });
          return;
        }
        if (page === total_pages) {
          setError({ message: "You`ve reached the end of collection" });
          return;
        }
        setItems((p) => [...p, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        if (error instanceof Error) setError({ message: error.message });
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [page, query]);

  return (
    <>
      <div className="searchWrapper">
        <SearchBar showModal={toggleModal} onSearch={onHandleSearchSubmit} />
        {isLoading && (
          <div className="loaderWrapper">
            <Loader />
          </div>
        )}
        {!error ? null : (
          <ErrorMessage
            close={() => {
              setError(null);
            }}
          >
            {error.message}
          </ErrorMessage>
        )}
      </div>

      {items.length > 0 && (
        <div className="wrapper">
          <div className="galleryWrapper">
            <ImageGallery
              setImage={setSelectedImage}
              toggleModal={toggleModal}
              data={items}
            />
            {toggleLoadMoreAndLoader()}
          </div>
        </div>
      )}
      {showModal && (
        <ImageModal showModal={showModal} toggleModal={toggleModal}>
          <ImageCard {...selectedImage} />
        </ImageModal>
      )}
    </>
  );
}
export default App;
