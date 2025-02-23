import { UseDragAndDropProps } from "@/types";
import { useState, useRef } from "react";

export const useDragAndDrop = ({ multiple, onChange }: UseDragAndDropProps) => {
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    if (multiple) {
      onChange(files);
    } else {
      onChange(files[0] || null);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    handleFiles(files);
  };

  return {
    dragOver,
    fileRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
  };
};
