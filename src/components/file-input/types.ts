import { ControllerRenderProps } from "react-hook-form";

export type FileInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  accept?: string;
  multiple?: boolean;
};

export interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

export interface FileItemProps {
  file: File;
  onRemove: () => void;
}
