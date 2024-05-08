import { FC, FormEvent, useEffect, useState } from "react";
import Button from "../reusable/Button/Button";
import { IoSearchOutline } from "react-icons/io5";
import css from "./searchBar.module.css";
import clsx from "clsx";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const inputValue = (e.target as HTMLFormElement).elements.namedItem(
      "search"
    ) as HTMLInputElement;
    onSearch(inputValue.value);
  };
  return (
    <>
      <nav className={clsx(css.wrapper, loaded && css.wrapperLoad)}>
        <form className={css.form} onSubmit={onSubmit}>
          <input className={css.input} type="text" name="search" />
          <Button className={css.btn} type="submit">
            <IoSearchOutline className={css.icon} />
          </Button>
        </form>
      </nav>
    </>
  );
};

export default SearchBar;
