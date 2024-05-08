import { AppErrorState, AppItemsState } from "../App/App.types";

export type APIFunction = (
  value: string,
  page: number,
  onError: (error: AppErrorState) => void
) => Promise<{ total_pages: number; results: AppItemsState[] }>;
