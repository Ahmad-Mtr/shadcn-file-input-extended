import { InputProps } from './generic.types';

export interface FileDropzoneProps extends InputProps {
  dragOver: boolean;
  fileRef: React.RefObject<HTMLInputElement | null>;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
