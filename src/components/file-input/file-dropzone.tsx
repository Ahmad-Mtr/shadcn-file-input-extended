import { FileDropzoneProps } from "@/types/file-dropzone.types";

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
      className={`flex justify-center items-center p-4 border-2 rounded-lg transition cursor-pointer h-48 ${
        dragOver ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-50"
      }`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p className="text-center text-gray-600">Drag & drop files here</p>

      <input
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
