import { FileDropzoneProps } from '@/types';
import { Input } from '@/components/ui/input';

const FileDropzone: React.FC<FileDropzoneProps> = ({
  accept,
  multiple,
  dragOver,
  fileRef,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileChange,
}) => {
  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  return (
    <div
      className={`flex justify-center items-center p-4 border-2 rounded-lg transition-colors cursor-pointer h-24 
      ${dragOver ? 'border-primary bg-primary/10' : 'border-muted bg-muted/50'} 
      hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p className="text-center text-gray-600">Drag & drop files here</p>

      <Input
        type="file"
        ref={fileRef}
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default FileDropzone;
