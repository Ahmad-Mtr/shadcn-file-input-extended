import { useFileInputProps } from "@/types";
import { useRef, useState } from "react";

export function useFileInput({
  initialValue,
  onChange,
  multiple,
}: useFileInputProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>(
    initialValue || []
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];

    if (multiple) {
      setSelectedFiles(files);
      onChange(files.length > 0 ? files : null);
    } else {
      const singleFile = files[0] || null;
      setSelectedFiles(singleFile ? [singleFile] : []);
      onChange(singleFile);
    }
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
      fileRef.current.value = "";
    }

    if (multiple && updatedFiles.length > 0 && fileRef.current) {
      const dataTransfer = new DataTransfer();
      updatedFiles.forEach((file) => dataTransfer.items.add(file));
      fileRef.current.files = dataTransfer.files;
    }
  };

  return { fileRef, selectedFiles, handleFileChange, removeFile };
}
