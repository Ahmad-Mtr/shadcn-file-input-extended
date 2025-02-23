import { FileInputProps } from "@/types";
import { useDragAndDrop } from "@/hooks";

const FileDropzone: React.FC<FileInputProps> = ({
  field,
  accept,
  multiple = false,
}) => {
  const {
    dragOver,
    fileRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
  } = useDragAndDrop({ multiple, onChange: field.onChange });

  return (
    <div
      className={`border-2 border-dashed p-4 text-center cursor-pointer h-48 flex items-center justify-center ${
        dragOver ? "bg-gray-200" : "bg-white"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileRef.current?.click()}
    >
      <p>Drag & drop files here, or click to select</p>
      <input
        type="file"
        ref={fileRef}
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default FileDropzone;
