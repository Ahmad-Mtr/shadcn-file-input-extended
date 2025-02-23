import { FilePreviewProps } from "@/types";
import { X } from "lucide-react";

const FilePreview: React.FC<FilePreviewProps> = ({ files, onRemove }) => {
  return (
    <div className="space-y-2">
      {files.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {files.map((file, index) => {
            const isImage = file.type.startsWith("image/");

            return (
              <div
                key={index}
                className="relative p-2 border rounded-lg shadow-md"
              >
                {isImage ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                ) : (
                  <div className="flex items-center justify-center h-32 bg-gray-100 rounded-md">
                    <span className="text-sm text-gray-600">{file.name}</span>
                  </div>
                )}

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition"
                >
                  <X size={16} />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No files selected</p>
      )}
    </div>
  );
};

export default FilePreview;
