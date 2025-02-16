import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FileInputProps } from "./types";
import Filelist from "./file-list";

export const FileInput: React.FC<FileInputProps> = ({
  field,
  accept,
  multiple = false,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>(field.value || []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];

    if (multiple) {
      setSelectedFiles(files);
      field.onChange(files.length > 0 ? files : null);
    } else {
      const singleFile = files[0] || null;
      setSelectedFiles(singleFile ? [singleFile] : []);
      field.onChange(singleFile);
    }
  };

  const removeFile = (index: number) => {
    if (multiple) {
      const updatedFiles = selectedFiles.filter((_, i) => i !== index);
      setSelectedFiles(updatedFiles);
      field.onChange(updatedFiles.length > 0 ? updatedFiles : null);
    } else {
      setSelectedFiles([]);
      field.onChange(null);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
      />
      <Filelist files={selectedFiles} onRemove={removeFile} />
    </div>
  );
};
