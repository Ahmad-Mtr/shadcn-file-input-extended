import { Input } from '../ui/input';
import { FileInputProps } from '@/types';
import { useFileHandler } from '@/hooks';
import FilePreview from './file-preview';
import FileDropzone from './file-dropzone';
import Filelist from './file-list';

export const FileInput: React.FC<FileInputProps> = ({
  field,
  accept,
  multiple = false,
  showDropzone = true,
}) => {
  const {
    fileRef,
    selectedFiles,
    handleFileChange,
    removeFile,
    dragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useFileHandler({
    initialValue: field.value,
    onChange: field.onChange,
    multiple,
  });

  return (
    <div className="space-y-2">
      {showDropzone ? (
        <>
          <FileDropzone
            accept={accept}
            multiple={multiple}
            dragOver={dragOver}
            fileRef={fileRef}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            handleFileChange={handleFileChange}
          />
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
