export interface useDragAndDropProps {
  multiple: boolean;
  onChange: (files: File[] | File | null) => void;
}
