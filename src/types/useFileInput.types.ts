export interface useFileInputProps {
  initialValue: File[] | null;
  onChange: (files: File[] | File | null) => void;
  multiple: boolean;
}
