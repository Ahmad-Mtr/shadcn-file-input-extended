export interface UseDragAndDropProps {
  multiple: boolean;
  onChange: (files: File[] | File | null) => void;
}
