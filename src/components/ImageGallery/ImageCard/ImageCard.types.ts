export interface ImageCardProps {
  onModalOpen?: () => void;
  id: string;
  alt: string;
  urls: {
    full: string;
    small: string;
    raw?: string;
    regular?: string;
    thumb?: string;
    small_s3?: string;
  };
}
