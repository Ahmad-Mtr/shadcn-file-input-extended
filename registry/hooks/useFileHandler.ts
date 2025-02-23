import { useFileHandlerProps } from '@/types';
import { useState, useRef } from 'react';

export function useFileHandler({
  initialValue,
  onChange,
  multiple,
}: useFileHandlerProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>(
    initialValue || []
  );
  const [dragOver, setDragOver] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: File[]) => {
    if (multiple) {
      setSelectedFiles(files);
      onChange(files.length > 0 ? files : null);
    } else {
      const singleFile = files[0] || null;
      setSelectedFiles(singleFile ? [singleFile] : []);
      onChange(singleFile);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    handleFiles(files);
  };

  const removeFile = (index: number) => {
    let updatedFiles: File[] = [];

    if (multiple) {
      updatedFiles = selectedFiles.filter((_, i) => i !== index);
      setSelectedFiles(updatedFiles);
      onChange(updatedFiles.length > 0 ? updatedFiles : null);
    } else {
      setSelectedFiles([]);
      onChange(null);
    }

    if (fileRef.current) {
      fileRef.current.value = '';
    }

    if (multiple && updatedFiles.length > 0 && fileRef.current) {
      const dataTransfer = new DataTransfer();
      updatedFiles.forEach((file) => dataTransfer.items.add(file));
      fileRef.current.files = dataTransfer.files;
    }
  };

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

  return {
    fileRef,
    selectedFiles,
    handleFileChange,
    removeFile,
    dragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
}
