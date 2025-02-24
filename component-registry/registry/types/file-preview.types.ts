export interface FilePreviewProps {
  files: File[];
  onRemove: (
    index: number,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => void;
}
