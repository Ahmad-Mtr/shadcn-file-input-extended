export interface FileListProps {
  files: File[];
  onRemove: (
    index: number,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => void;
}
