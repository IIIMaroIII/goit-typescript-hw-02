import { AppErrorState } from "../App/App.types";

export interface LoadMoreBtnProps {
  error: AppErrorState | null;
  onLoadMore: () => number | void;
}
