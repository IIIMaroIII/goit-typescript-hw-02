import React, { FC } from "react";
import css from "./loadMoreBtn.module.css";
import Button from "../reusable/Button/Button";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ error, onLoadMore }) => {
  return (
    <div className={css.wrapper}>
      {!error ? (
        <Button className={css.btn} onClick={onLoadMore}>
          Load more
        </Button>
      ) : (
        <Button className={css.loadMore} onClick={onLoadMore} disabled={true}>
          {error.message}
        </Button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
