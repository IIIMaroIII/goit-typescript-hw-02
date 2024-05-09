import { useEffect, FC, KeyboardEvent, ReactElement } from "react";

import css from "./errorMessage.module.css";
import Button from "../reusable/Button/Button";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { ErrorMessageProps } from "./errorMessage.types";

const ErrorMessage: FC<ErrorMessageProps> = ({ close, children }) => {
  const closeModalByClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  // const closeModalByEsc: EventListener = (e: KeyboardEvent<HTMLDivElement>) => {
  //   if (e.code === "Escape") {
  //     close();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", closeModalByEsc);
  //   return () => {
  //     window.removeEventListener("keydown", closeModalByEsc);
  //   };
  // }, []);
  return (
    <div className={clsx(css.wrapper, css.wrapperLoad)}>
      <p className={css.text}>{children}</p>
      <Button className={css.btn} onClick={close}>
        <IoMdClose className={css.icon} />
      </Button>
    </div>
  );
};

export default ErrorMessage;
