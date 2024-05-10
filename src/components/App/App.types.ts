export interface AppItemsState {
  id: string;
  slug: string;
  alternative_slugs: object;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description?: string | undefined;
  breadcrumbs: [];
  urls: {
    full: string;
    small: string;
    raw?: string;
    regular?: string;
    thumb?: string;
    small_s3?: string;
  };
  links: object;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: object;
  asset_type: string;
  user: object;
  tags: [];
}

export interface AppErrorState {
  message: string;
}

// export interface AppSelectedImageState {
//   id: string;
//   alt_description: string;
//   urls: {
//     full: string;
//     small: string;
//     raw?: string;
//     regular?: string;
//     thumb?: string;
//     small_s3?: string;
//   };
// }

export type AppSelectedImageState = Pick<
  AppItemsState,
  "id" | "urls" | "alt_description"
>;
