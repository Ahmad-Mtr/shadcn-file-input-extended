export interface useFileHandlerProps {
  initialValue?: File[];
  onChange: (file: File | File[] | null) => void;
  multiple?: boolean;
}
