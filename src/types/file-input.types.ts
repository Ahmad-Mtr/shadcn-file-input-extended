import { ControllerRenderProps } from "react-hook-form";

export type FileInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  accept?: string;
  multiple?: boolean;
  showDropzone?: boolean;
};
