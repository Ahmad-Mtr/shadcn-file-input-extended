import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FilePreviewProps } from '@/types';

const FilePreview: React.FC<FilePreviewProps> = ({ files, onRemove }) => {
  return (
    <div className="space-y-2">
      {files.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {files.map((file, index) => {
            const isImage = file.type.startsWith('image/');

            return (
              <Card key={index} className="relative group">
                <CardContent className="p-2">
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
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => onRemove(index)}
                    className={cn(
                      'absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full w-6 h-6'
                    )}
                  >
                    <X size={16} />
                  </Button>
                </CardContent>
              </Card>
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
