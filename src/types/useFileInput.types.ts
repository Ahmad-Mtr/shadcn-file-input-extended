export interface UseFileInputProps {
  initialValue: File[] | null;
  onChange: (files: File[] | File | null) => void;
  multiple: boolean;
}
