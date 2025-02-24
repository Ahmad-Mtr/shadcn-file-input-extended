import FileItem from "./file-item";
import { FileListProps } from "@/types";

const Filelist: React.FC<FileListProps> = ({ files, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <div className="mt-2 space-y-2">
      {files.map((file, index) => (
        <FileItem
          key={index}
          file={file}
          onRemove={(event) => onRemove(index, event)}
        />
      ))}
    </div>
  );
};

export default Filelist;
