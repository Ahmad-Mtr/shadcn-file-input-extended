import { useRef } from "react";

interface FileDropzoneProps {
  accept?: string;
  multiple?: boolean;
  dragOver: boolean;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  accept,
  multiple,
  dragOver,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileChange,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

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
