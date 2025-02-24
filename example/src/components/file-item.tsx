import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { FileItemProps } from '@/types';

const FileItem: React.FC<FileItemProps> = ({ file, onRemove }) => {
  return (
    <Card className="p-2 flex items-center justify-between">
      <span className="text-sm truncate max-w-[200px]">{file.name}</span>
      <Button variant="ghost" size="sm" onClick={(e) => onRemove(e)}>
        <X className="w-4 h-4" />
      </Button>
    </Card>
  );
};

export default FileItem;
