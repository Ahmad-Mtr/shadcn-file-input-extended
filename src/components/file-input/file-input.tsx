import { Input } from "@/components/ui/input";
import { FileInputProps } from "@/types";
import { useFileInput } from "@/hooks";
import Filelist from "./file-list";
import FileDropzone from "./file-dropzone";
import FilePreview from "./file-preview";

export const FileInput: React.FC<FileInputProps> = ({
  field,
  accept,
  multiple = false,
  showDropzone = true,
}) => {
  const { fileRef, selectedFiles, handleFileChange, removeFile } = useFileInput(
    {
      initialValue: field.value,
      onChange: field.onChange,
      multiple,
    }
  );

  return (
    <div className="space-y-2">
      {showDropzone ? (
        <>
          <FileDropzone field={field} accept={accept} multiple={multiple} />
          <FilePreview files={selectedFiles} onRemove={removeFile} />
        </>
      ) : (
        <>
          <Input
            type="file"
            ref={fileRef}
            accept={accept}
            multiple={multiple}
            onChange={handleFileChange}
          />
          <Filelist files={selectedFiles} onRemove={removeFile} />
        </>
      )}
    </div>
  );
};
